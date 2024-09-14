import {
  Skill_data_1,
  Skill_data_2,
} from "../../constants/index";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 py-20 lg:py-12 xl:top-[-40vh] lg:top-[-20vh] md:top-[-40vh] sm:top-[-40vh] min-[320px]:top-[-5vh] min-[320px]:py-28 px-4 md:px-8 relative overflow-hidden w-full min-h-screen -mt-10"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center w-full">
        {Skill_data_1.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center w-full">
        {Skill_data_2.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="absolute inset-0 w-full h-full z-[-10] opacity-30">
        <div className="w-full h-full flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );};
export default Skills;
