import React from "react";

const Investment = () => {
  return (
    <>
      <div className="mt-4 rounded-lg border-2 border-[#b9b9b915] bg-[var(--color-header)] py-6 md:mx-4">
        <div className="flex w-full flex-row justify-between gap-5 px-5 md:items-end items-center  md:gap-20">
          <div className="items-center grid md:grid-cols-2 grid-cols-1 gap-3">
            <span className="text-[0.9rem] font-semibold text-[var(--color-text)] ">
              <label>Transaction Number</label>
              <input
                className="w-full rounded-md border border-[#D5D5D5] bg-[var(--color-bg)] px-4 py-2 text-[0.9rem] outline-none md:h-10.5 md:w-[350px]"
                placeholder="76489372645"
              />
            </span>
            <span className="text-[0.9rem] font-semibold text-[var(--color-text)] ">
              <label>Type</label>
              <select className="w-full rounded-md border border-[#D5D5D5] bg-[var(--color-bg)] px-4 py-2.5 text-[0.9rem] outline-none md:h-10.5 md:w-[350px]">
                <option value="">All</option>
                <option value="Aadhar">Aadhar</option>
                <option value="PAN">PAN</option>
                <option value="VoterID">Voter ID</option>
                <option value="Passport">Passport</option>
              </select>
            </span>
          </div>
          <div>
            <p className="flex items-center gap-1 rounded-md bg-[var(--color-green)] px-4 py-2 text-[1.1rem] font-bold text-[white]">
              <span className="text-white">
          
                <i className="ri-filter-line text-2xl"></i>
              </span>
              Filter
            </p>
          </div>
        </div>

        <div className="overflow-x-scroll md:overflow-x-hidden md:pr-8.5">
          <div className="mx-4 mt-8 flex w-[700px] justify-between rounded-xl bg-[var(--color-bg)] px-5 py-3  md:w-full">
            <div className="flex items-center justify-between gap-14 text-[1rem] font-bold text-[var(--color-text)] md:gap-28">
              <p>Trx</p>
              <p>Transacted</p>
            </div>
            <div className="flex items-center justify-between gap-14 text-[1rem] font-bold text-[var(--color-text)] md:gap-28">
              <p>Amount</p>
              <p>Post Balance</p>
            </div>
            <div className="flex items-center justify-between gap-14 text-[1rem] font-bold text-[var(--color-text)] md:gap-28">
              <p>Detail</p>
              <p>Status</p>
            </div>
          </div>
        </div>
        <h1 className="pt-32 text-center md:text-[1.9rem] text-[1.2rem] font-bold text-[var(--color-text)]">
          Coming Soon
        </h1>

        <h1 className="pb-32 text-center md:text-[1.5rem] text-[1.1rem] font-bold text-[var(--color-text)]">
          No Invest History Found
        </h1>
      </div>
    </>
  );
};

export default Investment;
