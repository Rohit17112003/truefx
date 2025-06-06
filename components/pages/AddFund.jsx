"use client";
import { useRouter } from "next/navigation";

const AddFund = () => {
  const router = useRouter();

  const handleAddFundClick = () => {
    router.push("/addfund-form"); // 👈 change to your actual route
  };
  return (
    <>
      <div className="flex justify-end px-4">
        <button
          onClick={handleAddFundClick}
          className="rounded-md  bg-[var(--color-green)] px-4 py-2 md:text-[1.2rem] text-[1rem] font-bold text-white cursor-pointer"
        >
          Add Fund
        </button>
      </div>
      <div className="mt-4 rounded-lg border-2 border-[#b9b9b915]  bg-[var(--color-header)] py-6 ring ring-[#fcfdfd50] md:mx-4">
        <div className="flex w-full flex-row items-center justify-between px-4">
          <span className="flex w-[250px] items-center rounded-4xl border border-[#D5D5D5]  bg-[var(--color-bg)] px-4 text-[0.9rem] md:h-10.5 md:w-[350px]">
            {" "}
            <i className="ri-search-line text-[1.1rem]  text-[var(--color-secondary)]"></i>
            <input
              className="w-full py-2 px-1.5 outline-none"
              placeholder="Search here...."
            />
          </span>
          <p className="flex items-center gap-1 text-[1.1rem]  text-[var(--color-text)]">
            <span className="text-[1.2rem] md:text-[1.5rem]">
                         <i className="ri-filter-line"></i>
            </span>
            Filter
          </p>
        </div>

        <div className="overflow-x-scroll md:overflow-x-hidden md:pr-8.5">
          <div className="mx-4 mt-8 flex w-[650px] justify-between rounded-xl bg-[var(--color-referralbg)] px-5 py-3  md:w-full">
            <div className="flex items-center justify-between gap-12 text-[1rem] font-bold  text-[var(--color-text)] md:gap-24">
              <p>Investment Plan</p>
              <p>Return</p>
            </div>
            <div className="flex items-center justify-between gap-12 text-[1rem] font-bold  text-[var(--color-text)] md:gap-24">
              <p>Received</p>
              <p>Next Payment</p>
            </div>
            <div className="flex items-center justify-between gap-12 text-[1rem] font-bold  text-[var(--color-text)] md:gap-24">
              <p>Action</p>
              <p>Status</p>
            </div>
          </div>
        </div>
        <h1 className="py-32 text-center md:text-[1.5rem] text-[1.1rem] font-bold text-[var(--color-text)]">
          No Invest History Found
        </h1>
      </div>
    </>
  );
};

export default AddFund;
