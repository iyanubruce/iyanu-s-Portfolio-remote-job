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
  githubUrl?: string;
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
  githubUrl,
}: ProjectCardProps) {
  return (
    // Responsive padding, margins, and flexible height for mobile
    <div className="w-full rounded-[24px] p-[5px] md:p-[10px] mb-[2rem] md:mb-[6rem] bg-white">
      <div
        onClick={() => window.open(projectUrl, "_blank", "noopener,noreferrer")}
        className="w-full block rounded-[20px] bg-black p-[20px] md:p-[30px] overflow-hidden gradient-box cursor-pointer"
      >
        {/* Header Section: Stacks vertically on mobile */}
        <div className="text-white roboto flex flex-col gap-3 mb-4">
          <div className="flex justify-between items-start">
            <span className="text-[22px] md:text-[24px] font-semibold flex-1 pr-4">
              {title}
            </span>
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* GitHub Link */}
              {githubUrl && (
                <Link
                  href={githubUrl}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[13px] md:text-[14px] hover:underline decoration-[1px] underline-offset-[3px] flex items-center gap-1 whitespace-nowrap"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                      fill="#FFFFFF"
                    />
                  </svg>
                  Code
                </Link>
              )}

              {/* View Project Link */}
              <Link
                href={projectUrl}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[13px] md:text-[14px] hover:underline decoration-[1px] underline-offset-[3px] flex items-center gap-1 whitespace-nowrap"
              >
                Visit
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.025 17.9508L12.95 16.9008L17.15 12.7008H4V11.2008H17.15L12.925 6.97578L14 5.92578L20.025 11.9508L14.025 17.9508Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-[#f2f2f280] text-[13px] md:text-[14px] leading-relaxed font-sans font-light">
            <span className="text-[#f2f2f2cc] font-medium castoro">
              {title}
            </span>{" "}
            <span>— &quot;{tagline}&quot;</span>
          </div>

          {/* Tech Stack */}
          <div className="text-[#f2f2f280] text-[14px] md:text-[16px] font-sans font-light">
            <span className="text-white font-medium castoro">Made with</span>{" "}
            <span className="text-[#f2f2f2cc] font-medium castoro">
              :&quot;{techStack}&quot;
            </span>
          </div>
        </div>

        {/* Image Container - Clean separation */}
        <div className="w-full imageDiv aspect-[4/3] md:aspect-[16/9] mx-auto relative rounded-[12px] overflow-hidden mb-6">
          <Image
            src={imageSrc}
            fill
            alt={`${title.toLowerCase()} screenshot`}
            className="object-cover"
          />
        </div>

        {/* Project Details - Clean section below image */}
        <div className="text-white space-y-5">
          {/* Description Section */}
          <div className="text-center">
            <h2 className="text-[18px] md:text-[24px] castoro mb-2 text-[#f2f2f2cc]">
              Project Description
            </h2>
            <p className="text-[14px] md:text-[16px] lora text-[#f2f2f2b3] leading-relaxed px-2">
              {description}
            </p>
          </div>

          {/* Role Section */}
          <div className="text-center pt-2 border-t border-[#ffffff20]">
            <h2 className="text-[18px] md:text-[24px] castoro mb-2 text-[#f2f2f2cc]">
              My Role
            </h2>
            <p className="text-[15px] md:text-[18px] lora font-semibold text-white">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
