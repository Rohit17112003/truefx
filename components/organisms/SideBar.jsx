// import nav from "@/public/database/nav.json";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import DashboardLink from "../atoms/DashboardLink";

// const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
//   const path = usePathname();
//   const router = useRouter();
//   const { navigation } = nav;

//   const handleLogout = () => {
//     router.replace("/auth/signin");
//   };

//   return (
//     <div
//       className={`fixed inset-y-0 left-0 z-50 transform bg-[#F9FAFB] dark:bg-[#201f1f] transition-transform duration-300 md:relative md:translate-x-0 ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//       } w-64 md:w-64 xl:w-64`}
//     >
//       <nav className="flex h-full flex-col gap-7 py-4">
//         <div className="flex px-8">
//           {
//             <Link href="/">
//               <h1 className="text-4xl font-bold text-black dark:text-white">LOGO</h1>
//             </Link>
//           }
//         </div>

//         <ul className="vertical-scrollbar flex h-full w-full flex-col gap-2 overflow-y-auto px-4 ">
//           <div className="flex w-full flex-col gap-2">
//             {navigation.map((item, index) => {
//               const { route, label, icon, subMenu } = item;
//               return (
//                 <DashboardLink
//                   key={index}
//                   active={path === route}
//                   route={route}
//                   label={label}
//                   heroIcon={icon}
//                   handleClick={() => setIsSidebarOpen(false)}
//                   subMenu={subMenu}
//                 />
//               );
//             })}

//             <DashboardLink
//               route="#"
//               label="Log out"
//               heroIcon="ri-logout-box-line"
//               handleClick={() => handleLogout()}
//             />
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SideBar;



import nav from "@/public/database/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardLink from "../atoms/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = nav;

  const handleLogout = () => {
    router.replace("/auth/signin");
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 md:w-64 xl:w-64 bg-[var(--color-header)] text-[var(--color-text)]`}
    >
      <nav className="flex h-full flex-col gap-7 py-4">
        <div className="flex px-8">
          <Link href="/">
            <h1 className="text-4xl font-bold">LOGO</h1>
          </Link>
        </div>

        <ul className="vertical-scrollbar flex h-full w-full flex-col gap-2 overflow-y-auto px-4 shadow shadow-text-[var(--color-text)]">
          <div className="flex w-full flex-col gap-2">
            {navigation.map((item, index) => {
              const { route, label, icon, subMenu } = item;
              return (
                <DashboardLink
                  key={index}
                  active={path === route}
                  route={route}
                  label={label}
                  heroIcon={icon}
                  handleClick={() => setIsSidebarOpen(false)}
                  subMenu={subMenu}
                />
              );
            })}

            <DashboardLink
              route="#"
              label="Log out"
              heroIcon="ri-logout-box-line"
              handleClick={handleLogout}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;

