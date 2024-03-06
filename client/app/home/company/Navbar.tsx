import React from "react";
import ButtonPrimary from "@/app/components/ButtonPrimary";
interface NavbarProps {
  onItemClick: (name: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onItemClick, currentPage }) => {
  const _navigation = [
    { name: "Dashboard", href: "#" },
    { name: "Jobs", href: "#/jobs" },
    { name: "Application", href: "#/application" },
    { name: "Profile", href: "#/profile" },
  ];
  const companyName = "My Company";

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            {companyName}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ButtonPrimary text="Sign Out"/>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {_navigation.map((item) => (
              <li key={item.name}>
                <a
                  style={{ cursor: "pointer" }}
                  className={`block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 text-lg ${
                    currentPage === item.name ? "font-bold" : ""
                  }`}
                  onClick={() => onItemClick(item.name)}
                  onMouseEnter={() => {
                    console.log("Mouse entered:", item.name);
                  }}
                  onMouseLeave={() => {
                    console.log("Mouse left:", item.name);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
