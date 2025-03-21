import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "X-Clone",
  description: "X-app social media",
};

export default function RootLayout({ children }) {
  return (
      <SessionWrapper>
          <html lang="en">
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
          <div className='flex justify-between max-w-6xl mx-auto'>
              <div className='hidden sm:inline border-r'>
                  <Sidebar/>
              </div>
              <div className=' flex-1'>
                  {children}
              </div>
              <div className='lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]'>
                  <div className='sticky top-0 bg-white py-2'>
                      <input type='text' placeholder='search' className='bg-gray-100 border border-gray-200 rounded-3xl text-sm w-ful px-4 py-2'/>
                  </div>
                  <News />
              </div>
          </div>
          </body>
          </html>
      </SessionWrapper>

  );
}
