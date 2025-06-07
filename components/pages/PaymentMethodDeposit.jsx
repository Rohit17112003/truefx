"use client";

import { useRouter } from "next/navigation";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { SiBinance } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDropdown } from "react-icons/io";

const cardStyle = "bg-white dark:bg-zinc-800 shadow-sm";

const paymentList = [
  {
    name: "BinancePay",
    time: "Instant - 30 minutes",
    fee: "0%",
    limit: "100 - 20,000 USD",
    img: "../image/icon/image 8.svg",
  },
  {
    name: "Tether (USDT ERC20)",
    time: "Instant - 15 minutes",
    fee: "0%",
    limit: "10 - 20,000 USD",
    img: "../image/icon/image 9.svg",
  },
  {
    name: "UPI ID",
    time: "Instant - 45 minutes",
    fee: "0%",
    limit: "100 - 350 USD",
    img: "../image/icon/image 10.svg",
  },
  {
    name: "Skrill",
    time: "Instant - 1 Day",
    fee: "0%",
    limit: "10 - 12,000 USD",
    img: "../image/icon/image 11.svg",
  },
];

const PaymentMethodDeposit = () => {
  const router = useRouter();

  const handlePayLater = () => {
    router.push("/deposit");
  };

  const handleBack = () => {
    router.push("/deposit");
  };

  const handleKycForm = () => {
    router.push("/deposit-form");
  };

  return (
    <>
      <div className="flex justify-between pt-2 pb-10 md:pr-10">
        <div className="flex items-center gap-2 text-[var(--color-upiheading)]">
          <span
            className="cursor-pointer text-[1.8rem] font-semibold"
            onClick={handleBack}
          >
            <IoIosArrowDropleft />
          </span>
          <p className="text-[1rem] font-bold md:text-[1.7rem]">
            Proceed to pay $100 payment name
          </p>
        </div>
        <button
          onClick={handlePayLater}
          className="cursor-pointer rounded-md bg-[var(--color-green)] px-2.5 py-2 text-[0.9rem] font-bold text-white md:px-4 md:text-[1.2rem]"
        >
          Pay Later
        </button>
      </div>

      <div className="mx-auto max-w-5xl md:p-10">
        {/* Saved Methods */}
        <div className="mb-6">
          <h2 className="mb-4 text-[1.4rem] font-bold text-[var(--color-upiheading)] md:text-[2rem]">
            My saved methods
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div
              className={`cursor-pointer rounded-xl border border-[#ccc] bg-[var(--color-upibg)] p-3`}
              onClick={handleKycForm}
            >
              <div className="flex items-start justify-between text-[var(--color-text)]">
                <div className="flex items-start gap-2">
                  <img src="../image/icon/image 10.svg" alt="upi" />
                  <div className="flex flex-col">
                    <span className="text-[1.1rem] font-bold md:text-[1.2rem]">
                      UPI . INR
                    </span>
                    <p className="text-[1rem] font-semibold md:text-[1.2rem]">
                      sum****sbi
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-3xl bg-[#F0FCF7] px-2 text-[0.9rem] font-medium text-[var(--color-verified)]">
                    Verified
                  </span>
                  <span className="text-[1.1rem] md:text-[1.4rem]">
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`cursor-pointer rounded-xl border border-[#ccc] bg-[var(--color-upibg)] p-3`}
              onClick={handleKycForm}
            >
              <div className="flex items-start justify-between text-[var(--color-text)]">
                <div className="flex items-start gap-2">
                  <img src="../image/icon/image 10.svg" alt="upi" />
                  <div className="flex flex-col">
                    <span className="text-[1.1rem] font-bold md:text-[1.2rem]">
                      UPI
                    </span>
                    <p className="text-[1rem] font-semibold md:text-[1.2rem]">
                      860****ibl
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-3xl bg-[#F0FCF7] px-2 text-[0.9rem] font-medium text-[var(--color-verified)]">
                    Verified
                  </span>
                  <span className="text-[1.1rem] md:text-[1.4rem]">
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Payment Methods */}
        <div>
          <h2 className="mb-4 text-[1.4rem] font-bold text-[var(--color-upiheading)] md:text-[2rem]">
            All payment methods
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {paymentList.map((method, index) => (
              <div
                key={index}
                className={`shadow-text-[var(--color-upiheading)] flex flex-col gap-4 rounded-xl border border-gray-300 bg-[var(--color-bankbg)] p-4 shadow`}
              >
                <div className="flex items-start justify-between text-[var(--color-text)]">
                  <div className="flex items-start gap-3">
                    <img src={method.img} alt="bank" className="w-12" />
                    <div className="">
                      <div className="text-[1.1rem] font-bold md:text-[1.22rem]">
                        {method.name}
                      </div>
                      <p className="mt-1 text-[0.9rem] font-semibold text-[var(--color-text)] md:w-[310px] md:text-[1.1rem]">
                        <span className="text-[var(--color-banktext)]">
                          {" "}
                          Processing time:
                        </span>{" "}
                        {method.time}
                      </p>
                      <p className="text-sm text-[0.9rem] font-semibold text-[var(--color-text)] md:text-[1rem]">
                        <span className="text-[var(--color-banktext)]">
                          Fee:
                        </span>{" "}
                        {method.fee}
                      </p>
                      <p className="text-sm text-[0.9rem] font-semibold text-[var(--color-text)] md:text-[1rem]">
                        <span className="text-[var(--color-banktext)]">
                          Limits:
                        </span>{" "}
                        {method.limit}
                      </p>
                    </div>
                  </div>
                  <div className="md:-ml-4">
                    <span className="rounded-full bg-[#F0FCF7] px-2 py-0.5 text-[0.7rem] font-semibold tracking-wider text-[var(--color-verified)] md:text-[0.9rem]">
                      Recommended
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 flex items-center gap-2  text-[var(--color-upiheading)]  bg-[var(--color-bgbtn)] font-bold md:text-[1.2rem] text-[1rem] px-3 py-1.5 rounded-md">
            View all
            <span className="md:text-[1.6rem] text-[1rem] ">
              <IoIosArrowDropdown />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodDeposit;
