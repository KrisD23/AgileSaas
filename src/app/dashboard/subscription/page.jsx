import AlreadySubscribe from "@/components/AlreadySubscribed";
import { checkPremiumUser } from "@/lib/action";
import { getStripeSession } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import React from "react";
const perks = [
  "Ai generated Roadmaps",
  "Market Analysis and Insights",
  "Monetization Strategy",
  "Key features and benefits",
  "Tech Stack",
];

const page = async () => {
  const premiumUser = await checkPremiumUser();
  // const premiumUser = false;
  async function createSubscription() {
    "use server";
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();
    const userId = kindeUser.id;

    const subscriptionUrl = await getStripeSession(userId);

    return redirect(subscriptionUrl);
  }

  return (
    <div className="h-screen w-full">
      {premiumUser ? (
        <AlreadySubscribe />
      ) : (
        <div
          id="pricing"
          className="h-screen w-full flex flex-col px-6 gap-5 items-center"
        >
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
            <h1 className="text-3xl font-semibold  text-gray-200">
              Get Going{" "}
            </h1>
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

            <form action={createSubscription} className="btn rounded-lg mt-5">
              <button type="submit">Buy Now</button>
            </form>

            {/* <Link
              className="btn rounded-lg mt-5"
              href="/dashboard/subscription"
            >
              Buy Now
            </Link> */}

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
      )}
    </div>
  );
};

export default page;
