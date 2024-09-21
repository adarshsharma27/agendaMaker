import React from "react";
import { LuXSquare } from "react-icons/lu";

const AuthModal = () => {
  return (
    <>
      <div className="font-baijamjuree fixed top-0 left-0  flex justify-center items-center	 shadow-2xl z-99 w-full h-full bg-[#0000002b]">
        <div className="mx-auto max-w-lg d-flex justify-center items-center bg-white rounded-lg p-4 shadow-2xl">
          <div className="flex justify-end">
            <LuXSquare
              size={32}
              className="text-gray-600 hover:scale-105 hover:text-gray-700 cursor-pointer  transition-all duration-1000 ease-in-out"
            />
          </div>
          <div className="px-4 py-6">
            <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
              Get started today
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati sunt dolores deleniti inventore quaerat mollitia?
            </p>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati sunt dolores deleniti inventore quaerat mollitia?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
