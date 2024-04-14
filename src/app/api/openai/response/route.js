import { db } from "@/db";
import { openai } from "@/lib/openai";
import { SendMessageValidator } from "@/lib/validators/SendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { OpenAIStream, StreamingTextResponse } from "ai";

export const POST = async (req) => {
  //takes query and returns a response

  const body = await req.json();

  const { getUser } = getKindeServerSession();
  const user = getUser();

  const { id: userId } = user;

  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { message } = SendMessageValidator.parse(body);

  //   const file = await db.file.findFirst({
  //     where: {
  //       id: fileId,
  //       userId,
  //     },
  //   })

  //   if (!file)
  //     return new Response('Not found', { status: 404 })

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
    temperature: 0,
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Use the following prompt to generate a response from the OpenAI API:",
      },
      {
        role: "user",
        content: `
          Use the following prompt to generate a response from the OpenAI API:
  
          ----------------
  
          *Prompt:*
  
          Imagine a future where humans have colonized Mars. Write a news article describing a recent discovery made by a team of Martian scientists. The discovery should be significant and have implications for the future of Martian exploration and colonization.
  
          ----------------
  
          *Context:*
  
          Provide any additional context or details relevant to the prompt that you'd like the AI to consider when generating the response.
  
          ----------------
  
          *User Input:*
  
          Enter any specific questions or prompts for the AI here.
        `,
      },
    ],
  });

  //   const stream = OpenAIStream(response, {
  //     async onCompletion(completion) {
  //       await db.message.create({
  //         data: {
  //           text: completion,
  //           isUserMessage: false,
  //           fileId,
  //           userId,
  //         },
  //       })
  //     },
  //   })

  return new StreamingTextResponse(stream);
};
