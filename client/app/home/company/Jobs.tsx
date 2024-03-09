"use client";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import jobsService from "@/app/services/jobs";
import { Job } from "@/app/interface/jobs.interface";

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const companyId = localStorage.getItem("userId")
    ? parseInt(localStorage.getItem("userId") || "")
    : undefined;
  useEffect(() => {
    async function fetchJobs() {
      try {
        if (companyId) {
          const fetchedJobs = await jobsService.getJobsByCompany(companyId);
          if (Array.isArray(fetchedJobs)) {
            setJobs(fetchedJobs);
          } else {
            console.error("error", fetchedJobs);
          }
        }
      } catch (err) {
        console.error("error:", err);
      }
    }
    fetchJobs();
  }, [companyId]);

  return (
    <>
      <nav className="bg-white w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-lg font-normal whitespace-nowrap">
              List Jobs
            </span>
          </p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ButtonPrimary
              onClick={() => console.log("it Works")}
              text="Post a Job"
            />
          </div>
        </div>
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white">
          <label className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Jobs"
            ></input>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Requirements
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Date publication
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {job.title}
                </td>
                <td className="px-6 py-4">{job.description.length > 20 ? `${job.description.slice(0, 20)}...` : job.description}</td>
                <td className="px-6 py-4">{job.requirements}</td>
                <td className="px-6 py-4">{job.salary}</td>
                <td className="px-6 py-4">{job.date_post.toString()}</td>
                <td className="px-6 py-4">
                  <a
                    style={{ cursor: "pointer" }}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                  <span className="text-white">{"---"}</span>
                  <a
                    style={{ cursor: "pointer" }}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Jobs;
