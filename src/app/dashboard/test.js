"use server";

import { addUser } from "@/lib/action";
import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const checkAndCreateUser = async () => {
  const { getUser } = getKindeServerSession();

  try {
    const user = await getUser();
    if (!user) {
      redirect("/");
    } else {
      connectToDb();
      const existingUser = await User.findOne({ username: user.id });
      if (!existingUser) {
        // User does not exist, create a new user
        await addUser({ user });
        console.log("New user created.");
      } else {
        console.log("User already exists.");
      }
    }
  } catch (error) {
    console.log(error);
  }
};
