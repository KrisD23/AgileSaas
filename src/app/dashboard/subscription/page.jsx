import { getStripeSession } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async () => {
  async function createSubscription() {
    "use server";
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();
    const userId = kindeUser.id;

    const subscriptionUrl = await getStripeSession(userId);

    return redirect(subscriptionUrl);
  }

  return (
    <div className="flex flex-col h-[90vh] justify-center items-center   gap-10">
      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-3xl text-center">Subscription</h1>
        <p>Subscribe to our premium plan and get access to all features.</p>
        <p>Reach and fuck your goals faster and better</p>
        <Image
          src="/subscription.svg"
          className="z-[-1]"
          alt="discount"
          height={300}
          width={300}
        />
      </div>
      <div>
        <form action={createSubscription}>
          <button type="submit" className="btn btn-primary">
            Fuck it
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
