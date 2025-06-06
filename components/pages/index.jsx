
"use client";
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";
import { FaApple } from "react-icons/fa";
import { useRef, useState } from "react";

const HomePage = () => {
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const defaultValue = inputRef.current?.defaultValue;
    if (defaultValue) {
      navigator.clipboard
        .writeText(defaultValue)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch((err) => console.error("Copy failed:", err));
    }
  };

  const { stats } = data;

  return (
    <div className="space-y-5">
      <section className="grid gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatContainer key={index} index={index} {...stat} />
        ))}
      </section>

      <div className="grid items-center gap-4 pb-10 md:grid-cols-2">
        {/* Left Panel */}
        <div className="rounded-lg bg-[var(--color-referralbg)] px-5">
          <h1 className="pt-8 text-[1rem] font-semibold text-[var(--color-text)]">
            REFERRAL PROGRAM
          </h1>
          <p className="py-2 text-[0.85rem] text-[var(--color-secondary)]">
            Spread the word on and keep earning, even when you aren’t trading.
            More the people you refer, more you earn.
          </p>
          <span className="text-[0.9rem] font-semibold text-[var(--color-text)]">
            <select className="w-full rounded-2xl bg-[var(--color-bg)] px-4 py-2.5 text-[0.9rem] outline-none">
              <option value="">STP</option>
              <option value="Aadhar">Segmentation</option>
              <option value="PAN">Targeting</option>
              <option value="VoterID">Positioning</option>
              <option value="Passport">All of the above</option>
            </select>
          </span>
          <p className="mt-3 py-2 text-[0.85rem] font-semibold text-[var(--color-text)]">
            SHARE YOUR REFERRAL LINK
          </p>
          <div className="flex w-full items-center justify-between gap-4 rounded-2xl bg-[var(--color-bg)]">
            <input
              ref={inputRef}
              type="text"
              defaultValue="https://login.fcxtrade.com/affiliates/en/1/118494065"
              className="py-1.5 pl-4 text-[0.9rem] outline-0 md:w-[350px]"
              required
            />
            <span
              className="relative h-full cursor-pointer rounded-r-2xl bg-[var(--color-primary)] px-2.5 py-1 text-2xl text-[var(--color-copy)]"
              onClick={handleCopy}
            >
              <i className="ri-file-copy-fill"></i>
              {copied && (
                <p className="absolute mt-1 -ml-2 text-[0.8rem] text-pink-400">
                  Copied
                </p>
              )}
            </span>
          </div>
          <div className="flex justify-center pb-12">
            <img
              src="/image/download.png"
              alt="user"
              className="mt-7 h-44 w-44 rounded-lg bg-[var(--color-bg)]"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div>
          <div className="rounded-lg bg-[var(--color-referralbg)] px-2 pb-20">
            <h1 className="px-6 py-5 text-[1rem] font-semibold tracking-wide text-[var(--color-text)]">
              Trads Accounts
            </h1>
            <div className="rounded-lg bg-[var(--color-bg)]">
              <div className="flex justify-between px-6 py-2.5 text-[0.9rem] font-bold tracking-wide text-[var(--color-secondary)]">
                <p>Account Id</p>
                <p>Balance</p>
                <p>Platform name</p>
              </div>
              <div className="flex justify-between rounded-[10px] bg-[var(--color-accountbg)] px-6 py-1.5 text-[0.8rem] font-bold tracking-wide text-[var(--color-text)]">
                <p>16503</p>
                <p>0</p>
                <p>MT5</p>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-lg bg-[var(--color-referralbg)] px-4 py-2 pb-5">
            <h1 className="text-[1rem] font-semibold tracking-wide text-[var(--color-text)]">
              <i className="ri-download-2-line text-[1.3rem] text-[var(--color-secondary)]"></i>{" "}
              Downloads Links
            </h1>
            <div className="mt-3 rounded-lg bg-[var(--color-bg)] px-3 pb-2">
              <h1 className="pt-2 text-[1rem] font-bold text-[var(--color-secondary)]">
                Metatrader and Apps
              </h1>
              <p className="pb-2 text-[0.8rem] font-semibold text-[var(--color-secondary)]">
                Download MetaTrader plugins & Apps for PC, web browsers,
                smartphones, and tablets
              </p>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-lg bg-[var(--color-light)] px-3 py-3 text-[0.85rem] font-semibold text-[var(--color-text)] underline">
                  <img
                    src="/image/metatrader-4.svg"
                    alt="user"
                    className="h-5.5 w-5.5"
                  />
                  <a
                    href="https://www.metatrader5.com/en"
                    className="hover:text-[var(--color-primary)]"
                  >
                    MT5 Terminal
                  </a>
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-[var(--color-light)] px-3 py-3 text-[0.85rem] font-semibold text-[var(--color-text)] underline">
                  <img
                    src="/image/andriod.svg"
                    alt="user"
                    className="h-5.5 w-5.5"
                  />
                  <a
                    href="https://www.metatrader5.com/en/mobile-trading/android"
                    className="hover:text-[var(--color-primary)]"
                  >
                    MT5 Mobile Android
                  </a>
                </button>
              </div>
              <button className="mt-3 flex items-center gap-1 rounded-lg bg-[var(--color-light)] px-3 py-3 text-[0.85rem] font-semibold text-[var(--color-text] underline">
                <span className="md:text-[1.6rem] text-[1.4rem]">
                  <FaApple />
                </span>
                <a
                  href="https://www.metatrader5.com/en/mobile-trading/iphone"
                  className="hover:text-[var(--color-primary)]"
                >
                  MT5 Mobile iOS
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
