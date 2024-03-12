"use client";
import React, { Children, FC, use, useEffect, useState } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import jobsService from "@/app/services/jobs";
import { Job } from "@/app/interface/jobs.interface";
import { Transition, Dialog } from "@headlessui/react";
import { Suspense } from "react";

interface modalProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
interface setp1Props {
  onNext: () => void;
}
interface step2Props {
  onPrevious: () => void;
}
const Step1: React.FC<setp1Props> = ({ onNext }) => {
  return (
    <>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">
          Publish a job
        </h3>
        <ButtonPrimary text="next" onClick={onNext}/>
      </div>
    </>
  );
};
const Step2: React.FC<step2Props> = ({ onPrevious }) => {
  return (
    <>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">Post the Job</h3>
        <ButtonPrimary text="Previous" onClick={onPrevious}/>
      </div>
    </>
  );
};
const Modal: React.FC<modalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={onClose}>
          X
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
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
            <ButtonPrimary onClick={openModal} text="Post a Job" />
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
              <tr
                style={{ cursor: "pointer" }}
                key={job.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {job.title}
                </td>
                <td className="px-6 py-4">
                  {job.description.length > 20
                    ? `${job.description.slice(0, 20)}...`
                    : job.description}
                </td>
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
      <Modal isVisible={isOpen} onClose={closeModal}>
        {step == 1 && <Step1 onNext={handleNextStep} />}
        {step == 2 && <Step2 onPrevious={handlePreviousStep} />}
      </Modal>
    </>
  );
};

export default Jobs;
