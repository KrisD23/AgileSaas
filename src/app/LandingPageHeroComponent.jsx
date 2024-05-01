"use client";
import { useRouter } from "next/navigation";
import { WandSparkles } from "lucide-react";
import React from "react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";
import HeroCard from "@/components/hero-components/HeroCard";
import Link from "next/link";
const perks = [
  "Ai generated Roadmaps",
  "Market Analysis and Insights",
  "Monetization Strategy",
  "Key features and benefits",
  "Tech Stack",
];

const LandingPageHeroComponent = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard/roadmap");
  };

  return (
    <div className="h-full w-full flex px-6">
      {/* Hero Section Container */}
      <div className="w-full flex flex-col mt-[10vh] items-center">
        {/* Text */}
        <div className="lg:w-[70%] ">
          <p className="text-3xl lg:text-5xl  lg:leading-tight text-center font-semibold">
            Create and Launch your
            <span className="text-blue-500"> Product </span>
            and <span className="text-blue-500">Startup</span> with Ease
          </p>
        </div>
        <div className="mt-8 lg:w-[40%] w-full">
          <p className="text-center lg:leading-7 lg:text-xl  text-gray-500">
            Create and launch your product and startup with ease. Make it
            accessible to everyone. Generate and refine your product and startup
            roadmaps with ease.
          </p>
        </div>

        {/* Input */}
        <div className="mt-8 w-full lg:w-[50%] ">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="input px-1 py-0 input-bordered rounded-lg border-gray-200  border flex items-center gap-2 shadow-md shadow-blue-500">
              <input
                type="text"
                className="grow px-2  "
                placeholder="Used book selling store"
              />
              <RegisterLink className="flex gap-2 items-center justify-center h-10 w-[30%] rounded-lg bg-blue-400 text-white">
                <WandSparkles size={20} />
                Generate
              </RegisterLink>
            </label>
          </form>
        </div>

        {/* Hero Cards Features section */}
        <div
          id="features"
          className="w-full flex flex-col lg:flex-row gap-4 mt-8 lg:px-[140px] lg:gap-16"
        >
          <HeroCard image="/roadmap.svg" title="Ai Generated Roadmaps" />
          <div className="flex flex-col items-center gap-2 justify-center lg:w-[50%]  ">
            <h2 className="text-3xl text-center w-full lg:text-start font-semibold">
              Design & Devleop Faster and <br /> Better with Roadmaps
            </h2>
            <p className="text-center lg:text-start w-full lg:leading-7  leading-7 text-gray-500 ">
              Unlock your full potential and accelerate your development process
              with our tailored roadmaps. Design and develop faster, smarter,
              and more efficiently, turning your ideas into reality with ease.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 mt-8 lg:px-[140px] lg:gap-16  ">
          <div className="flex flex-col items-center gap-2 justify-center lg:w-[50%]  order-last lg:order-first ">
            <h2 className="text-3xl text-center w-full lg:text-start font-semibold">
              Market Insights for Informed Decisions
              <br />
            </h2>
            <p className="text-center lg:text-start w-full lg:leading-7  leading-7 text-gray-500 ">
              Gain a competitive edge with our comprehensive market insights.
              Understand customer needs, industry trends, and competitor
              strategies to design and develop products that capture market
              opportunities effectively. With our data-driven approach, you can
              make informed decisions and steer your project towards success.
            </p>
          </div>

          <HeroCard image="/market.svg" title="Market Analysis" />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 mt-8 lg:px-[140px] lg:gap-16">
          <HeroCard image="/money.svg" title="Monetization Strategy" />
          <div className="flex flex-col items-center gap-2 justify-center lg:w-[50%]  ">
            <h2 className="text-3xl text-center w-full lg:text-start font-semibold">
              Strategic Monetization Solutions
            </h2>
            <p className="text-center lg:text-start w-full lg:leading-7  leading-7 text-gray-500 ">
              Maximize the revenue potential of your project with our strategic
              monetization solutions. Our AI analyzes market trends and user
              behaviors to recommend tailored strategies that align with your
              project&apos;s goals. From subscription models to ad-based
              revenue, we help you choose the right path to profitability.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 mt-8 lg:px-[140px] lg:gap-16">
          <div className="flex flex-col items-center gap-2 justify-center lg:w-[50%] order-last lg:order-first  ">
            <h2 className="text-3xl text-center w-full lg:text-start font-semibold">
              Essential Features, Elevated Experience
            </h2>
            <p className="text-center lg:text-start w-full lg:leading-7  leading-7 text-gray-500 ">
              Identify the core features that will set your project apart. Our
              AI analyzes industry standards and user expectations to recommend
              key features that enhance user experience and drive engagement.
              From innovative functionalities to seamless integrations, we help
              you prioritize features that matter most to your audience.
            </p>
          </div>
          <HeroCard image="/keyFeatures.svg" title="Key Features" />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 mt-8 lg:px-[140px] lg:gap-16">
          <HeroCard image="/code.svg" title="Recommended Tech Stack" />
          <div className="flex flex-col items-center gap-2 justify-center lg:w-[50%]  ">
            <h2 className="text-3xl text-center w-full lg:text-start font-semibold">
              Empowering Tech Stack Recommendations
            </h2>
            <p className="text-center lg:text-start w-full lg:leading-7  leading-7 text-gray-500 ">
              Discover the optimal technology stack for your project. Our AI
              evaluates your project requirements and suggests the most suitable
              technologies, frameworks, and tools to streamline development and
              enhance performance. From front-end frameworks to back-end
              databases, we help you build with the best.
            </p>
          </div>
        </div>

        {/* Much more */}

        <div className="flex flex-col items-center mt-14 lg:mt-20 gap-2 ">
          <div className="text-3xl text-center font-semibold ">
            Create SaaS in a Week
          </div>
          <p>Join our community of SaaS startups</p>
          <RegisterLink className=" h-10 flex font-semibold  items-center bg-blue-500 text-white px-6 py-1 rounded-2xl text-center">
            Sign Up And Start Today
          </RegisterLink>
        </div>

        {/* Pricing section */}
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

            <Link
              className="btn rounded-lg mt-5"
              href="/dashboard/subscription"
            >
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
      </div>
    </div>
  );
};

export default LandingPageHeroComponent;
