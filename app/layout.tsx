import React from "react";
import Head from "next/head"; // Correct import
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

// Metadata (valid if using the app directory)
export const metadata = {
  title: "John",
  description: "Front-end Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Correct metadata structure */}
        <title>John - Frontend Portfolio</title>
        <meta name="description" content="A brief description of your project." />

        {/* Open Graph metadata for social sharing */}
        <meta property="og:title" content="John" />
        <meta property="og:description" content="Portfolio Projects" />
        <meta property="og:image" content="https://johnliebert.netlify.app/thumbnail.jpg" />
        <meta property="og:url" content="https://johnliebert.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John" />
        <meta name="twitter:description" content="Portfolio Projects" />
        <meta name="twitter:image" content="https://johnliebert.netlify.app/thumbnail.jpg" />
      </Head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* Background animation */}
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
