import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen w-full   "
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-0 lg:top-[-30vh] md:top-[-30vh] sm:top-[-20vh] min-[320px]:top-[-30vh]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};
export default Hero;


