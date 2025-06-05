"use client"
import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";
import { useRef, useState } from 'react';

const HomePage = () => {

const inputRef = useRef(null); // ✅ Define inputRef here
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const defaultValue = inputRef.current?.defaultValue;
    if (defaultValue) {
      navigator.clipboard.writeText(defaultValue)
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

      <div className="grid md:grid-cols-2 items-center gap-4 pb-10">
        <div className="rounded-lg bg-[#f7f7f8] px-5">
          <h1 className="pt-8 text-[1rem] font-semibold text-[#000000ed]">
            REFERRAL PROGRAM
          </h1>
          <p className="py-2 text-[0.85rem] text-[#727e8c]">
            Spread the word on and keep earning, even when you arent trading.
            More the people you refer, more you earn.
          </p>
          <span className="text-[0.9rem] font-semibold text-black">
            <select className="w-full rounded-2xl bg-[#fff] px-4 py-2.5 text-[0.9rem] outline-none">
              <option value="">STP</option>
              <option value="Aadhar">Segmentation</option>
              <option value="PAN">Targeting</option>
              <option value="VoterID">Positioning</option>
              <option value="Passport">All of the above</option>
            </select>
          </span>
          <p className="mt-3 py-2 text-[0.85rem] font-semibold text-[#727e8c]">
            SHARE YOUR REFERRAL LINK
          </p>
          <div className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white">
            <a href="">
              {" "}
              <input
               ref={inputRef}
                type="text"
               defaultValue="https://login.fcxtrade.com/affiliates/en/1/118494065"
                className="md:w-[350px] py-1.5 pl-4 text-[0.9rem] outline-0"
                required
              />
            </a>
            <span className="h-full rounded-r-2xl bg-[#0077B6] px-2.5 py-1 text-2xl text-white  cursor-pointer relative" onClick={handleCopy} >
              <i className="ri-file-copy-fill"></i>
              {copied && <p className="text-pink-400 -ml-2 mt-1 text-[0.8rem] absolute">Copied</p>}

            </span>
          </div>{" "}

          <div className="flex justify-center pb-12">
            <img
              src="/image/download.png"
              alt="user"
              className="mt-7 h-44 w-44 rounded-lg"
            />
          </div>
        </div>
        <div className="">
          <div className="rounded-lg bg-[#f7f7f8] px-2 pb-20">
            <h1 className="px-6 py-5 text-[1rem] font-semibold tracking-wide text-black">
              Trads Accounts
            </h1>
            <div className="rounded-lg bg-white">
              <div className="flex justify-between px-6 py-2.5 text-[0.9rem] font-bold tracking-wide text-[#727e8cd0]">
                <p>Account Id</p>
                <p>Balance</p>
                <p>Platform name</p>
              </div>
              <div className="flex justify-between rounded-[10px] bg-[#e4e4f27f] px-6 py-1.5 text-[0.8rem] font-bold tracking-wide text-[#000000c8]">
                <p>16503</p>
                <p>0</p>
                <p>MT5</p>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-lg bg-[#f7f7f8] px-4 py-2 pb-5">
            <h1 className="text-[1rem] font-semibold tracking-wide text-black">
              <i className="ri-download-2-line text-[1.3rem] text-[#727e8cd0]"></i>{" "}
              Downloads Links
            </h1>
            <div className="mt-3 rounded-lg bg-white px-3 pb-2">
              <h1 className="pt-2 text-[1rem] font-bold text-[#727e8cd0]">
                Metatrader and Apps
              </h1>
              <p className="text-[0.8rem] font-semibold text-[#727e8caa] pb-2">
                Download MetaTrader plugins & Apps for PC, web browsers,
                smartphones, and tablets
              </p>

              <div className="flex gap-3">
                <button className="rounded-lg bg-[#f7f7f8] px-3 py-3 text-[#000000b4] underline font-semibold text-[0.85rem] flex items-center gap-2">
                 <img
              src="/image/metatrader-4.svg"
              alt="user"
              className=" h-5.5 w-5.5"
            />
                 <a href="#" className=" hover:text-[#0077B6]"> MT5 Tarminal</a>
                </button>
                  <button className="rounded-lg bg-[#f7f7f8] px-3 py-3 text-[#000000b4] underline font-semibold text-[0.85rem] flex items-center gap-2">
                 <img
              src="/image/andriod.svg"
              alt="user"
              className=" h-5.5 w-5.5"
            />
                <a href="#" className=" hover:text-[#0077B6]"> MT5 Mobile Android</a>
                </button>
              
              </div>
                  <button className="rounded-lg bg-[#f7f7f8] px-3 py-3 text-[#000000b4] underline font-semibold text-[0.85rem] flex items-center gap-2 mt-3">
                 <img
              src="/image/apple.svg"
              alt="user"
              className=" h-5.5 w-5.5"
            />
              <a href="#" className=" hover:text-[#0077B6]">  MT5 Mobile iOS</a>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
