import React from "react";
import Link from "next/link";
import Image from "next/image";

// 1. Define the TypeScript interface for a single project data structure
export interface ProjectCardProps {
  title: string;
  projectUrl: string;
  tagline: string;
  techStack: string;
  imageSrc: string;
  description: string;
  role: string;
}

// 2. Destructure the dynamic props inside your layout
export default function ProjectCard({
  title,
  projectUrl,
  tagline,
  techStack,
  imageSrc,
  description,
  role,
}: ProjectCardProps) {
  return (
    <div className="w-full rounded-[24px] p-[10px] h-[600px] mb-[10rem] bg-white">
      <div
        onClick={() => window.open(projectUrl, "_blank", "noopener,noreferrer")}
        className="w-full block rounded-[20px] h-full bg-black p-[30px] overflow-hidden gradient-box cursor-pointer"
      >
        {/* Header Section */}
        <div className="text-white text-[24px] roboto flex justify-between items-center">
          <span>{title}</span>
          <div className="flex items-center gap-1">
            <Link
              href={projectUrl}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevents double window opens when clicking the link
              className="vProject hover:underline decoration-[1px] underline-offset-[3px]"
            >
              View Project
            </Link>
            <span className="projectIcon flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.025 17.9508L12.95 16.9008L17.15 12.7008H4V11.2008H17.15L12.925 6.97578L14 5.92578L20.025 11.9508L14.025 17.9508Z"
                  fill="#FFFFFF"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Tagline / Baseline Intro */}
        <div className="text-[#f2f2f280] tracking-[0.2px] self-stretch pr-8 font-sans font-light text-[14px] leading-[20px]">
          <span className="text-[#f2f2f2cc] font-medium castoro">{title}</span>{" "}
          <span>— &quot;{tagline}&quot;</span>
        </div>

        {/* Tech Stack Indicator */}
        <div className="text-[#f2f2f280] mb-10 tracking-[0.2px] self-stretch pr-8 font-sans font-light text-[18px] leading-[20px]">
          <span className="text-white font-medium castoro">Made with</span>{" "}
          <span className="text-[#f2f2f2cc] font-medium castoro">
            :&quot;{techStack}&quot;
          </span>
        </div>

        {/* Responsive Asset Visual Container */}
        <div className="w-[90%] imageDiv aspect-[16/9] mx-auto relative">
          <Image
            src={imageSrc}
            fill
            alt={`${title.toLowerCase()} screenshot`}
            className="object-cover rounded z-[-1]"
          />
          <div className="about text-white pt-0 md:pt-[10rem]">
            <h1 className="text-center text-nowrap text-[2.5rem] md:text-[5rem] castoro">
              Project Description
            </h1>
            <p className="text-center text-[1.8rem] md:text-[2rem] lora">
              {description}
            </p>
            <h1 className="text-center text-[2.5rem] md:text-[3rem] castoro mt-4">
              My Role
            </h1>
            <p className="text-center text-[1.8rem] lora font-semibold">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
