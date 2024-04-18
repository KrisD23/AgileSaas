import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Avatar from "../avatar/Avatar";
import { AlignJustify } from "lucide-react";

const LandingPageNavBar = async () => {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* Hamburger icon */}
            <AlignJustify />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {/* <a href="/pricing">Pricing</a> */}
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <a>Resources</a>
              <ul className="p-2">
                <li>
                  <a>Getting Started</a>
                </li>
                <li>
                  <a>Guides</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Launchpad IQ{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li className="dropdown dropdown-hover">
            <div tabIndex={0}>Resources</div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Getting Started</a>
              </li>
              <li>
                <a>Guides</a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Dropdown menu */}
        {(await isAuthenticated()) ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="" className="">
              <Avatar />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <RegisterLink className="btn btn-outline ">
              Start for Free
            </RegisterLink>
            <LoginLink className="btn">Login</LoginLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageNavBar;
