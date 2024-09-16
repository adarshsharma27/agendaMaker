import React, { useState } from "react";
import FormField from "./FormField";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 font-baijamjuree">
        <div className="mx-auto max-w-lg">
          

         

          <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
           SignIn
          </h1>
            <FormField
              label="Name"
              name="name"
              placeholder="Please Enter Name"
              type="text"
              value={formData?.name}
              handleChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              placeholder="Please Enter Email"
              type="email"
              value={formData?.email}
              handleChange={handleChange}
            />
            <FormField
              label="Password"
              name="password"
              placeholder="Please Enter Password"
              type="password"
              value={formData?.password}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="block w-full rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white hover:bg-rose-500 focus:outline-none focus:ring active:bg-rose-500"
            >
              Sign in
            </button>

            <p className="text-center text-base text-gray-500">
              No account?
              <a className="underline text-rose-500 pl-2" href="#">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
