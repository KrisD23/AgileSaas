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
    response_format: { type: "json_object" },
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
      {
        role: "user",
        content:
          "Overview: \n\n" +
          "Key Features: \n\n" +
          "Roadmap: \n\n" +
          "Tech Stack Suggestions: \n\n" +
          "Monetization Strategy: \n\n" +
          "Marketing Strategy: ",
      },
      {
        role: "system",
        content: "Please provide an overview of your SaaS idea:",
      },
      {
        role: "system",
        content: "What are the key features of your SaaS idea?",
      },
      {
        role: "system",
        content: "What is your roadmap for implementing this idea?",
      },
      {
        role: "system",
        content: "What technologies do you suggest using for implementation?",
      },
      {
        role: "system",
        content: "How do you plan to monetize your SaaS product?",
      },
      {
        role: "system",
        content:
          "What is your marketing strategy for promoting your SaaS product? JSON",
      },
    ],
  });

  const res = response.choices[0].message.content;
  console.log(res);

  return new NextResponse(res);
};
