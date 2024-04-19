import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer p-10 mt-32 bg-base-200 text-neutral-content w-full">
      <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter text-gray-100 transition-colors duration-150 hover:text-gray-400"
        >
          Agliesaas
        </Link>
        <span
          className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
          aria-hidden={true}
        >
          /
        </span>
        <p className=" text-sm text-slate-300 ">© 2024 Agliesaas</p>
      </div>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/dashboard/roadmap" className="link link-hover">
          Roadmap
        </Link>
        <Link href="/dashboard/queries" className="link link-hover">
          Queries
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about" className="link link-hover">
          About us
        </Link>
        <Link href="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/terms-of-use" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/privacy-policy" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="/cookie-policy" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default FooterComponent;
