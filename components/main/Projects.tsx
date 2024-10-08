
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectData = [
  {
    src: "/brainwave.png",
    link: "https://brainwave-ai-landing-page.netlify.app/",
    title: "Brainwave AI",
    description:
      "A modern Artificial intelligence Startup landing page For ALL AI services."
      ,
    technologies: ["Tailwind CSS", "Javascript", "Typescript", "React.Js"],
  },
  // {
  //   src: "/brainwave.png",
  //   link: "https://brainwave-ai-landing-page.netlify.app/",
  //   title: "Travelling CMS Admin Panel",
  //   description:
  //     "It is our client's project in it we have to make a content Management system for them. Admin can create Packages and show it on the website for customers.",
  //   technologies: ["MongoDB", "Express.Js", "React.Js", "Node.Js"],
  // },
  // {
  //   src: "/brainwave.png",
  //   link: "https://brainwave-ai-landing-page.netlify.app/",
  //   title: "Inventory Management System",
  //   description:
  //     "It is our Hackathon project that we completed with my team Orace.",
  //   technologies: ["MongoDB", "Express.Js", "React.Js", "Node.Js"],
  // },
  // {
  //   src: "/brainwave.png",
  //   link: "https://brainwave-ai-landing-page.netlify.app/",
  //   title: "Galaxy Tour",
  //   description:
  //     "It is a Space tour website that gives you a chance to see the whole solar system with animation. It is also providing much information about the planets and popular space organizations (ISRO, NASA, ROSCOSMOS).",
  //   technologies: ["html", "css", "javaScript"],
  // }, 
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
