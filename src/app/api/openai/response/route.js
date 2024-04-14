// import { db } from "@/db";
import { openai } from "@/lib/openai";
import { SendMessageValidator } from "@/lib/validators/SendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  //takes query and returns a response

  const body = await req.json();

  const { getUser } = getKindeServerSession();
  const user = getUser();

  // const { id: userId } = user;

  // if (!userId) return new Response("OPENAI_API_Unauthorized", { status: 401 });

  const { message } = SendMessageValidator.parse(body);

  //   await db.message.create({
  //     data: {
  //       text: message,
  //       isUserMessage: true,
  //       userId,
  //       fileId,
  //     },
  //   })

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.7, // Adjust temperature for creativity
    messages: [
      {
        role: "system",
        content:
          "Provide your SaaS idea and any additional details you have in mind:",
      },
      {
        role: "user",
        content: message,
      },
      {
        role: "system",
        content:
          "Generate a detailed response including roadmap, implementation, and tech stack suggestions for the provided SaaS idea:",
      },
    ],
  });

  // console.log(response.choices[0].message);
  const res = JSON.stringify(response.choices[0].message.content);

  return new NextResponse(res);
};
