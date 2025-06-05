// import { ThemeProvider } from "next-themes";
// import "./globals.css";
// import { Urbanist } from "next/font/google";
// import "remixicon/fonts/remixicon.css";

// const urbanist = Urbanist({ subsets: ["latin"] });

// export const metadata = {
//   title: "Auction",
//   description: "Less Price Top Bidder",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={urbanist?.className}>
//        <ThemeProvider attribute="class">{children}</ThemeProvider>
//       </body>
//     </html>
//   );
// }


import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Urbanist } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Auction",
  description: "Less Price Top Bidder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={urbanist.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

