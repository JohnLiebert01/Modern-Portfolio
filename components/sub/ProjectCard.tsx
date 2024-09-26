"use client"
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  onClick?: () => void; // Optional onClick handler
}

const ProjectCard = ({ src, title, description, link, onClick }: Props) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(); // Call the custom onClick handler if provided
    }
    window.open(link, "_blank", "noopener,noreferrer"); // Open the link in a new tab
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;


// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
//   link: string; // New link prop
// }

// const ProjectCard = ({ src, title, description, link }: Props) => {
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer" className="block">
//       <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300 cursor-pointer">
//         <Image
//           src={src}
//           alt={title}
//           width={1000}
//           height={1000}
//           className="w-full object-contain"
//         />
//         <div className="relative p-4">
//           <h1 className="text-2xl font-semibold text-white">{title}</h1>
//           <p className="mt-2 text-gray-300">{description}</p>
//         </div>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;



// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] ">
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={1000}
//         className="w-full object-contain"
//       />

//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
