"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import authService from "@/app/services/auth";
import { isValidEmail } from "@/app/helpers/helpers";
const CompanyRegister = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const role = useSearchParams().get("role");
  const [user, setUser] = useState({
    email: "",
    password: "",
    retypePassword: "",
    companyName: "",
    companyAddress: "",
    companyDescription: "",
  });
  const isFormValid = () => {
    return (
      user.email.trim() !== "" &&
      user.password.trim() !== "" &&
      user.retypePassword.trim() !== "" &&
      user.companyName.trim() !== "" &&
      user.companyAddress.trim() !== "" &&
      user.companyDescription.trim() !== "" &&
      user.password === user.retypePassword &&
      isValidEmail(user.email)
    );
  };
  const handleRoute = (role: any) => {
    router.push(`/auth/login?role=${role}`);
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (!isFormValid()) {
      setError("Fill all fields correctly");
      return;
    }
    try {
      const response = await authService.registerCompany(user);
      if (response.error) {
        setUser({
          email: "",
          password: "",
          retypePassword: "",
          companyName: "",
          companyAddress: "",
          companyDescription: "",
        });
        setError(response.error);
      } else {
        setUser({
          email: "",
          password: "",
          retypePassword: "",
          companyName: "",
          companyAddress: "",
          companyDescription: "",
        });
        setSuccess(!success);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account to post a job!
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Pro<span style={{ color: "red" }}>*</span>
            </label>
            <div className="mt-2">
              <input
                value={user.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <div className="mt-2">
              <input
                value={user.password}
                onChange={handleInputChange}
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="retypePassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Retype Password<span style={{ color: "red" }}>*</span>
            </label>
            <div>
              <input
                value={user.retypePassword}
                onChange={handleInputChange}
                id="retypePassword"
                name="retypePassword"
                required
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div>
              <input
                value={user.companyName}
                onChange={handleInputChange}
                id="companyName"
                name="companyName"
                required
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="companyAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Adress
            </label>
            <div>
              <input
                value={user.companyAddress}
                onChange={handleInputChange}
                id="companyAddress"
                name="companyAddress"
                required
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="companyDescription"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                value={user.companyDescription}
                onChange={handleInputChange}
                name="companyDescription"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          {error && (
            <div>
              <p className="mt-10 text-center text-sm text-red-600">{error}</p>
            </div>
          )}
          {success && (
            <div>
              <p className="mt-10 text-center text-gray-900">
                Account created successfully{"  "}
                <a
                  className="font-semibold leading-6 text-blue-400 hover:text-blue-500"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRoute(role)}
                >
                  sign in
                </a>
              </p>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={!isFormValid()}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
const StudentRegister = () => {
  return (
    <>
      <div>
        <p>Student Za</p>
      </div>
    </>
  );
};
const page = () => {
  const router = useRouter();
  const role = useSearchParams().get("role");
  const registerPage =
    role === "company" ? <CompanyRegister /> : <StudentRegister />;
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div>{registerPage}</div>
    </div>
  );
};

export default page;
