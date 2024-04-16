"use client";

import { useState } from "react";

import { addAnswer } from "@/lib/action";
import ModalComponent from "./ModalComponent";

function RoadmapFormComponent() {
  const [result, setResult] = useState("");

  async function submitAnswer(e) {
    e.preventDefault();
    const message = e.target.getInput.value;
    try {
      const response = await fetch(
        `http://localhost:3000/api/openai/response`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        }
      );

      const responseData = await response.json();
      setResult(responseData);

      await addAnswer({ promptInput: message, content: responseData });
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong when fetching data");
    }
  }
  // console.log(result);

  return (
    <>
      <div className="flex items-center justify-center h-[500px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Generate. Refine. Create.</h1>
          <p className="mb-6">
            Generate and refine your product and startup roadmaps with ease.
          </p>

          <form onSubmit={submitAnswer}>
            <div className=" text-white p-4 rounded-lg mb-6 w-[800px]">
              <input
                type="text"
                placeholder="An ecommerce ...... "
                className="bg-gray-800 p-2 rounded-lg ring-1 placeholder:text-center ring-gray-600 w-full mb-2"
                name="getInput"
              />

              {/* <div className="flex items-center justify-between ">
            <div>
            <button className="btn btn-ghost ">Image</button>
            <button className="btn btn-ghost ">Public</button>
            </div>
            <div>
            <button className="btn btn-primary  ">Speed</button>
            <button className="btn btn-secondary  ">Quality</button>
            </div>
          </div> */}
            </div>
          </form>

          {/* Breadcrumb navigation */}
          <nav className="text-gray-600">
            Product / Startup / Saas → Roadmap / Plan → AgileDev
          </nav>
        </div>
      </div>
      {/* Center-aligned container for ModalComponent */}
      <div className="flex mx-auto w-[800px]">
        {result && <ModalComponent result={result} />}
      </div>
    </>
  );
}

export default RoadmapFormComponent;
