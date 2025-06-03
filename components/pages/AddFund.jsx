import React from "react";

const AddFund = () => {
  return (
    <>
      <div className="flex justify-end px-4">
        <button className="rounded-md bg-[#2CB24B] px-4 py-2 text-[1.2rem] font-bold text-white">
          Add Fund
        </button>
      </div>
      <div className="mt-4 rounded-lg border-2 border-[#b9b9b915] bg-[#FCFDFD] py-6 ring ring-[#fcfdfd50] md:mx-4">
        <div className="flex w-full flex-row items-center justify-between px-5">
          <span className="flex items-center gap-2 rounded-4xl border border-[#D5D5D5] bg-[#F5F6FA] px-4 text-[0.9rem] md:h-10.5 md:w-[350px]">
            {" "}
            <i className="ri-search-line text-[1.1rem] text-[#00000069]"></i>
            <input
              className="w-full py-2 outline-none"
              placeholder="Search here...."
            />
          </span>
          <p className="flex items-center gap-1 text-[1.1rem] text-[#20222496]">
            <span>
              {" "}
              <img
                src="/image/filter.svg"
                alt="qrcode"
                className="h-6 w-6 text-black"
              />
            </span>
            Filter
          </p>
        </div>

       <div className="overflow-x-scroll md:overflow-x-hidden md:pr-8.5">
         <div className="w-[650px]  md:w-full mx-4 mt-8 rounded-xl bg-[#F1F4F9] py-3 ring ring-[#fcfdfd50] flex justify-between  px-5">
          <div className="flex items-center justify-between text-[#202224] md:gap-24 gap-12 font-bold text-[1rem]">
            <p>Investment Plan</p>
            <p>Return</p>
          </div>
           <div className="flex items-center justify-between text-[#202224] md:gap-24 gap-12 font-bold text-[1rem]">
            <p>Received</p>
            <p>Next Payment</p>
          </div>
           <div className="flex items-center justify-between text-[#202224] md:gap-24 gap-12 font-bold text-[1rem]">
            <p>Action</p>
            <p>Status</p>
          </div>
        </div>
       </div>
        <h1 className="text-[1.5rem] font-bold text-[#00000043] text-center py-32">No Invest History Found</h1>
      </div>
    </>
  );
};

export default AddFund;
