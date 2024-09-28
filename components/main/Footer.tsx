
import React from "react";
import {
  // RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


// interface Props {
//   themed: string;
// }

const Footer = () => {
  return (
    <div
      className="w-full h-full bg-transparent text-gray-200
      shadow-lg p-[15px] z-[999]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
        
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a
                target="_blank"
                href="https://github.com/JohnLiebert01"
                className="text-[15px] ml-[6px]"
              >
                Github
              </a>
            </p>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a
                target="_blank"
                href="dougbn369"
                className="text-[15px] ml-[6px]"
              >
                Discord
              </a>
            </p> */}
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a
                target="_blank"
                href="https://www.instagram.com/john.io99/"
                className="text-[15px] ml-[6px]"
              >
                Instagram
              </a>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohammed202-jalal"
                className="text-[15px] ml-[6px]"
              >
                Linkedin
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

           
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
              aooful333@gmail.com
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
              07718594078
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
        &copy; MOHAMMED JALAL Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
