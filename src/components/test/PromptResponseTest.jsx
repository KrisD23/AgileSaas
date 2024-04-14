"use client";

import { addAnswer, submitQuery } from "@/lib/action";

import React, { useState } from "react";

const PromptResponseTest = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  const submitFunction = async (e) => {
    e.preventDefault();
    ("use server");
    const res = await submitQuery({ message, userId });
    setData(res);
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
        </button>
      </form>
      <div className="text-center">
        <p>{data && console.log(data["Overview"])}</p>
        <p>Overview : {data && data["Overview"]}</p>
        <br />
        <p>Monetization Strategy : {data && data["Monetization Strategy"]}</p>
        <br />
        <p> Marketing Strategy : {data && data["Marketing Strategy"]}</p>
      </div>
    </div>
  );
};

export default PromptResponseTest;
