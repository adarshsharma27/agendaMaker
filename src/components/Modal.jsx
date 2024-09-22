import React from "react";
import { LuXSquare } from "react-icons/lu";

const Modal = ({
  isOpen,
  setIsOpen,
  cancelBtnText,
  submitBtnText,
  children,
}) => {
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
          {cancelBtnText && submitBtnText && (
            <div className="flex justify-end gap-4 py-2">
              <button className="block md:w-1/4   rounded px-8 py-3 text-base font-bold text-gray-600 shadow hover:text-rose-500 focus:outline-none focus:ring active:text-rose-500">
                {cancelBtnText}
              </button>
              <button className="block  md:w-1/4  rounded-lg bg-rose-600 px-8 py-3 text-base font-bold text-white hover:bg-rose-500 focus:outline-none focus:ring active:bg-rose-500">
                {submitBtnText}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
