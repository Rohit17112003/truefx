const StatContainer = ({ index, icon, title, value }) => {
  return (
   <>
     <div className="inset-shadow-lg space-y-1 rounded-lg  bg-[var(--color-referralbg)] md:py-2 py-10 md:px-4 px-10 shadow-lg inset-shadow-sm shadow-text-[var(--color-secondarys)] inset-shadow-gray-400 md:h-32 h-56 w-full flex flex-col justify-between">
      <h2 className="flex items-center gap-3">
        <span>
          <i
            className={`${icon} text-[1.8rem]  ${index === 0 ? "bg-[#0077B6]" : index === 1 ? "bg-[#085E48]" : index === 2 ? "bg-[#FFC300]" : index === 3 ? "bg-[#FB8500]" : "bg-[#7209B7]"} rounded-lg p-2 text-white`}
          />
        </span>
        <div className=" leading-8">
          {" "}
          <span className=" font-bold text-[1.05rem] text-[var(--color-text)]">{title}</span>
          <p className="text-[0.8rem] leading-4 text-[var(--color-secondary)] font-[500]">{value}</p>
        </div>
      </h2>
      <button  className={` text-[0.95rem]  ${index === 0 ? "" : index === 1 ? "" : index === 2 ? "hidden" : index === 3 ? "hidden" : "hidden"} rounded-md  px-8 text-[var(--color-tertiary)] bg-[var(--color-bg)] shadow-lg shadow-bg-[var(--color-referralbg)] mt-5 font-[500] md:py-0.5 py-2`}>Deposit Now! <span><i className="ri-arrow-right-long-line"></i></span></button>
    </div>
   </>
  );
};

export default StatContainer;
