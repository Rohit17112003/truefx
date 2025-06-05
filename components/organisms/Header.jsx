// import Link from "next/link";

// const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
//   return (
//     <header className="sticky top-0 z-10 flex items-center justify-between bg-[#F9FAFB] px-5 py-3 shadow-sm md:px-8">
//       <div className="flex items-center gap-4 sm:gap-0">
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="outline-none md:hidden text-[1.3rem]"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//         <Link href="#" className="text-gray-800">
//           <h1 className="text-xl font-bold text-nowrap capitalize">
//             {pageTitle}
//           </h1>
//         </Link>
//       </div>

//       <div className="flex flex-row items-center gap-2">
//         <div className="flex items-center gap-5">
//           <span>
//         <img
//               src="/image/Frame.svg"
//               alt="user"
//               className="md:h-10 h-7 md:w-10 w-7 "
//             />
//           </span>

//           <span className="md:text-[1.4rem] text-[1.2rem] mt-3">
//           <i className="ri-notification-2-fill relative">
//             <p className="bg-[#c52323] items-center text-center mukta-extralight md:text-[0.9rem] text-[0.81rem] absolute rounded-full text-white md:h-5.5 h-4.5 md:w-5.5 w-4.5 md:-mt-10 -mt-8.5 md:ml-3 ml-2.5">2</p>
//           </i>
//           </span>
//           <Link href="/profile">
//             <div className="flex aspect-square h-12 w-28 items-center justify-center gap-2">
//               <h1 className="md:leading-5 font-bold .poppins semibold text-center text-[0.8rem] leading-4 ">Mr Rohit Rana</h1>
//               <img
//                 src="/image/image 6.svg"
//                 alt="user"
//                 className="md:h-10 h-9 md:w-10 w-9 rounded-full"
//               />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  const { theme, setTheme } = useTheme(); // 🔧 Added setTheme

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-[#F9FAFB] px-5 py-3 shadow-sm md:px-8 dark:bg-[#1f1f1f] text-black">
      <div className="flex items-center gap-4 sm:gap-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-[1.3rem] outline-none md:hidden"
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
        <Link href="#" className="text-gray-800 dark:text-white">
          <h1 className="text-xl font-bold text-nowrap capitalize">
            {pageTitle}
          </h1>
        </Link>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center gap-5">
          {/* 🌙 Theme Toggle Button */}
          <span
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <FaMoon className="h-5 w-5 text-black md:h-6 md:w-6" />
            ) : (
              <img
                src="/image/Frame.svg"
                alt="user"
                className="h-7 w-7 md:h-10 md:w-10"
              />
            )}
          </span>

          {/* 🔔 Notification */}
          <span className="mt-3 text-[1.2rem] md:text-[1.4rem]">
            <i className="ri-notification-2-fill relative">
              <p className="mukta-extralight absolute -mt-8.5 ml-2.5 h-4.5 w-4.5 items-center rounded-full bg-[#c52323] text-center text-[0.81rem] text-white md:-mt-10 md:ml-3 md:h-5.5 md:w-5.5 md:text-[0.9rem]">
                2
              </p>
            </i>
          </span>

          {/* 👤 Profile */}
          <Link href="/profile">
            <div className="flex aspect-square h-12 w-28 items-center justify-center gap-2">
              <h1 className="text-center text-[0.8rem] leading-4 font-bold md:leading-5 dark:text-white">
                Mr Rohit Rana
              </h1>
              <img
                src="/image/image 6.svg"
                alt="user"
                className="h-9 w-9 rounded-full md:h-10 md:w-10"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
