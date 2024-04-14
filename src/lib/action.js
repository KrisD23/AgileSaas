"use server";

import { revalidatePath } from "next/cache"; // Next.js cache module
import { connectToDb } from "@/lib/utils"; // Database connection module
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; // Auth module
import { Answer, User } from "./models"; // Database models
import mongoose from "mongoose";

export const addUser = async ({ user }) => {
  /* 
    The function takes in an object with user details
    and saves the user to the database
    */
  const { family_name, given_name, picture, email, id } = user; // Destructure user details

  try {
    connectToDb(); // Connect to database
    const newUser = new User({
      // Create new user object
      username: id,
      email,
      img: picture,
      given_name,
      family_name,
      isPremiumUser: false,
    });
    await newUser.save(); // Save user to database
    console.log("saved to db"); // Log success message
    // revalidatePath("/admin"); // TODO: Revalidate admin route
  } catch (error) {
    console.log(error); // Log error
    return { error: "something went wrong when creating user" }; // Return error message
  }
};

export const addAnswer = async ({ promptInput, userId, content }) => {
  console.log(
    "userId:",
    userId,
    "promptInput:",
    promptInput,
    "content:",
    content
  );
  try {
    await connectToDb();
    const newAnswer = new Answer({
      user: userId,
      message: { inputMessage: promptInput, responseMessage: content },
    });
    console.log("newAnswer:", newAnswer);
    await newAnswer.save();
    revalidatePath("/dashboard/queries");
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when creating answer");
  }
};
