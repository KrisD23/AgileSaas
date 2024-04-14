import React from "react";
import { CircleCheckBig } from "lucide-react";
import PaymentStatus from "@/components/payments/PaymentStatus";
const PaymentSuccessfulPage = async () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PaymentStatus
        text="Payment Successful"
        subtext="Thank you for your payment!"
        navLink="/dashboard"
        navLinkText="Go to Dashboard"
      >
        <CircleCheckBig size={200} />
      </PaymentStatus>
    </div>
  );
};

export default PaymentSuccessfulPage;
