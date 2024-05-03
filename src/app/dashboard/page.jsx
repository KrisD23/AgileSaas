import { User } from "@/lib/models";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import DashboardComponent from "./DashboardComponent";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  try {
    const user = await getUser();
    if (!user) {
      redirect("/");
    } else {
      await mongoose.connect(process.env.MONGO);
      const existingUser = await User.findOne({ username: user.id })
        .lean()
        .select("username");
      if (!existingUser) {
        // User does not exist, create a new user
        const newUser = new User({
          // Create new user object
          username: user.id,
          email: user.email,
          img: user.picture,
          given_name: user.given_name,
          family_name: user.family_name,
          isPremiumUser: false,
        });
        await newUser.save(); // Save user to database
        console.log("saved to db");
        console.log("New user created.");
      } else {
        console.log("User already exists.");
      }
      mongoose.disconnect();
    }
  } catch (error) {
    console.log(error);
  }
  return <div>{user && <DashboardComponent user={user} />}</div>;
};

export default page;
