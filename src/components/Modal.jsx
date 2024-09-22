import React from "react";
import { LuXSquare } from "react-icons/lu";

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    isOpen && (
      <div className="font-baijamjuree fixed top-0 left-0  flex justify-center items-center	 shadow-2xl z-99 w-full h-full bg-[#0000002b]">
        <div className="mx-auto w-10/12 d-flex justify-center items-center bg-white rounded-lg p-4 shadow-2xl">
          <div className="flex justify-end">
            <LuXSquare
              size={32}
              className="text-gray-600 hover:scale-105 hover:text-gray-700 cursor-pointer  transition-all duration-1000 ease-in-out"
              onClick={() => setIsOpen(false)}
            />
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
