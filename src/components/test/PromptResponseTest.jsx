"use client";

import { addAnswer } from "@/lib/action";
import mongoose from "mongoose";
import React, { useState } from "react";

const PromptResponseTest = ({ userId }) => {
  console.log("userId:", userId);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

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
      // console.log("response:", response);
      // const newData = await response.text();
      // console.log("newData:", newData);

      const data = response.json();

      console.log(data);

      // console.log(JSON.stringify(jsonData, null, 2));
      setResponse(data);
      // await addAnswer({
      //   promptInput: message,
      //   content: data,
      //   userId,
      // });

      // console.log("data:", data);
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
