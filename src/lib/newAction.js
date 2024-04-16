// import { openai } from "../lib/openai";

// export default async function getAnswerAction(question) {
//   console.log("working");
//   console.log(question);

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     temperature: 0.1,
//     response_format: { type: "json_object" },
//     messages: [
//       { role: "system", content: "Share your SaaS idea and details." },
//       {
//         role: "system",
//         content:
//           "Generate roadmap, tech stack, monetization, market, competitors, and marketing.",
//       },
//       {
//         role: "system",
//         content:
//           "Overview:\n\nKey Features:\n\nRoadmap:\n\nTech Stack Suggestions:\n\nMonetization:\n\nMarketing:\n\nJSON",
//       },
//       { role: "user", content: "to develop a saas app" },
//     ],
//   });

//   // Return the generated response
//   // const res = response.choices[0].message.content;
//   // console.log(res);
//   // return res;
// }
