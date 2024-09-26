
import React from "react";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Head from 'next/head';

export default function Home() {
 

  return (
  
    <main className="h-full w-full">
        <Head>
    <title>Your Project Title</title>
    <meta name="description" content="A brief description of your project." />
    
    {/* Open Graph metadata */}
    <meta property="og:title" content="John" />
    <meta property="og:description" content="Portfolio Projects" />
    <meta property="og:image" content="https://johnliebert.netlify.app/thumbnail.png" />
    <meta property="og:url" content="https://johnliebert.netlify.app/" />
    <meta property="og:type" content="website" />
  </Head>
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
