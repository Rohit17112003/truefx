"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 shadow-sm md:px-8 bg-[var(--color-header)] text-[var(--color-text)]">
      <div className="flex items-center gap-4 sm:gap-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-[1.3rem] outline-none md:hidden"
        >
          <HiOutlineBars3BottomLeft />
        </button>
        <Link href="#">
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
              <FaMoon className="h-5 w-5 md:h-6 md:w-6 text-[var(--color-text)]" />
            ) : (
              <IoSunnyOutline className="h-7 w-7 md:h-8 md:w-8 text-[var(--color-text)]" />
            )}
          </span>

          {/* 🔔 Notification */}
          <span className="mt-3 text-[1.2rem] md:text-[1.4rem]">
            <i className="ri-notification-2-fill relative text-[var(--color-text)]">
              <p className="mukta-extralight absolute -mt-8.5 ml-2.5 h-4.5 w-4.5 items-center rounded-full bg-[#c52323] text-center text-[0.81rem] text-white md:-mt-10 md:ml-3 md:h-5.5 md:w-5.5 md:text-[0.9rem]">
                2
              </p>
            </i>
          </span>

          {/* 👤 Profile */}
          <div className="flex aspect-square h-12 w-28 items-center justify-center gap-2">
            <h1 className="text-center text-[0.8rem] leading-4 font-bold md:leading-5">
              Mr Rohit Rana
            </h1>
            <Link href="/profile">
              <img
                src="/image/image 6.svg"
                alt="user"
                className="h-9 w-9 rounded-full md:h-10 md:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

