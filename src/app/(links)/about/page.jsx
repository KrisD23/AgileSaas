import { Instagram, Twitter, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col text-center gap-5 px-5">
      <h1 className="text-3xl font-bold mt-10">Agile Saas</h1>
      <p className="text-center text-gray-500 max-w-[600px] mx-auto">
        Agile Saas provides a fast, easy, and accessible way to create and
        launch your product and startup. It generates and refines your product
        and startup roadmaps with ease.
      </p>

      {/* About the developers */}

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Developers</h1>

        {/* Developers */}
        <div className="flex gap-5 justify-between mx-auto w-full max-w-[600px]">
          {/* Developer 1 */}
          <div className="w-1/2 ring-1 ring-gray-300 rounded-2xl p-3 flex flex-col items-center gap-2">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold  ">Krishan Dwivedi</h1>
            <div className="flex gap-3 justify-center text-gray-500">
              <Link href={"#"}>
                <Twitter size={30} />
              </Link>
              <Link href={"https://www.instagram.com/krisd23_/"}>
                <Instagram size={30} />
              </Link>
            </div>
          </div>

          {/* Developer 1 */}
          <div className="w-1/2  ring-1 ring-gray-300 rounded-2xl p-3 flex flex-col items-center gap-2">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold  ">Ansh Soni</h1>
            <div className="flex gap-3 justify-center text-gray-500">
              <Link href={"#"}>
                <Twitter size={30} />
              </Link>
              <Link href={"https://www.instagram.com/ansh._soni._/"}>
                <Instagram size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Editor */}

      <div className="w-full px-auto flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Video Editor</h1>

        <div className="w-full mx-auto max-w-[600px]  ring-1 ring-gray-300 rounded-2xl p-3 flex flex-col items-center gap-2">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://images.pexels.com/photos/3030332/pexels-photo-3030332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </div>
          <h1 className="text-2xl font-semibold  ">Rajneesh Dwivedi</h1>
          <div className="flex gap-3 justify-center text-gray-500">
            <Link href={"#"}>
              <Twitter size={30} />
            </Link>
            <Link href={"https://www.instagram.com/ansh._soni._/"}>
              <Instagram size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
