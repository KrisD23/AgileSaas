import Link from "next/link";
import React from "react";

const perks = [
  "Ai generated Roadmaps",
  "Market Analysis and Insights",
  "Monetization Strategy",
  "Key features and benefits",
  "Tech Stack",
];

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col px-6 gap-5 items-center">
      <h1 className="text-yellow-200 text-xl text-center mt-10 font-bold">
        Pricing
      </h1>
      <h2 className="text-3xl text-center  font-bold">
        Save your precious Time and Launch Fast and Easy
      </h2>

      {/* Card */}
      <div
        className="w-full bg-blue-500 h-23 max-w-[600px] 
       rounded-xl p-4 flex flex-col gap-2 ring-2 ring-white"
      >
        <h1 className="text-3xl font-semibold  text-gray-200">Get Going </h1>
        <p className="text-gray-300 mt-1">
          Develop and Launch your Products and Startup with Ease
        </p>

        <div>
          <p className="text-3xl font-semibold  text-white">
            $19
            <span className="text-lg font-bold text-yellow-200">
              / Lifetime Access
            </span>
          </p>
        </div>

        <Link className="btn rounded-lg mt-5" href="/dashboard/subscription">
          Buy Now
        </Link>

        {/* perks */}
        <div>
          {perks.map((perk) => (
            <p className="text-white font-semibold mt-1" key={perk}>
              ✓ {perk}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
