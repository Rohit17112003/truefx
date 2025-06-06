import React from 'react'

const Referral = () => {
  return (
   <>
      
      <div className="mt-4 rounded-lg border-2 border-[#b9b9b915] bg-[var(--color-header)] py-6 ring ring-[#fcfdfd50] md:mx-4">
        <div className="flex w-full flex-row items-center justify-between px-5">
          <span className="flex items-center gap-2 rounded-4xl border border-[#D5D5D5] bg-[var(--color-bg)] px-4 text-[0.9rem] md:h-10.5 md:w-[350px] w-[250px]">
            {" "}
            <i className="ri-search-line text-[1.1rem] text-[var(--color-secondary)]"></i>
            <input
              className="w-full py-2 outline-none"
              placeholder="Search here...."
            />
          </span>
          <p className="flex items-center gap-1 text-[1.1rem] text-[var(--color-text)]">
            <span className='text-white text-[1.2rem] md:text-[1.5rem]'>
              <i className="ri-filter-line"></i>
            </span>
            Filter
          </p>
        </div>

        <div className="overflow-x-scroll  md:overflow-x-hidden md:pr-8.5">
          <div className="w-[650px]  md:w-full mx-4 mt-8 rounded-xl bg-[var(--color-bg)] py-3 flex justify-between px-5">
          <div className="flex items-center justify-between text-[var(--color-text)] md:gap-30 gap-20 font-bold text-[1rem]">
            <p>Name</p>
            <p>Email Id</p>
          </div>
           <div className="flex items-center justify-between text-[var(--color-text)] md:gap-30 gap-20 font-bold text-[1rem]">
            <p>Level</p>
            <p>Amount</p>
          </div>
           <div className="flex items-center justify-end text-[var(--color-text)] md:gap-30 gap-20 font-bold text-[1rem]">
            <p>Status</p>
          </div>
        </div>
        </div>
        <h1 className="md:text-[1.5rem] text-[1.1rem] font-bold text-[var(--color-text)] text-center py-32">No Referral History Found</h1>
      </div>
    </>
  )
}

export default Referral;
