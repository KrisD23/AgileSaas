import React from "react";
import Link from "next/link";

const PaymentStatus = ({
  text,

  subtext,
  children,
  navLink,
  navLinkText,
}) => {
  return (
    <div className="card w-96 bg-base-100 ">
      <figure className="px-10 pt-10">{children}</figure>
      <div className="card-body items-center text-center gap-6">
        <h2 className="card-title">{text}</h2>
        <p>{subtext}</p>
        <div className="card-actions">
          <Link className="btn btn-primary" href={navLink}>
            {navLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
