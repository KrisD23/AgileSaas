import Image from "next/image";
import React from "react";

const HeroCard = ({ image, title }) => {
  return (
    <div className="mt-14 w-full max-w-[600px] min-h-[350px]  ">
      <div className="bg-blue-500 h-full py-5 rounded-2xl shadow-lg shadow-gray-600 flex flex-col items-center ">
        <div className=" w-full  shadow-lg">
          <h1 className="py-2 text-2xl text-white font-bold uppercase text-center">
            {title}
          </h1>
        </div>
        <Image
          src={image}
          width={250}
          height={250}
          alt={title}
          className="my-auto"
        />
      </div>
    </div>
  );
};

export default HeroCard;
