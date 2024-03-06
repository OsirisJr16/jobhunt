"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import Jobs from "./Jobs";

const Company = () => {
  const [currentPage, setCurrentPage] = useState<
    "Dashboard" | "Jobs" | "Application" | "Profile"
  >("Dashboard");
  const router = useRouter() ; 
  const navItemContent: Record<string, JSX.Element> = {
    Dashboard: <div>Content for Dashboard</div>,
    Jobs: <div><Jobs/></div>,
    Application: <div>Content for Application</div>,
    Profile: <div>Content for profile</div>,
  };

  const hanldeItemClick = (name: string) => {
    setCurrentPage(name as "Dashboard" | "Jobs" | "Application" | "Profile");
    if (name === "Jobs" || name === "Application" || name === "Profile") {
      router.push(`/home/company?tab=${name.toLowerCase()}`);
    }else{
      router.push("/home/company")
    }
  };

  return (
    <>
      <div className="min-h-full">
        <Navbar onItemClick={hanldeItemClick} currentPage={currentPage} />
        <div className="pt-14 mt-6">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                {currentPage}
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {navItemContent[currentPage]}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Company;
