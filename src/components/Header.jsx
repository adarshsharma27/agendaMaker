import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LuAlignRight, LuX } from "react-icons/lu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="text-gray-600 font-baijamjuree bg-gray-100 dark:bg-slate-700">
        {/* Desktop Navigation start */}
        <div className="hidden container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex font-baijamjuree font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            {/* <img src="../images/logo.png" width="40px" /> */}
            <span className="ml-2 text-xl font-bold text-rose-600">
              DesiBlogs
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="mr-5 hover:text-rose-600 dark:text-white font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className="mr-5 hover:text-rose-600 dark:text-white font-semibold"
            >
              Create Agenda
            </NavLink>

            <NavLink
              to="/aboutus"
              className="mr-5 hover:text-rose-600 dark:text-white font-semibold"
            >
              About Us{" "}
            </NavLink>
            <NavLink
              to="/signup"
              className="mr-5 hover:text-rose-600 dark:text-white font-semibold"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="mr-5 hover:text-rose-600 dark:text-white font-semibold"
            >
              LogIn
            </NavLink>
          </nav>
        </div>
        {/* Desktop Navigation end */}
        {/* Mobile Navigation start */}
        <div className="md:hidden container mx-auto flex flex-wrap px-4 pt-3 flex-col">
          <div className="fixed top-0 left-0 right-0 z-30 container mx-auto flex flex-wrap px-4 pt-3 flex-col bg-gray-100 dark:bg-slate-600 ">
            <div className="flex justify-between z-30 text-gray-600 dark:text-white">
              <NavLink
                to="/"
                className="flex font-baijamjuree font-medium items-center  mb-4 md:mb-0"
              >
                {/* <img src="../images/logo.png" width="30px" /> */}
                <span className="ml-2 text-xl font-bold text-rose-600">
                  DesiBlogs
                </span>
              </NavLink>
              <div>
                {open === true ? (
                  <LuX
                    className="text-2xl"
                    onClick={() => toggleNavigation()}
                  />
                ) : (
                  <LuAlignRight
                    className="text-2xl"
                    onClick={() => toggleNavigation()}
                  />
                )}
              </div>
            </div>
          </div>

          <nav
            className={
              open === true
                ? "text-center z-20 mx-auto flex flex-col  justify-center  bg-gray-100 text-gray-600 dark:bg-slate-600 w-full h-screen items-center text-base gap-2 fixed top-0 left-0 transition-all duration-1000 ease-in-out "
                : "text-center z-20 mx-auto flex flex-col  justify-center  bg-gray-100 text-gray-600 dark:bg-slate-600 w-full h-screen items-center text-base gap-2 fixed top-0  left-[-500px] transition-all duration-1000 ease-in-out "
            }
          >
            <NavLink
              to="/"
              className="hover:text-rose-600 dark:text-white py-2 border-b-2 w-10/12 border-gray-500 hover:border-rose-500  font-semibold"
              onClick={() => toggleNavigation()}
            >
              Home{" "}
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-rose-600 dark:text-white  py-2 border-b-2 w-10/12 border-gray-500  hover:border-rose-500  font-semibold"
              onClick={() => toggleNavigation()}
            >
              About Us{" "}
            </NavLink>

            <NavLink
              to="/create"
              className="hover:text-rose-600 dark:text-white py-2 border-b-2 w-10/12 border-gray-500  hover:border-rose-500  font-semibold"
              onClick={() => toggleNavigation()}
            >
              Create Agenda
            </NavLink>
            <NavLink
              to="/signup"
              className="hover:text-rose-600 dark:text-white py-2 border-b-2 w-10/12 border-gray-500  hover:border-rose-500  font-semibold"
              onClick={() => toggleNavigation()}
            >
              SignUp
            </NavLink>
            <NavLink
              to="/login"
              className="hover:text-rose-600 dark:text-white py-2 border-b-2 w-10/12 border-gray-500  hover:border-rose-500  font-semibold"
              onClick={() => toggleNavigation()}
            >
              LogIn
            </NavLink>
          </nav>
        </div>
        {/* mobile navigation end */}
      </header>
    </>
  );
};

export default Header;
