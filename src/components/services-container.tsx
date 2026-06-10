import React, { ReactNode } from "react";

function ServicesContainer({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1280px] w-[100%] mt-[8.8rem] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-[10px]">
      {children}
    </div>
  );
}

export default ServicesContainer;
