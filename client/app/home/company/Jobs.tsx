import React from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
const Jobs = () => {
  return (
    <>
      <nav className="bg-white w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            Jobs List
          </p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ButtonPrimary text="Post a Job" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Jobs;
