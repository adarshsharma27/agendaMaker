import React, { useState } from "react";

import {
  LuUsers,
  LuLayoutDashboard,
  LuLibrary,
  LuArrowRightFromLine,
  LuArrowLeftToLine,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const [isExpended, setIsExpended] = useState(false);
  const handleSideBarToggle = () => {
    setIsExpended(!isExpended);
    console.log(isExpended);
  };
  return (
    <>
      <div
        className={`text-gray-600 font-baijamjuree bg-white shadow-xl dark:bg-slate-700  border-r border-gray-200 transition-[width] duration-300 ease-in-out ${
          isExpended ? "sm:w-64 w-full" : "w-24"
        }`}
      >
        <div className="container flex flex-wrap flex-col">
          <nav
            className={`flex flex-wrap flex-col items-start text-base justify-start`}
          >
            <div
              to="/"
              className={`hover:border-gray-800 border-b  py-4   border-gray-400 group w-full p-2 flex  items-center gap-1 text-lg transition duration-600 ${
                isExpended ? "justify-end" : "justify-center"
              }`}
              onClick={handleSideBarToggle}
            >
              {isExpended ? (
                <LuArrowLeftToLine
                  size={30}
                  className="text-gray-500 hover:text-rose-600 hover:scale-105 hover:cursor-pointer transition duration-800 "
                />
              ) : (
                <LuArrowRightFromLine
                  size={30}
                  className="text-gray-500 hover:text-rose-600  hover:cursor-pointer "
                />
              )}
            </div>
            <NavLink
              to="/dashboard"
              className={`hover:bg-gray-100 hover:border-gray-800 border-b   border-gray-400 group w-full p-2 flex   items-center gap-1 text-lg transition duration-600 ${
                isExpended ? "justify-start" : "justify-center"
              }`}
            >
              <LuLayoutDashboard
                size={26}
                className="text-gray-500 group-hover:text-rose-600  hover:cursor-pointer "
              />
              <span
                className={`text-gray-600 group-hover:text-gray-700 px-1 ${
                  isExpended ? "" : "hidden"
                }`}
              >
                DashBoard
              </span>{" "}
            </NavLink>
            <NavLink
              to="/dashboard-users"
              className={`hover:bg-gray-100 hover:border-gray-800 border-b   border-gray-400 group w-full p-2 flex   items-center gap-1 text-lg transition duration-600 ${
                isExpended ? "justify-start" : "justify-center"
              }`}
            >
              <LuUsers
                size={26}
                className="text-gray-500 group-hover:text-rose-600  hover:cursor-pointer "
              />
              <span
                className={`text-gray-600 group-hover:text-gray-700 px-1 ${
                  isExpended ? "" : "hidden"
                }`}
              >
                Users
              </span>
            </NavLink>
            <NavLink
              to="/dashboard-agendas"
              className={`hover:bg-gray-100 hover:border-gray-800 border-b   border-gray-400 group w-full p-2 flex   items-center gap-1 text-lg transition duration-600 ${
                isExpended ? "justify-start" : "justify-center"
              }`}
            >
              <LuLibrary
                size={26}
                className="text-gray-500 group-hover:text-rose-600  hover:cursor-pointer "
              />
              <span
                className={`text-gray-600 group-hover:text-gray-700 px-1 ${
                  isExpended ? "" : "hidden"
                }`}
              >
                Agendas
              </span>
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
