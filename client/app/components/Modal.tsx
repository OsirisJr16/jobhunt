import React from "react";
interface modalProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
const Modal: React.FC<modalProps> = ({ isVisible, onClose, children }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={onClose}
          >
            X
          </button>
          <div className="bg-white p-2 rounded">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
