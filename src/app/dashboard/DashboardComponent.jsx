import Link from "next/link";
import React from "react";

const DashboardComponent = ({ user }) => {
  return (
    <div className="h-screen w-full  items-center flex flex-col gap-2">
      <h1 className="text-3xl font-bold mt-10">Welcome to Agile SaaS</h1>
      <p className="text-gray-500 font-semibold text-xl">
        We are currently working on it , Come back Soon
      </p>
      <h2 className="text-gray-500 font-semibold text-xl">{user.given_name}</h2>
      {/* <p className="text-blue-500 font-semibold uppercase">Go to :</p> */}
      <div className="flex gap-2 ">
        <Link href={"dashboard/roadmap"} className="btn btn-outline">
          Roadmap to Get Started
        </Link>
        <Link href={"dashboard/subscription"} className="btn btn-outline">
          Or Subscription
        </Link>
      </div>
    </div>
  );
};

export default DashboardComponent;
