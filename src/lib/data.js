"use server";

import mongoose from "mongoose";
import { Answer, User } from "./models";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export const getQueries = async () => {
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

    const id = await User.findOne({ username: userId }).lean().select("_id");

    const queries = await Answer.find({ user: id }).lean();
    console.log("queries:", queries);

    mongoose.disconnect();
    return queries;
  } catch (error) {
    console.error("Error fetching queries:", error);
    throw new Error("Something went wrong when getting queries");
  }
};

export const getQuerry = async (id) => {
  try {
    await mongoose.connect(process.env.MONGO);
    const query = await Answer.findById(id).lean();

    mongoose.disconnect();
    console.log("query");
    return query;
  } catch (error) {
    console.error("Error fetching query:", error);
    throw new Error("Something went wrong when getting query");
  }
};
