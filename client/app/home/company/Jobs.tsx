"use client";
import React, { use, useEffect, useState } from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import jobsService from "@/app/services/jobs";
import { Job } from "@/app/interface/jobs.interface";
import Modal from "@/app/components/Modal";
interface jobDataInterface {
  title:string,
  description:string,
  requirement:"",
  salary:number,
  date_pos:Date,
  CompanId:number |undefined
}
interface setp1Props {
  onNext: () => void;
  setJobData : (data :any)=> void
}
interface step2Props {
  onPrevious: () => void;
  onSubmit: () => void;
  jobData :any
}
interface ToggleButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const experiences = ["3 ans", "5 ans", "5 ans +"];
const jobTypes = ["remote", "hybride", "Presential"];

const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <span className="rounded-full border border-gray-300 px-3 py-1 text-sm">
        <input
          checked={checked}
          onChange={handleChange}
          type="checkbox"
          className="form-checkbox rounded-full text-blue-500 border-gray-300 focus:ring-blue-500"
        />{" "}
        {label}
      </span>
    </label>
  );
};
const Step1: React.FC<setp1Props> = ({ onNext,setJobData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: 0,
  });
  const companyId = localStorage.getItem("userId")
    ? parseInt(localStorage.getItem("userId") || "")
    : undefined;
  const date = Date.now();

  const [experiencesChecked, setExperiencesChecked] = useState<boolean[]>(
    Array(experiences.length).fill(false)
  );
  const [jobTypesChecked, setJobTypesChecked] = useState<boolean[]>(
    Array(jobTypes.length).fill(false)
  );
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleExperienceChange = (index: number, checked: boolean) => {
    const updatedExperiences = [...experiencesChecked];
    updatedExperiences[index] = checked;
    setExperiencesChecked(updatedExperiences);
  };

  const handleJobTypeChange = (index: number, checked: boolean) => {
    const updatedJobTypes = [...jobTypesChecked];
    updatedJobTypes[index] = checked;
    setJobTypesChecked(updatedJobTypes);
  };
  const handleNext = () => {
    const selectedRequirements = experiences
      .filter((exp, index) => experiencesChecked[index])
      .map((exp, index) => `${exp} - ${jobTypes[index]}`); 
    
    const jobData = {
      title: formData.title,
      description: formData.description,
      requirements: selectedRequirements.join('-'),
      salary: formData.salary,
      date_post: date,
      companyId:companyId
    };
    setJobData(jobData) ; 
    onNext();
};

  return (
    <>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">
          Publish a job
        </h3>
        <form className="space-y-6">
          <div className="mb-5">
            <label
              htmlFor="job"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Job Title
            </label>
            <input
              name="title"
              type="text"
              id="job"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-inset focus:ring-indigo-600 block w-full p-2.5"
              placeholder="developer fullstack"
              required
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about the job.
            </p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="salary"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-inset focus:ring-indigo-600 block w-full p-2.5"
              placeholder="4000$"
              value={formData.salary}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Experiences
            </label>
            <div className="flex flex-row">
              {experiences.map((exp, index) => (
                <ToggleButton
                  key={exp}
                  label={exp}
                  checked={experiencesChecked[index]}
                  onChange={(checked) => handleExperienceChange(index, checked)}
                />
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Job type
            </label>
            <div className="flex flex-row">
              {jobTypes.map((type, index) => (
                <ToggleButton
                  key={type}
                  label={type}
                  checked={jobTypesChecked[index]}
                  onChange={(checked) => handleJobTypeChange(index, checked)}
                />
              ))}
            </div>
          </div>
          <ButtonPrimary text="next" onClick={() => handleNext()} />
        </form>
      </div>
    </>
  );
};
const Step2: React.FC<step2Props> = ({ onPrevious, onSubmit ,jobData}) => {
  return (
    <>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">Post the Job</h3>
        <div> 
          <p>Title : <span>{jobData.title}</span></p>
          <p>Description : <span>{jobData.description}</span></p>
        </div>
        <div className="flex flex-row">
          <ButtonPrimary text="Previous" onClick={onPrevious} />
          <ButtonPrimary text="Publish" onClick={onSubmit} />
        </div>
      </div>
    </>
  );
};

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [jobData, setJobData] = useState<jobDataInterface | null>(null);

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
        {step == 1 && <Step1 onNext={handleNextStep} setJobData={setJobData}/>}
        {step == 2 && (
          <Step2
            onSubmit={() => console.log("Ok")}
            onPrevious={handlePreviousStep}
            jobData={jobData}
          />
        )}
      </Modal>
    </>
  );
};

export default Jobs;
