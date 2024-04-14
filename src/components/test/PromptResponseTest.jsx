"use client";

import { addAnswer } from "@/lib/action";

import React, { useState } from "react";

const PromptResponseTest = ({ userId }) => {
  console.log("userId:", userId);
  const [message, setMessage] = useState("");

  const submitFunction = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/openai/response/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );
      const data = await response.json();

      // console.log(JSON.stringify(data));

      await addAnswer({
        promptInput: message,
        content: JSON.stringify(data),
        userId,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="text-center">
      <form onSubmit={submitFunction}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button type="submit" className="btn btn-primary mt-4">
          Submit
          <div></div>
        </button>
      </form>
    </div>
  );
};

export default PromptResponseTest;
