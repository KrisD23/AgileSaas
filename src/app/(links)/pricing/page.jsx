import { CheckCircle, CircleX } from "lucide-react";

CheckCircle;
function PricingComponent() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[700px] bg-gradient-to-r from-purple-800 to-blue-800"></div>
      <div className="flex justify-center items-center p-10 text-white h-[300px] relative z-10">
        <div className="text-center">
          <h1 className="text-7xl font-bold">Pricing</h1>
          <p className="mt-2 text-gray-200">
            Every plan starts off with a 14-day free trial.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center relative z-10 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-[-50px]">
          <div className="card w-96 bg-base-100 shadow-xl  rounded-2xl overflow-hidden p-4 m-1">
            <div className="card-body items-center text-center">
              <h2 className="text-3xl font-bold text-primary my-[40px]">
                ChatGPT
              </h2>
              {/* <h2 className="text-3xl font-bold text-primary mb-4">
                $20 <span className="text-lg font-bold text-primary mb-4">/ Lifetime</span>
                notdefiend
              </h2> */}
              {/* <div className="h-[52px]"/> */}
              <button className="btn btn-primary px-28 py-3 rounded-2xl hover:bg-primary-dark ">
                Buy Now
              </button>

              <div className="features text-left mt-6 ">
                <ul className="list-none p-0 m-0">
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">
                      Tailored Roadmaps
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">
                      Accessibility Focus
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">
                      Comprehensive Guidance
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">Refinement Tools</span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">Ease of Use</span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">
                      Holistic Approach
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">
                      Actionable Insights
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CircleX />
                    <span className="text-gray-200 ml-2">
                      Community Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl  rounded-2xl overflow-hidden p-4 m-1">
            <div className="card-body items-center text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Agilesaas
              </h2>
              <h2 className="text-3xl font-bold text-primary mb-4">
                $20{" "}
                <span className="text-lg font-bold text-primary mb-4">
                  / Lifetime
                </span>
              </h2>
              <button className="btn btn-primary px-28 py-3 rounded-2xl hover:bg-primary-dark ">
                Buy Now
              </button>

              <div className="features text-left mt-6 ">
                <ul className="list-none p-0 m-0">
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">
                      Tailored Roadmaps
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">
                      Accessibility Focus
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">
                      Comprehensive Guidance
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">Refinement Tools</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">Ease of Use</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">
                      Holistic Approach
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">
                      Actionable Insights
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">
                      Community Support
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckCircle />
                    <span className="text-gray-200 ml-2">Lifetime access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
