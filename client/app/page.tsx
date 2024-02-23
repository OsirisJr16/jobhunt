"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12"></div>
            <div className="hidden lg:gap-x-8 lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/auth/login?role=student"
                className="text-base font-semibold leading-6 text-blue-500"
              >
                Sign in
              </Link>
              <a>|</a>
              <Link
                href="/auth/login?role=company"
                className="text-base font-semibold leading-6 text-gray-500"
              >
                Post a Job
              </Link>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6">
                    <Link
                      href="/auth/login?role=student"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-500 hover:bg-gray-50"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/auth/login?role=company"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                      Post Job
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
      <div className="relative isolate px-6 pt-40 lg:px-8 place-content-center">
        <div>
          <p className="text-center mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
            Find the best Online jobs
          </p>
          <form>
            <label className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2  focus-within:border-gray-300">
              <input
                id="search-bar"
                placeholder="Job title"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-blue-400 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </button>
            </label>
          </form>
          <p className="text-center max-auto pt-10 font-bold text-lg">
            Recent Searches
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Home;
