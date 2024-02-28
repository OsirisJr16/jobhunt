"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
const CompanyRegister = () => {
  return (
    <>
      <p>Company za</p>
    </>
  );
};
const StudentRegister = () => {
  return (
    <>
      <p>Student za</p>
    </>
  );
};
const page = () => {
  const router = useRouter();
  const role = useSearchParams().get("role");
  const registerPage = role === 'company' ? <CompanyRegister /> : <StudentRegister />;
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">{registerPage}</div>
    </div>
  );
};

export default page;
