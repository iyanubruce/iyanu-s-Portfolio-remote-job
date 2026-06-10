import React from "react";

// 1. Define the TypeScript interface for the component props
export interface ExperienceCardProps {
  dateRange: string;
  companyName: string;
  roleTitle: string;
  description: string;
}

// 2. Destructure the dynamic props inside your layout
export default function ExperienceCard({
  dateRange,
  companyName,
  roleTitle,
  description,
}: ExperienceCardProps) {
  return (
    <div className="p-10">
      {/* Date Range Block */}
      <p className="uppercase roboto text-[1.4rem] tracking-[0.3rem] font-[400] leading-[1.714] text-black mb-[0.8rem]">
        {dateRange}
      </p>

      {/* Company Heading */}
      <div className="frank text-[3.6rem] font-[500] leading-[1.22]">
        {companyName}
      </div>

      {/* Role Subheading */}
      <div className="text-[2.1rem] font-[400] leading-[1.333] mt-0 lora font-ligatures text-rendering-optimize">
        {roleTitle}
      </div>

      {/* Dynamic Narrative Body Text */}
      <p className="font-normal not-italic leading-[1.882] block my-4 mx-0 text-[16px] text-justify md:text-left md:text-[1.7rem] roboto whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
