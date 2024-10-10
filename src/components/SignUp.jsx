import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import conf, { ID, account, databases } from "../config/config";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import UAParser from "ua-parser-js";

const SignUpSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name is too short" })
    .max(20, { message: "Name is too long" }),
  email: z.string().email({ message: "Email is not Proper" }),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
const SignUp = () => {
  const navigate = useNavigate();
  const [locationInfo, setLocationInfo] = useState("");
  const [userDeviceInfo, setUserDeviceInfo] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignUpSchema) });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocationInfo(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);
  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    setUserDeviceInfo(result.type || "Unknown device");
  }, []);
  console.log(userDeviceInfo);
  const handleSignUp = async (data) => {
    const { name, email, password } = data;
    const { country_name, region, city } = locationInfo;
    const createdAt = moment(new Date()).format("MMM Do YYYY, h:mm:ss a");
    try {
      const response = await account.create(ID.unique(), email, password, name);

      if (response) {
        await databases.createDocument(
          conf.databaseId,
          conf.usersCollectionId,
          response?.$id,
          {
            name,
            email,
            createdAt,
            country,
            region,
            city,
            device: userDeviceInfo,
          }
        );
      }
      navigate("/login");
    } catch (error) {}
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 font-baijamjuree">
        <div className="mx-auto max-w-lg">
          <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
              SignIn
            </h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <FormField
                label="Name"
                name="name"
                placeholder="Please Enter Name"
                type="text"
                register={register}
                error={errors.name}
              />
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
                Sign in
              </button>
            </form>
            <p className="text-center text-base text-gray-500">
              Already have Account?
              <a className="underline text-rose-500 pl-2" href="#">
                LogIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
