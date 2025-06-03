import Link from "next/link";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-[#F9FAFB] px-5 py-3 shadow-sm md:px-8">
      <div className="flex items-center gap-4 sm:gap-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="outline-none md:hidden text-[1.3rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <Link href="#" className="text-gray-800">
          <h1 className="text-xl font-bold text-nowrap capitalize">
            {/* {pageTitle} */}
          </h1>
        </Link>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center gap-5">
          <span>
        <img
              src="/image/Frame.svg"
              alt="user"
              className="md:h-10 h-7 md:w-10 w-7 "
            />
          </span>

          <span>
            <img
              src="/image/bell.svg"
              alt="user"
              className="md:h-10 h-8 md:w-10 w-8 "
            />
          </span>
          <Link href="/profile">
            <div className="flex aspect-square h-12 w-28 items-center justify-center gap-2">
              <h1 className="md:leading-5 font-bold .poppins semibold text-center text-[0.8rem] leading-4 ">Mr Rohit Rana</h1>
              <img
                src="/image/image 6.svg"
                alt="user"
                className="md:h-10 h-9 md:w-10 w-9 rounded-full"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
