


"use client";

import { useRouter } from "next/navigation";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { SiBinance } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

const cardStyle = "bg-white dark:bg-zinc-800 shadow-sm";

const paymentList = [
  {
    name: "BinancePay",
    time: "Instant - 30 minutes",
    fee: "0%",
    limit: "100 - 20,000 USD",
    icon: <SiBinance className="text-xl text-yellow-500" />,
  },
  {
    name: "Tether (USDT ERC20)",
    time: "Instant - 15 minutes",
    fee: "0%",
    limit: "10 - 20,000 USD",
    icon: <RiSecurePaymentLine className="text-xl text-blue-500" />,
  },
  {
    name: "UPI ID",
    time: "Instant - 45 minutes",
    fee: "0%",
    limit: "100 - 350 USD",
    icon: <RiBankLine className="text-xl text-green-600" />,
  },
  {
    name: "Skrill",
    time: "Instant - 1 Day",
    fee: "0%",
    limit: "10 - 12,000 USD",
    icon: <FaMoneyCheckAlt className="text-xl text-purple-500" />,
  },
];

const PaymentMethodWithdraw = () => {
  const router = useRouter();

  const handlePayLater = () => {
    router.push("/withdraw");
  };

   const handleBack = () => {
    router.push("/withdraw");
  };

   const handleKycForm = () => {
    router.push("/withdraw-form");
  };

  return (
    <>
      <div className="flex justify-between pr-10 pt-2 pb-10">
        <div className="flex items-center gap-2">
          <span className="text-[1.8rem] font-semibold cursor-pointer" onClick={handleBack}>
            <IoIosArrowDropleft />
          </span>
          <p className="text-[1.1rem] md:text-[1.6rem] font-bold text-[var(--color-text)]">
            Proceed to pay $100 payment name
          </p>
        </div>
        <button
          onClick={handlePayLater}
          className="cursor-pointer rounded-md bg-[var(--color-green)] px-4 py-2 text-[1rem] font-bold text-white md:text-[1.2rem]"
        >
          Pay Later
        </button>
      </div>

      <div className="mx-auto max-w-5xl p-10">
        {/* Saved Methods */}
        <div className="mb-6 cursor-pointer " onClick={handleKycForm}>
          <h2 className="mb-4 md:text-[2rem] text-[1.4rem] font-bold text-[var(--color-text)]">My saved methods</h2>
          <div className="grid gap-4 sm:grid-cols-2 ">
            <div className={`rounded-xl border border-gray-500 p-3 bg-[var(--color-header)]`}>
              <div className="flex items-center justify-between text-[var(--color-text)]">
                <div className="flex items-center gap-2">
                  <span className=" font-bold text-[1.1rem] md:text-[1.2rem]">UPI . INR</span>
                </div>
                <span className="font-medium text-green-500">Verified</span>
              </div>
              <p className="font-semibold text-[1rem] md:text-[1.2rem]">sum****sbi</p>
            </div>

            <div className={`rounded-xl border border-gray-500 cursor-pointer p-4 bg-[var(--color-header)]`} onClick={handleKycForm}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>UPI</span>
                </div>
                <span className="font-medium text-green-500">Verified</span>
              </div>
              <p className="">860****ibl</p>
            </div>
          </div>
        </div>

        {/* All Payment Methods */}
        <div>
          <h2 className="mb-4 text-[1.4rem] md:text-[2rem] text-[var(--color-text)] font-bold">All payment methods</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {paymentList.map((method, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 rounded-xl border p-4 bg-[var(--color-header)]`}
              >
                <div className="mt-1">{method.icon}</div>
                <div>
                  <div className="flex items-center gap-2 font-semibold">
                    {method.name}
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-500 dark:bg-green-900">
                      Recommended
                    </span>
                  </div>
                  <p className="mt-1 text-sm">Processing time: {method.time}</p>
                  <p className="text-sm">Fee: {method.fee}</p>
                  <p className="text-sm">Limits: {method.limit}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-500 hover:underline">
            View all
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodWithdraw;

