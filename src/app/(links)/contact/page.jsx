"use client";
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Contact me";

  const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     setError(false);
  //     setSuccess(false);

  //     emailjs
  //       .sendForm(
  //         process.env.NEXT_PUBLIC_SERVICE_ID,
  //         process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //         form.current,
  //         {
  //           publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  //         }
  //       )
  //       .then(
  //         () => {
  //           setSuccess(true);
  //           form.current.reset();
  //         },
  //         (err) => {
  //           setError(true);
  //         }
  //       );
  //   };

  return (
    <div className="h-full mt-12">
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-[80vh] lg:w-1/2 flex items-center justify-center lg:flex-col ">
          <div className="text-center lg:self-center text-5xl font-medium">
            Contact Us
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          //   onSubmit={}
          ref={form}
          className="h-[1/2] lg:h-full lg:w-1/2 bg-base-200 rounded-3xl text-xl flex flex-col gap-8 justify-center p-24 sm:mt-2"
        >
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <label className="flex">
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </label>
          <button className="btn btn-primary rounded font-semibold text-gray-200 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
