"use client";
import Image from "next/image";
import React from "react";

const RoadmapUnsubscribe = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center   gap-10">
      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-3xl text-center mt-10">Roadmap</h1>
        <p>Oops you need to Subscribe first!</p>
        {/* <p>Reach and fuck your goals faster and better</p> */}
        <div className="m-8">
          <Image
            src="/subscribtion.svg"
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
      <a href="/dashboard/subscription" className="btn btn-primary">
        Go to Subscribtion
      </a>
    </div>
  );
};

export default RoadmapUnsubscribe;
