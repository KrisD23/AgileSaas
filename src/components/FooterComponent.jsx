import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer p-10 mt-32 bg-base-200 text-neutral-content w-full">
      <nav className="flex flex-col w-full text-center justify-center items-center">
        <h6 className="footer-title">Company</h6>
        <div className="flex gap-2">
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
        </div>
      </nav>
      <nav className="flex flex-col w-full justify-center items-center gap-2">
        <h6 className="footer-title">Legal</h6>
        <div>
          <Link href="/terms-of-use" className="link link-hover">
            Terms of use |
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            {" "}
            Privacy policy{" "}
          </Link>
          <Link href="/cookie-policy" className="link link-hover">
            | Cookie policy
          </Link>
        </div>
      </nav>

      <div className="name flex flex-col items-center justify-center w-full">
        <Link
          href="/"
          className="text-xl text-center font-semibold tracking-tighter text-gray-100 transition-colors duration-150 hover:text-gray-400"
        >
          Agliesaas
        </Link>

        <p className="text-sm text-slate-300 ">
          © 2024 Agliesaas, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
