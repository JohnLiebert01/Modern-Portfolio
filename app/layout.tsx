import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed.J ",
  description: "Portfolio Projects",
  openGraph: {
    title: "Mohammed.J  ",
    description: "Portfolio Projects",
    images: [
      {
        url: "https://mohammed-jalal.netlify.app/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed's Portfolio Thumbnail",
      },
    ],
    url: "https://mohammed-jalal.netlify.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed.J  ",
    description: "Portfolio Projects",
    images: ["https://mohammed-jalal.netlify.app/thumbnail.jpg"],
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

// import "./globals.css";
// import React from "react";
// import { Inter } from "next/font/google";
// import StarsCanvas from "@/components/main/StarBackground";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "John - Frontend Portfolio",
//   description: "A brief description of your project.",
//   openGraph: {
//     title: "John",
//     description: "Portfolio Projects",
//     images: [
//       {
//         url: "https://johnliebert.netlify.app/thumbnail.jpg",
//       },
//     ],
//     url: "https://johnliebert.netlify.app/",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "John",
//     description: "Portfolio Projects",
//     images: ["https://johnliebert.netlify.app/thumbnail.jpg"],
//   },
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