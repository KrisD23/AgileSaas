"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AlreadySubscribe = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center   gap-10">
      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-3xl text-center mt-32">Subscription</h1>
        <p>You already subscribed! Fuck yeah.</p>
        {/* <p>Reach and fuck your goals faster and better</p> */}
        <div className="m-8">
          <Image
            src="/alreadysubscribed.svg"
            className="z-[-1]"
            alt="discount"
            height={300}
            width={300}
          />
        </div>
      </div>
      {/* <div>
        <form action={createSubscription}>
          <button type="submit" className="btn btn-primary">
            Fuck it
          </button>
        </form>
      </div> */}
      <Link href="/dashboard/roadmap" className="btn btn-primary">
        Go to Roadmap
      </Link>
    </div>
  );
};

export default AlreadySubscribe;
