import { headers } from "next/headers";

import { stripe } from "@/lib/stripe";

import { User } from "@/lib/models";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new Response("webhook error", { status: 400 });
  }

  const session = event.data.object;

  if (event.type === "checkout.session.completed") {
    const userId = session.metadata.userId;
    try {
      console.log("userId:", userId);
      await mongoose.connect(process.env.MONGO);

      const foundUser = await User.findOne({ username: userId });
      if (!foundUser) {
        throw new Error("User not found");
      }
      console.log("isPremiumUser:", foundUser.isPremiumUser);
      if (!foundUser.isPremiumUser) {
        foundUser.isPremiumUser = true;
        await foundUser.save();
        console.log("User upgraded to premium.");
      } else {
        console.log("User is already a premium user.");
      }
      mongoose.disconnect();
    } catch (error) {
      console.error("Error getting payment status:", error);
    }

    console.log(12);
  }

  return new Response(null, { status: 200 });
}
