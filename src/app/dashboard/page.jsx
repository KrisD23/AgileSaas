import { addUser } from "@/lib/action";
import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  const { getUser } = getKindeServerSession();

  const newUser = async () => {
    try {
      connectToDb();
      const user = await getUser();

      if (!user) {
        redirect("/");
      }

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

  newUser();

  // if (!user) {
  //   redirect("/");
  // }

  return <div>DashboardPage</div>;
};

export default DashboardPage;
