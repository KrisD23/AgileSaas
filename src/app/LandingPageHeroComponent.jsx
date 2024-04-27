"use client";
import { WandSparkles } from "lucide-react";
import React from "react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";
import HeroCard from "@/components/hero-components/HeroCard";

const LandingPageHeroComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    redirect("/dashboard");
  };

  return (
    <div className="h-full w-full flex px-6">
      {/* Hero Section Container */}
      <div className="w-full flex flex-col mt-[10vh] items-center">
        {/* Text */}
        <div className="text-3xl text-center font-semibold">
          Create and Launch your<span className="text-blue-500"> Product </span>
          and <span className="text-blue-500">Startup</span> with Ease
        </div>
        <div className="mt-8">
          <p className="text-center ">
            Create and launch your product and startup with ease. Make it
            accessible to everyone. Generate and refine your product and startup
            roadmaps with ease.
          </p>
        </div>

        {/* Input */}
        <div className="mt-8 w-full">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="input px-1 py-0 input-bordered border-gray-300 rounded-lg border flex items-center gap-2">
              <input
                type="text"
                className="grow px-2"
                placeholder="Used book selling store"
              />
              <RegisterLink className="flex gap-2 items-center justify-center h-10 w-[30%] rounded-lg bg-blue-400 text-white">
                <WandSparkles size={20} />
                Generate
              </RegisterLink>
            </label>
          </form>
        </div>

        {/* Hero Cards */}
        <HeroCard image="/roadmap.svg" title="Ai Generated Roadmaps" />
        <HeroCard image="/hero.svg" title="Product Roadmaps" />
        <HeroCard image="/market.svg" title="Market Analysis" />

        {/* Much more */}

        <div className="text-3xl text-center font-semibold mt-8">
          And Much More
        </div>

        <RegisterLink className="mt-8 h-10 flex font-semibold  items-center bg-blue-500 text-white px-6 py-1 rounded-2xl text-center">
          Sign Up And Start Today
        </RegisterLink>
      </div>
    </div>
  );
};

export default LandingPageHeroComponent;
