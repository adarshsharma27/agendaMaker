import React, { useEffect, useState } from "react";
import DashBoardCharts from "./DashBoardCharts";
import DashBoardTable from "./DashBoardTable";
import conf, { databases } from "../../config/config";
import { LuUsers, LuLibrary } from "react-icons/lu";
import DashBoardCard from "./DashBoardCard";
const DashBoardCards = () => {
  const [users, setUsers] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await databases.listDocuments(
          conf.databaseId,
          conf.usersCollectionId
        );
        setUsers(resp?.total);
        setAllUsers(resp?.documents);
      } catch (error) {}
    };
    getUsers();
  }, []);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const resp = await databases.listDocuments(
          conf.databaseId,
          conf.collectionId
        );

        setAgendas(resp?.total);
      } catch (error) {}
    };
    getBlogs();
  }, []);
  return (
    <>
      <section className="text-gray-600 font-baijamjuree  dark:bg-slate-700 w-full">
        <div className="container px-5 md:py-0 py-10 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6">
              <h1 className="sm:w-2/5 text-gray-900 font-bold font-baijamjuree  text-3xl mb-2 sm:mb-0 dark:text-white">
                DashBoard
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <DashBoardCard label={"Total Users"} data={users}>
              <LuUsers
                size={50}
                className="text-indigo-400 hover:text-green-400 hover:cursor-pointer"
              />
            </DashBoardCard>

            <DashBoardCard label={"Total Agendas"} data={agendas}>
              <LuLibrary
                size={50}
                className="text-red-400 hover:text-green-400 hover:cursor-pointer"
              />
            </DashBoardCard>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col pt-6">
            <h1 className="sm:w-2/5 text-gray-900 font-bold font-baijamjuree  text-3xl  sm:mb-0 dark:text-white">
              Basic Details
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <DashBoardTable users={allUsers} />
            <DashBoardCharts users={users} agendas={agendas} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoardCards;
