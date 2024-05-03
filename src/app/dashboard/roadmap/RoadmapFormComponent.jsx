"use client";
import { useState } from "react";

import { addAnswer } from "@/lib/action";
import ModalComponent from "./ModalComponent";

import { WandSparkles } from "lucide-react";
import React from "react";

const RoadmapFormComponent = () => {
  // Result state
  const [result, setResult] = useState("");

  // Form handler : getting response from API
  async function submitAnswer(e) {
    e.preventDefault();
    const message = e.target.userInput.value;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/openai/response`,
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
  console.log(result);

  return (
    <div className="h-screen w-full flex flex-col items-center gap-10">
      <h1 className="text-3xl text-center font-semibold mt-4">
        Generate - Entire Plan & Strategy with Ease
      </h1>
      <p className="text-center text-gray-500 lg:w-[50%]">
        It&apos;s easy - simply proivde a concisely written description of your
        Idea and we&apos;ll generate your entire plan and strategy.
      </p>

      {/* Example cards */}
      <div className="flex gap-3 w-full max-w-[600px]">
        <div className="w-1/2 h-full ring-1 ring-gray-500 rounded-lg px-2 py-2">
          <h1 className=" font-semibold">A Marketplace : </h1>
          <p className="text-gray-500">
            An online platform that connects local farmers directly with
            consumers, providing fresh produce and supporting sustainable
            farming practices. Users can browse, purchase, and support local
            agriculture.
          </p>
        </div>
        <div className="w-1/2 h-full ring-1 ring-gray-500 rounded-lg px-2 py-2">
          <h1 className=" font-semibold">A Bootcamp : </h1>
          <p className="text-gray-500">
            Offering intensive coding courses for aspiring programmers, helping
            them develop skills and launch their careers in tech. Students
            receive mentorship and hands-on experience.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="w-full flex ring-1 ring-gray-500 rounded-lg lg:w-[50%] ">
        {/* <textarea rows="2" class="resize-none rounded-md"></textarea>
          <button>Generate</button> */}

        <form
          className="w-full flex items-center justify-center"
          onSubmit={submitAnswer}
        >
          <textarea
            disabled
            type="text"
            className="focus:outline-none resize-none w-full overflow-hidden px-1 py-2 rounded-lg"
            placeholder="An ecommerce ...... "
            name="userInput"
          />
          <button className="btn btn-ghost h-full text-white" disabled>
            <WandSparkles />
          </button>
        </form>
      </div>

      {/* Center-aligned container for ModalComponent */}
      <div className="flex mx-auto w-[800px]">
        {result && <ModalComponent result={result} />}
      </div>
    </div>
  );
};

export default RoadmapFormComponent;
