import React from "react";
import PaymentStatus from "@/components/payments/PaymentStatus";
import { CircleX } from "lucide-react";

const PaymentFailedPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PaymentStatus
        text="Payment Failed"
        subtext="We were unable to process your payment. Please try again later."
        navLink="/dashboard/subscription"
        navLinkText="Try again"
      >
        <CircleX size={200} />
      </PaymentStatus>
    </div>
  );
};

export default PaymentFailedPage;
