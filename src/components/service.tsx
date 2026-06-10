import React from "react";
interface serviceProps {
  serviceName: string;
}
export default function Service({ serviceName }: serviceProps) {
  return (
    <div className="px-[3px] md:px-[20px] serviceBorder">
      <h1 className="text-white text-[2rem] md:text-[2.7rem] mb-[2.5rem] md:mb-[3rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
        {serviceName}
      </h1>
    </div>
  );
}
