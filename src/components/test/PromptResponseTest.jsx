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
          <div>{data && console.log(data)}</div>
        </button>
      </form>
    </div>
  );
};

export default PromptResponseTest;
