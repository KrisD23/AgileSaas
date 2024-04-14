"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Roadmap",
    href: "/dashboard/roadmap",
  },

  {
    name: "Subscription",
    href: "/dashboard/subscription",
  },
];

const DashboardNavItems = () => {
  const path = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <li key={item.name}>
          <>
            <Link
              href={item.href}
              className={`block py-2 px-4 ${
                path === item.href ? "bg-blue-500 text-white font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          </>
        </li>
      ))}
    </>
  );
};

export default DashboardNavItems;
