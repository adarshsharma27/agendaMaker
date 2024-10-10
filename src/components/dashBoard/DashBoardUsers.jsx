import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import DashBoardCard from "./DashBoardCard";
import {
  LuArrowDown,
  LuArrowUp,
  LuGlobe2,
  LuHome,
  LuMapPin,
  LuSearch,
  LuUsers,
} from "react-icons/lu";
import conf, { databases } from "../../config/config";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
const DashBoardUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [showArrow, setShowArrow] = React.useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await databases.listDocuments(
          conf.databaseId,
          conf.usersCollectionId
        );
        setAllUsers(resp?.documents);
      } catch (error) {}
    };
    getUsers();
  }, []);

  const country = [
    ...new Set(
      allUsers.map((country) => country.country).filter((city) => city !== null)
    ),
  ];
  const city = [
    ...new Set(
      allUsers.map((city) => city.city).filter((city) => city !== null)
    ),
  ];
  const region = [
    ...new Set(
      allUsers.map((region) => region.region).filter((city) => city !== null)
    ),
  ];

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Joined",
      accessorKey: "createdAt",
    },
    {
      header: "Country",
      accessorKey: "country",
    },
    {
      header: "State",
      accessorKey: "region",
    },
    {
      header: "City",
      accessorKey: "city",
    },
    // {
    //   header: "Edit",
    //   accessorKey: "edit",
    //   enableSorting: false,
    //   cell: function render(row) {
    //     return (
    //       <NavLink to={`/updateproduct/${row?.row.original.$id}`}>
    //         <LuPencilLine
    //           className=" text-indigo-400 hover:text-[#16a34a] hover:cursor-pointer dark:text-white"
    //           size={30}
    //         />
    //       </NavLink>
    //     );
    //   },
    // },
    // {
    //   header: "History",
    //   accessorKey: "history",
    //   enableSorting: false,
    //   cell: function render(row) {
    //     console.log(row);
    //     return (
    //       <LuTrash2
    //         className="text-red-400 hover:text-[#16a34a] hover:cursor-pointer dark:text-white"
    //         size={30}
    //         onClick={() => deleteProduct(row?.row.original.$id)}
    //       />
    //     );
    //   },
    // },
  ];
  const table = useReactTable({
    data: allUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });
  return (
    <>
      <div className="flex sm:py-0 py-11">
        <SideBar />
        <section className="text-gray-600 font-baijamjuree  dark:bg-slate-700 w-full">
          <div className="container px-5 md:py-0 py-10 mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6">
                <h1 className="sm:w-2/5 text-gray-900 font-bold font-baijamjuree  text-3xl mb-2 sm:mb-0 dark:text-white">
                  Users Details
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <DashBoardCard label={"Countries"} data={country?.length}>
                <LuGlobe2
                  size={50}
                  className="text-indigo-400 hover:text-green-400 hover:cursor-pointer"
                />
              </DashBoardCard>
              <DashBoardCard label={"States"} data={region?.length}>
                <LuMapPin
                  size={50}
                  className="text-blue-400 hover:text-green-400 hover:cursor-pointer"
                />
              </DashBoardCard>
              <DashBoardCard label={"Cities"} data={city?.length}>
                <LuHome
                  size={50}
                  className="text-purple-400 hover:text-green-400 hover:cursor-pointer"
                />
              </DashBoardCard>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col pt-6">
              <h1 className="sm:w-2/5 text-gray-900 font-bold font-baijamjuree  text-3xl  sm:mb-0 dark:text-white">
                Users Details
              </h1>
            </div>
            <div className="overflow-x-auto  mt-2 overflow-y-scroll h-[80vh] container mx-auto rounded-lg border border-gray-100  dark:bg-[#313E51] dark:shadow-2xl card-shadow-custom shadow-xl dark:text-white">
              <form className="search w-[60%]  relative py-4 px-2">
                <input
                  className="w-full rounded-lg  text-gray-700 border-gray-300 p-4 pe-12 text-base shadow-lg  outline-none focus:ring-1 focus:ring-[#16a34a] dark:bg-[#3C4D67] dark:text-white"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <div className="search-button absolute inset-y-8 end-4">
                  <LuSearch size={26} />
                </div>
              </form>
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-base">
                <thead className="text-center bg-gray-100 dark:bg-[#313E51]">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          className="whitespace-nowrap text-lg font-bold text-gray-900"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {showArrow && !header.column.getIsSorted() && (
                            <LuArrowDown size={20} className="mx-auto" />
                          )}
                          {{
                            asc: <LuArrowUp size={20} className="mx-auto" />,
                            desc: <LuArrowDown size={20} className="mx-auto" />,
                          }[header.column.getIsSorted()] ?? null}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.length === 0 ? (
                    <td
                      colSpan="12"
                      className="fs-5 py-2 text-center fw-bold text-danger"
                    >
                      <h4>No User Found</h4>
                    </td>
                  ) : (
                    table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className="whitespace-nowrap text-base font-semibold  text-gray-600 dark:text-white"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} role="button">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {!table.getCanPreviousPage()}
            <div className="text-lg flex justify-end items-center py-3 px-3 cursor-pointer">
              <span className="pe-2">Row Per Page</span>{" "}
              <select
                className="border-2 border-gray-300 p-1"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              <span className="px-3">
                Page{" "}
                <strong>
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </strong>{" "}
              </span>
              <button
                className="page-item paginator disabled:cursor-not-allowed"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {"<<"}
              </button>{" "}
              <button
                className="page-item paginator  px-2 disabled:cursor-not-allowed"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"<"}
              </button>{" "}
              <button
                className="page-item paginator  px-2 disabled:cursor-not-allowed"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {">"}
              </button>{" "}
              <button
                className="page-item paginator disabled:cursor-not-allowed"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {">>"}
              </button>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashBoardUsers;
