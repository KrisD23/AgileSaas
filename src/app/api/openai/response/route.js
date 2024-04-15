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
    temperature: 0.1,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: "Share your SaaS idea and details." },
      {
        role: "system",
        content:
          "Generate roadmap, tech stack, monetization, market, competitors, and marketing.",
      },
      {
        role: "system",
        content:
          "Overview:\n\nKey Features:\n\nRoadmap:\n\nTech Stack Suggestions:\n\nMonetization:\n\nMarketing:\n\nJSON",
      },
      { role: "user", content: message },
    ],
  });

  const res = response.choices[0].message.content;
  console.log(res);

  return new NextResponse(res);
};
