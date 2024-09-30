import type { Metadata } from "next";
import "./globals.css";

import {Fira_Sans, Poppins} from "next/font/google";
import Navigation from "@/components/navbar/Navigation";
import MainFooter from "@/components/footer/MainFooter";

import { Toaster } from "@/components/ui/toaster"

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoryHub",
  description: "StoryHub Blog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <div className="text-[#5e5e5e]">
          {/* Header */}
          <header>
            <Navigation />
          </header>
          
          {/* Main */}
          {/* 30px 15px */}
          <main className="md:container mx-auto p-4">
            <div className="lg:max-w-[1170px] lg:px-[15px] lg:py-[30px] mx-auto">
              <div className="min-h-screen">
                {children}
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="container mx-auto p-4">
            <MainFooter />
          </footer>

        </div>
        <Toaster />
      </body>
    </html>
  );
}


