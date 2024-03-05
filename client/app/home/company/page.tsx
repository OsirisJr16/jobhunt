import React from "react";
import Navbar from "./Navbar";
const Company = () => {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <div className="pt-14 mt-6">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Company;
