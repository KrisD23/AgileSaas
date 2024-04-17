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
    const { _id } = await User.findOne({ username: user.id })
      .lean()
      .select("_id");

    const newAnswer = new Answer({
      user: _id,
      message: { inputMessage: promptInput, responseMessage: content },
    });
    console.log("newAnswer saved to db");
    await newAnswer.save();
    revalidatePath("/dashboard/queries");
    console.log("saved to db");
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when creating answer");
  }
};

export const checkPremiumUser = async () => {
  let userId;
  try {
    const { getUser } = getKindeServerSession();
    userId = (await getUser())?.id; // Handle potential errors and null values
  } catch (error) {
    console.error("Error fetching user data:", error);
    return []; // Or handle the error differently
  }

  if (!userId) {
    return []; // No user found, return empty array or handle differently
  }

  try {
    await mongoose.connect(process.env.MONGO);
    const { isPremiumUser } = await User.findOne({ username: user.id })
      .lean()
      .select("isPremiumUser");
    mongoose.disconnect();
    return isPremiumUser;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when creating answer");
  }
};
