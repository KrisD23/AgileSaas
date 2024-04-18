import React from "react";

const GetStarted = () => {
  return (
    <div className="py-12  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-200 sm:text-5xl">
            Get Started with Agilesaas
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Have an amazing SaaS idea? Start building it with Agilesaas in just
            10 seconds!
          </p>
        </div>
        <div className="flex mt-20 mb-14 justify-center">
          <div className="card w-[30rem] bg-base-100 shadow-xl">
            <div className="card-body ">
              <div className="flex justify-center text-center">
                <h2 className="card-title text-2xl">Get started</h2>
              </div>
              <p>
                Agilesaas provides the tools and platform you need to bring your
                idea to life quickly and efficiently. With Agilesaas, you can
                focus on developing your product while we handle the rest. Get
                started today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
