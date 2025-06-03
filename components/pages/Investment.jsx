import React from "react";

const Investment = () => {
  return (
    <>
      <div className="mt-4 rounded-lg border-2 border-[#b9b9b915] bg-[#FCFDFD] py-6 ring ring-[#fcfdfdb5] md:mx-4">
        <div className="flex w-full flex-row justify-between gap-5 px-5 md:items-end md:gap-20">
          <div className="items-center md:flex">
            <span className="text-[0.9rem] font-semibold text-black">
              <label>Transaction Number</label>
              <input
                className="w-full rounded-md border border-[#D5D5D5] bg-[#F5F6FA] px-4 py-2 text-[0.9rem] outline-none md:h-10.5 md:w-[350px]"
                placeholder="76489372645"
              />
            </span>
            <span className="text-[0.9rem] font-semibold text-black">
              <label>Type</label>
              <select className="w-full rounded-md border border-[#D5D5D5] bg-[#F5F6FA] px-4 py-2 text-[0.9rem] outline-none md:h-10.5 md:w-[350px]">
                <option value="">All</option>
                <option value="Aadhar">Aadhar</option>
                <option value="PAN">PAN</option>
                <option value="VoterID">Voter ID</option>
                <option value="Passport">Passport</option>
              </select>
            </span>
          </div>
          <div>
            <p className="flex items-center gap-1 rounded-md bg-[#2CB24B] px-4 py-2 text-[1.1rem] font-bold text-[white]">
              <span className="text-white">
                {" "}
                {/* <img
                src="/image/filter.svg"
                alt="qrcode"
                className="h-6 w-6 "
              /> */}
                <i className="ri-filter-line text-2xl"></i>
              </span>
              Filter
            </p>
          </div>
        </div>

        <div className="overflow-x-scroll md:overflow-x-hidden md:pr-8.5">
          <div className="mx-4 mt-8 flex w-[700px] justify-between rounded-xl bg-[#F1F4F9] px-5 py-3 ring ring-[#fcfdfd50] md:w-full">
            <div className="flex items-center justify-between gap-14 text-[1rem] font-bold text-[#202224] md:gap-28">
              <p>Trx</p>
              <p>Transacted</p>
            </div>
            <div className="flex items-center justify-between gap-14 text-[1rem] font-bold text-[#202224] md:gap-28">
              <p>Amount</p>
              <p>Post Balance</p>
            </div>
            <div className="flex items-center justify-between gap-14 text-[1rem] font-bold text-[#202224] md:gap-28">
              <p>Detail</p>
              <p>Status</p>
            </div>
          </div>
        </div>
        <h1 className="pt-32 text-center text-[1.9rem] font-bold text-[#000]">
          Coming Soon
        </h1>

        <h1 className="pb-32 text-center text-[1.5rem] font-bold text-[#00000043]">
          No Invest History Found
        </h1>
      </div>
    </>
  );
};

export default Investment;
