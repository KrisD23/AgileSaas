import Image from "next/image";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Avatar = async () => {
  const { getUser } = getKindeServerSession();
  const userImag = (await getUser()).picture;

  return (
    <div className="avatar">
      <div className="rounded-full">
        <Image src={userImag} alt="Avatar" height={35} width={35} />
      </div>
    </div>
  );
};

export default Avatar;
