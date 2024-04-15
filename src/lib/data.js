"use server";

import { Answer, User } from "./models";
import { connectToDb } from "./utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getQueries = async () => {
  const { getUser } = getKindeServerSession();
  const userId = (await getUser()).id;
  try {
    await connectToDb();
    const user = await User.findOne({ username: userId });
    // console.log("user:", user);
    const queries = await Answer.find({ user: user._id });
    console.log("queries:", queries);
    // const queries = await Answer.find(username);
    return queries;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when getting queries");
  }
};
