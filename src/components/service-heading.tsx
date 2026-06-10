import React, { ReactNode } from "react";

interface SectionHeadingProps {
  heading: string;
  icon: ReactNode;
}

export default function SectionHeading({ heading, icon }: SectionHeadingProps) {
  return (
    <h1 className="font-semibold text-[1.5rem] md:text-[1.7rem] flex justify-center leading-[1.176] uppercase tracking-[.5rem] mt-0 pt-[3.2rem] mb-[8rem] relative text-center roboto text-white">
      <div className="max-w-min text-nowrap flex gap-[10px] items-center">
        {/* Render the dynamic SVG icon passed from the parent */}
        {icon}
        {heading}
      </div>
      <div className="bg-purplink h-[2px] w-[140px] absolute bottom-[-20px] left-[50%] transform translate-x-[-50%]" />
    </h1>
  );
}
