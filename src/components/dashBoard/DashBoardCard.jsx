import React from "react";

const DashBoardCard = ({ label, data, children }) => {
  return (
    <>
      <div className="py-6 sm:mb-0 mb-6 card-shadow-custom  shadow-xl rounded-lg flex flex-wrap gap-2  items-center flex-col">
        {children}

        <h2 className="text-6xl  font-bold font-baijamjuree  text-gray-900 dark:text-white capitalize">
          {data}
        </h2>

        <p className="text-xl font-bold leading-relaxed  text-gray-600  dark:text-gray-300 capitalize">
          {label}
        </p>
      </div>
    </>
  );
};

export default DashBoardCard;
