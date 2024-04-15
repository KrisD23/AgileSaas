import PromptResponseTest from "@/components/test/PromptResponseTest";
import { User } from "@/lib/models";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  try {
    const { getUser } = getKindeServerSession();
    const username = await getUser();
    // console.log("username:", username?.id);

    if (!username) {
      // Handle case where user is not logged in
      return <div>User not logged in</div>;
    }

    const user = await User.findOne({ username: username.id });
    if (!user) {
      console.log("User not found for username:", username.id);
      // Handle case where user is not found
      return <div>User not found</div>;
    }

    const userId = user._id.toString();

    return (
      <div>
        Roadmap
        {/* <PromptResponseTest userId={userId} /> */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user</div>;
  }
};

export default page;
