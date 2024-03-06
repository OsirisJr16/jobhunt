import React from "react";
interface _props {
  text: string;
}
const ButtonPrimary: React.FC<_props> = ({ text }) => {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
