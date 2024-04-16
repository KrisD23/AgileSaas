import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import Image from "next/image";

const LandingPageHeroComponent = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={"/hero.svg"} width={500} height={500} alt="hero image" />
        <div className="text-center lg:text-left w-[500px]">
          <h1 className="text-5xl font-bold">Agile Saas Platform</h1>
          <p className="py-6">
            Create and launch your product and startup with ease. Make it
            accessible to everyone. Generate and refine your product and startup
            roadmaps with ease.
          </p>

          {/* TO DO: Add a link to the dashboard */}
          <RegisterLink className="btn btn-primary">Get Started</RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHeroComponent;
