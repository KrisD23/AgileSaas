import { openai } from "@/lib/openai";
// import { SendMessageValidator } from "@/lib/validators/SendMessageValidator";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();

  // const { message } = SendMessageValidator.parse(body);

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
      { role: "user", content: body },
    ],
  });

  const res = response.choices[0].message.content;

  return new NextResponse(res);
};
