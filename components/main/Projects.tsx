"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      src: "/brainwave.png",
      title: "Brainwave",
      description: "A modern artificial intelligence startup landing page",
      link: "https://brainwave-ai-landing-page.netlify.app/",
    },
    {
      src: "/thumbnail.jpg",
      title: "Interactive Website Cards",
      description: "Interactive card component for modern websites",
      link: "https://example.com/interactive-cards",
    },
    {
      src: "/thumbnail.jpg",
      title: "Space Themed Website",
      description: "An immersive space-themed website experience",
      link: "https://example.com/space-themed",
    },
  ];

  // Function to handle click events on each card
  const handleCardClick = (projectTitle: string) => {
    console.log(`${projectTitle} card clicked!`);
    // You could add tracking logic or other custom behavior here
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-20 xl:mt-[-50vh] lg:mt-[-50vh] md:mt-[-70vh] sm:mt-[-40vh] min-[320px]:mt-[-20vh]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
            onClick={() => handleCardClick(project.title)} // Pass onClick handler
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;


// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   const projects = [
//     {
//       src: "/brainwave.png",
//       title: "Brainwave",
//       description: "A modern artificial intelligence startup landing page",
//       link: "https://brainwave-ai-landing-page.netlify.app/",
//     },
//     {
//       src: "/thumbnail.jpg",
//       title: "Interactive Website Cards",
//       description: "Interactive card component for modern websites",
//       link: "https://example.com/interactive-cards",
//     },
//     {
//       src: "/thumbnail.jpg",
//       title: "Space Themed Website",
//       description: "An immersive space-themed website experience",
//       link: "https://example.com/space-themed",
//     },
//   ];

//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20 xl:mt-[-50vh] lg:mt-[-50vh] md:mt-[-70vh] sm:mt-[-40vh] min-[320px]:mt-[-20vh]"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             src={project.src}
//             title={project.title}
//             description={project.description}
//             link={project.link} // Pass the link prop here
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20 xl:mt-[-50vh] lg:mt-[-50vh] md:mt-[-70vh] sm:mt-[-40vh] min-[320px]:mt-[-20vh]"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         <ProjectCard
//           src="/brainwave.png"
//           title="Brainwave"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         />
//         <ProjectCard
//           src="/thumbnail.jpg"
//           title="Interactive Website Cards"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         />
//         <ProjectCard
//           src="/thumbnail.jpg"
//           title="Space Themed Website"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;
