"use client";
import { useRouter } from "next/navigation";

const Withdraw = () => {
  const router = useRouter();


    const handleWithrawClick = () => {
    router.push("/withdraw-form"); // 👈 change to your actual route
  };

  return (
    <>
      <div className="flex justify-end px-4">
        <button  onClick={handleWithrawClick} className="rounded-md bg-[#2CB24B] px-4 py-2 text-[1.2rem] font-bold text-white">
          Withdraw
        </button>
      </div>
      <div className="mt-4 rounded-lg border-2 border-[#b9b9b915] bg-[#FCFDFD] py-6 ring ring-[#fcfdfd50] md:mx-4">
        <div className="flex w-full flex-row items-center justify-between px-5 gap-4">
          <span className="flex items-center gap-2 rounded-4xl border border-[#D5D5D5] bg-[#F5F6FA] px-4 text-[0.9rem] md:h-10.5 md:w-[350px]">
            {" "}
            <i className="ri-search-line text-[1.1rem] text-[#00000069]"></i>
            <input
              className="w-full py-2 outline-none"
              placeholder="Search here...."
            />
          </span>
          <p className="flex items-center gap-1 text-[1.1rem] text-[white] bg-[#2CB24B] py-1.5 px-4 rounded-md font-bold ">
            <span className='text-white'>
              {" "}
              {/* <img
                src="/image/filter.svg"
                alt="qrcode"
                className="h-6 w-6 "
              /> */}
              <i className="ri-filter-line"></i>
            </span>
            Filter
          </p>
        </div>

       <div  className="overflow-x-scroll md:overflow-x-hidden md:pr-8.5">
         <div className="w-[650px]  md:w-full mx-4 mt-8 rounded-xl bg-[#F1F4F9] py-3 ring ring-[#fcfdfd50] flex justify-between px-5">
          <div className="flex items-center justify-between text-[#202224] md:gap-20 gap-10 font-bold text-[1rem]">
            <p>Gateway | Transaction</p>
            <p>Initiated</p>
          </div>
           <div className="flex items-center justify-between text-[#202224] md:gap-20 gap-10  font-bold text-[1rem]">
            <p>Amount</p>
            <p>Conversion</p>
          </div>
           <div className="flex items-center justify-between text-[#202224] md:gap-20 gap-10  font-bold text-[1rem]">
            <p>Action</p>
            <p>Status</p>
          </div>
        </div>
       </div>
        <h1 className="text-[1.5rem] font-bold text-[#00000043] text-center py-32">No Withdraw History Found</h1>
      </div>
    </>
  )
}

export default Withdraw;
