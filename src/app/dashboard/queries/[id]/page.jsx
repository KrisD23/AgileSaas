"use client";

import { useParams } from "next/navigation";

import React from "react";

const SlugPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>{id}</div>;
};

export default SlugPage;
