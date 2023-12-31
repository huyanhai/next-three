import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  viewport: "width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  title: "test",
};

export default function RootLayout({ children, list }: { children: React.ReactNode; list: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* <NavBar /> */}
        <div className="">
          {children}
          {/* {list} */}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
