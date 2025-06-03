// pages/Profile.js
"use client"
import { useRef, useState } from 'react';


export default function Profile() {

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

  return (
    <>
      <div className="flex items-center justify-between rounded-lg bg-blue-100 px-3 py-2 md:px-6 md:py-4">
        <h1 className="text-xl font-semibold text-black">Ankush Kumar</h1>
        <div className="text-0.7rem space-x-2 font-semibold md:text-[1rem]">
          <button className="rounded bg-red-500 px-2 py-0.5 text-white hover:bg-red-600 md:px-4 md:py-2">
            Delete{" "}
            <span>
              <i className="ri-delete-bin-6-line"></i>
            </span>
          </button>
          <button className="rounded bg-green-500 px-2 py-0.5 text-white hover:bg-green-600 md:px-4 md:py-2">
            Edit{" "}
            <span>
              <i className="ri-pencil-fill"></i>
            </span>
          </button>
        </div>
      </div>

      <div className="mt-5 mb-20 flex flex-col items-center rounded-lg bg-[#F9FAFB] md:mt-7">
        <img src="/image/user.svg" alt="user" className="mt-7 h-28 w-28" />

        <div className="mt-5 gap-3 md:flex">
          <form className="flex w-[350px] flex-col gap-3 text-black md:w-[400px]">
            <div className="flex w-full items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <span className="text-2xl text-[#0077B6]">
                <i className="ri-group-fill"></i>
              </span>
              <input
                type="text"
                defaultValue="Ankush Kumar"
                className="w-full outline-0"
                required
              />
            </div>
            <div className="flex w-full items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <span className="text-2xl text-[#0077B6]">
                <i className="ri-mail-unread-fill"></i>
              </span>
              <a href="mailto:Nitesh26374@gmail.com">
                {" "}
                <input
                  type="email"
                  defaultValue="Nitesh26374@gmail.com"
                  className="w-full outline-0"
                  required
                />
              </a>
            </div>
            <div className="flex w-full items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <span className="text-2xl text-[#0077B6]">
                <i className="ri-phone-fill"></i>
              </span>
              <a href="tel:+91 7364474483">
                {" "}
                <input
                  type="text"
                  defaultValue="+917364474483"
                  className="w-full outline-0"
                  required
                />
              </a>
            </div>
            <div className="flex w-full gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-2 ring ring-[#d1d5db58] md:pr-14">
              <span className="text-2xl text-[#0077B6]">
                <i className="ri-map-pin-2-fill"></i>
              </span>
              <a href="">
                {" "}
                <p>
                  Garden View Apt, Chandawarkar Road, Behind Of Saraswat Co Op
                  Bank, Borivli (w)
                </p>
              </a>
            </div>
            <div className="flex w-full items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-1.5 ring ring-[#d1d5db58]">
              <span className="text-2xl text-[#0077B6]">
                <i className="ri-shield-check-fill"></i>
              </span>
              <a href="">
                {" "}
                <input
                  type="text"
                  defaultValue="Verified"
                  className="w-full outline-0"
                  required
                />
              </a>
            </div>
          </form>
          <form className="mt-5 flex w-[350] flex-col items-center gap-3 md:mt-0 md:w-[400px]">
            <img
              src="/image/qrcode.svg"
              alt="qrcode"
              className="h-full w-full md:h-38 md:w-40"
            />
            <label className="w-[300px] text-[1.1rem] text-[#0C1421] md:-ml-24.5">
              Referral Link
            </label>
            <div className="-mt-2 flex w-full items-center justify-between gap-4 rounded-md border-1 border-[#D1D5DB] ring ring-[#d1d5db58]">
              <a href="">
                {" "}
                <input
                   ref={inputRef}
                  type="text"
                  defaultValue="https://www.trade.com/NSnX4qW"
                  className="px-3 py-1.5 outline-0 w-[290px]"
                  required
                />
              </a>
              <span className="text-2xl px-2.5 py-1.5 h-full rounded-r-md bg-[#0077B6] text-white relative cursor-pointer" onClick={handleCopy}>
               <i className="ri-file-copy-fill"></i>
              {copied && <p className="text-pink-400  -ml-2 mt-1 text-[0.8rem] absolute">Copied</p>}

              </span>
            </div>{" "}
            <div className="flex w-full items-center gap-4 rounded-md border-1 border-[#D1D5DB] px-3 py-2 ring ring-[#d1d5db58]">
              <span className="text-2xl text-[#0077B6]">
                <img
              src="/image/Frame (1).svg"
              alt="qrcode"
              className="h-7.5 w-7.5"
            />
              </span>
              <a href="">
                {" "}
                <input
                  type="text"
                  defaultValue="IB"
                  className="w-full outline-0"
                  required
                />
              </a>
            </div>
          </form>
        </div>
       <form>
         <button type='submit' className="mt-7 mb-7 rounded-lg bg-[#0070BA] px-20 py-2 text-[1.2rem] text-white cursor-pointer">
          Save
        </button>
       </form>
      </div>
    </>
  );
}
