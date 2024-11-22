import type { Metadata } from "next";
import Image from "next/image";

import GitHubIcon from '@mui/icons-material/GitHub';

import "./globals.css";

export const metadata: Metadata = {
  title: "CC Validation",
  description: "Technical Case Study - credit card number validation using the Luhn algorithm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <div className="min-h-screen flex flex-col justify-between">
          <div className="py-10 px-8 sm:px-20 ">
            <div className="header">
              <Image
                src="/logo.png"
                alt="CC Validation logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className="p-8 pb-20 gap-16 sm:p-20">
              {children}
            </div>
          </div>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between py-10 px-8 sm:px-20">
            <a
              className="flex items-center"
              href="https://github.com/rcd229/CCValidation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <p>©BeccaD 2024</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
