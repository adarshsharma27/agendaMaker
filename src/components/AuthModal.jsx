import React, { useState } from "react";
import FormField from "./FormField";
import Login from "./Login";

const AuthModal = () => {
  return (
    <>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-baijamjuree">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-bold">
              Sign in to your account
            </p>

            <button
              type="submit"
              className="block w-full rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white"
            >
              Sign in
            </button>

            <p className="text-center text-base text-gray-500">
              No account?
              <a className="underline text-rose-500 pl-2" href="#" >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
