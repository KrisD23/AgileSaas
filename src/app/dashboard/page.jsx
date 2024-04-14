import { addUser } from "@/lib/action";
import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const newUser = async () => {
    try {
      connectToDb();
      const existingUser = await User.findOne({ username: user.id });

      if (!existingUser) {
        // User does not exist, create a new user
        await addUser({ user });

        console.log("New user created:");
      } else {
        console.log("User already exists:", existingUser);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong when creating user");
    }
  };

  await newUser();

  // if (!user) {
  //   redirect("/");
  // }

  return <div>DashboardPage</div>;
};

export default DashboardPage;
