"use client";

import Link from "next/link";

function DashboardComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-100 to-gray-700">
      <div className="text-center">
        <p className="mb-2 text-sm uppercase text-gray-500">How it works</p>
        <h1 className="text-5xl mb-4 font-bold flex flex-col gap-1 ">
          <span className="text-[3.05rem]">
            Generate and refine your Ideas.
          </span>
          <span>Fast, easy, and accessible.</span>
        </h1>
        <p className="mb-6 text-gray-500 ">
          Create and launch your product and startup.
        </p>

        <Link className="btn btn-primary" href="/dashboard/roadmap">
          Start now
        </Link>
      </div>
    </div>
  );
}

export default DashboardComponent;
