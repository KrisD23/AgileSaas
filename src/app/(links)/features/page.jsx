"use client";

import {
  Route,
  BookOpenCheck,
  Network,
  UserRound,
  Blend,
  HeartHandshake,
} from "lucide-react";

function FeaturesComponent() {
  return (
    <div className=" relative text-white">
      <div className=" w-full p-4  bg-base  ">
        <div className="p-8 mx-auto z-30 relative">
          <div className="flex flex-col items-center justify-center h-full m-44">
            <h1 className="text-4xl">FEATURES</h1>
            <p className="text-lg text-gray-300 font-light">
              Discover how AgileSaaS can empower your startup journey.
            </p>
          </div>

          <div className=" p-8 rounded-xl mx-16 mt-20 text-gray-200">
            {/* <h2 className="text-2xl mb-6">OUR FEATURES</h2> */}

            <div className="grid grid-cols-3 gap-x-28 gap-y-28">
              {/* Feature 1 */}
              <div>
                <Route className="h-10 w-10 my-2" />
                <h3 className="text-2xl mt-4 mb-4">Tailored Roadmaps</h3>
                <p className="text-gray-300 font-light">
                  Customizable roadmaps designed specifically for SaaS startups,
                  guiding every step of your product development and launch
                  process.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <BookOpenCheck className="h-10 w-10 my-2" />
                <h3 className="text-2xl mt-4 mb-4"> Accessibility Focus</h3>
                <p className="text-gray-300 font-light">
                  Ensure that startup guidance is accessible and understandable
                  to entrepreneurs of all backgrounds and levels of experience.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <HeartHandshake className="h-10 w-10 my-2" />
                <h3 className="text-2xl mt-4 mb-4">Comprehensive Support</h3>
                <p className="text-gray-300 font-light">
                  Receive detailed insights covering all aspects of starting and
                  growing a SaaS venture, from ideation to execution.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <Blend className="h-10 w-10 my-2" />
                <h3 className="text-2xl mt-4 mb-4">Iterative Refinement</h3>
                <p className="text-gray-300 font-light">
                  Facilitate continuous improvement of your product and startup
                  strategies through iterative refinement tools provided by
                  AgileSaaS.
                </p>
              </div>

              {/* Feature 5 */}
              <div>
                <UserRound className="h-10 w-10 my-2" />
                <h3 className="text-2xl mt-4 mb-4">User-Friendly Interface</h3>
                <p className="text-gray-300 font-light">
                  Launch your SaaS product with ease using AgileSaaS&apos;s
                  intuitive tools and user-friendly interface, streamlining the
                  process for entrepreneurs.
                </p>
              </div>

              {/* Feature 6 */}
              <div>
                <Network className="h-10 w-10 my-2" />
                <h3 className="text-2xl mt-4 mb-4">Community Engagement</h3>
                <p className="text-gray-300 font-light">
                  Connect with like-minded entrepreneurs, share knowledge, and
                  collaborate within the AgileSaaS community, fostering growth
                  and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;
