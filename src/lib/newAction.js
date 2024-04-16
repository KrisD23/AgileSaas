import OpenAI from "openai";

export const apiKey = new OpenAI(
  `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`
);

// import { openai } from "./openai";
// const apiKey = process.env.OPENAI_API_KEY;

export default async function getAnswerAction(question) {
  console.log("working");
  console.log(question);
  // const openai = new OpenAI({ apiKey });

  const response = await apiKey.chat.completions.create({
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
      { role: "user", content: question },
    ],
  });

  // Return the generated response
  const res = response.choices[0].message.content;
  console.log(res);
  return res;
}
