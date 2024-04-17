"use server";

import mongoose from "mongoose";
import { Answer, User } from "./models";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getQueries = async () => {
  const { getUser } = getKindeServerSession();
  const userId = (await getUser()).id;
  try {
    await mongoose.connect(process.env.MONGO);

    const id = await User.findOne({ username: userId }).select("_id");
    // console.log("user:", user);
    const queries = await Answer.find().lean({ user: id });
    console.log("queries:", queries);
    // const queries = await Answer.find(username);
    mongoose.disconnect();

    return queries;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when getting queries");
  }
};

export const getQuerry = async (id) => {
  try {
    await mongoose.connect(process.env.MONGO);
    const query = await Answer.findById(id);

    mongoose.disconnect();
    console.log("query");
    return query;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when getting query");
  }
};
