import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John - Frontend Portfolio",
  description: "A brief description of your project.",
  openGraph: {
    title: "John",
    description: "Portfolio Projects",
    images: [
      {
        url: "https://johnliebert.netlify.app/thumbnail.jpg",
      },
    ],
    url: "https://johnliebert.netlify.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John",
    description: "Portfolio Projects",
    images: ["https://johnliebert.netlify.app/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}


// import React from "react";
// import Head from "next";
// import type { Metadata }from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "John",
//   description: "Front-end Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   return (
//     <html lang="en">

     

//       <body
//         className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
//       >
//         <StarsCanvas />
//         {children}
        
//       </body>
//     </html>
//   );
// }
