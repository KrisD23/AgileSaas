import Image from "next/image";
import React from "react";

const HeroCard = ({ image, title }) => {
  return (
    <div className="mt-20 w-full max-w-[600px] ">
      <div className="bg-blue-500 h-full py-5 rounded-2xl flex flex-col items-center ">
        <div className="text-2xl text-white font-semibold my-3 uppercase">
          {title}
        </div>
        <Image src={image} width={250} height={250} alt={title} />
      </div>
    </div>
  );
};

export default HeroCard;
