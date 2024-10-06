import React from "react";
import SideBar from "./SideBar";
import DashBoardCards from "./DashBoardCards";
const DashBoard = () => {
  return (
    <>
      <div className="flex sm:py-0 py-11">
        <SideBar />
        <DashBoardCards />
      </div>
    </>
  );
};

export default DashBoard;
