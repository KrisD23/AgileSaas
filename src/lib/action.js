"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { revalidatePath } from "next/cache"; // Next.js cache module

import { Answer, User } from "./models"; // Database models
import mongoose from "mongoose";

export const addAnswer = async ({ promptInput, content }) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    await mongoose.connect(process.env.MONGO);
    const { _id } = await User.findOne({ username: user.id });

    const newAnswer = new Answer({
      user: _id,
      message: { inputMessage: promptInput, responseMessage: content },
    });
    console.log("newAnswer:", newAnswer);
    await newAnswer.save();
    revalidatePath("/dashboard/queries");
    console.log("saved to db");
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when creating answer");
  }
};

export const submitQuery = async ({ message, userId }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/openai/response/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }
    );
    const data = await response.json();

    await addAnswer({
      promptInput: message,
      content: JSON.stringify(data),
      userId,
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
