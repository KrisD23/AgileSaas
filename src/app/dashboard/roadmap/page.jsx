import PromptResponseTest from "@/components/test/PromptResponseTest";
import { User } from "@/lib/models";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import React from "react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const username = await getUser();
  // console.log("username:", username.id)w
  const user = await User.findOne({ username: username.id });
  const userId = user._id.toString();

  return (
    <div>
      <PromptResponseTest userId={userId} />
    </div>
  );
};

export default page;
