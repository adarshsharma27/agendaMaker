import React from "react";
import FormField from "./FormField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import conf, { account } from "../config/config";
import { useNavigate } from "react-router-dom";

const LogInSchema = z.object({
  email: z.string().email({ message: "Email is not Proper" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(LogInSchema) });
  const handleLogIn = async (data) => {
    const { email, password } = data;
    try {
      const userData = await account.createEmailPasswordSession(
        email,
        password
      );
      alert("Login Successful");
      if (
        userData.userId === conf.adminUserId &&
        userData.providerUid === conf.adminUserEmail
      ) {
        navigate("/dashboard");
      } else {
        navigate("/create");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loginAsGuest = async () => {
    setValue("email", conf.guestUserEmail);
    setValue("password", conf.guestUserPassword);

    try {
      const userData = await account.createEmailSession(
        conf.guestUserEmail,
        conf.guestUserPassword
      );

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-6 lg:px-8 font-baijamjuree">
        <div className="mx-auto max-w-lg">
          <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
              LogIn
            </h1>
            <form onSubmit={handleSubmit(handleLogIn)}>
              <FormField
                label="Email"
                name="email"
                placeholder="Please Enter Email"
                type="email"
                register={register}
                error={errors.email}
              />
              <FormField
                label="Password"
                name="password"
                placeholder="Please Enter Password"
                type="password"
                register={register}
                error={errors.password}
              />
              <button
                type="submit"
                disabled={errors.name || errors.email || errors.password}
                className="block w-full rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white hover:bg-rose-500 focus:outline-none focus:ring active:bg-rose-500 disabled:bg-rose-400 disabled:cursor-not-allowed"
              >
                LogIn
              </button>
              <button
                onClick={loginAsGuest}
                className="block w-full rounded-lg  bg-slate-700  px-5 py-3 text-base font-bold text-white  focus:outline-none focus:ring"
              >
                LogIn As Guest
              </button>
            </form>
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

export default Login;
