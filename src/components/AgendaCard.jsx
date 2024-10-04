import React from "react";
import { LuPenSquare, LuTrash, LuView } from "react-icons/lu";
import Modal from "./Modal";
import UpdateAgenda from "./UpdateAgenda";
import DeleteAgenda from "./DeleteAgenda";
import SingleAgenda from "./SingleAgenda";
const AgendaCard = ({
  isViewModalOpen,
  setIsViewModalOpen,
  isUpdateModalOpen,
  setIsUpdateModalOpen,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  $id,
  title,
  label,
  category,
  topics,
  description,
  createdAt,
}) => {
  const handleUpdate = () => {
    alert("Update");
  };
  const handleDelete = () => {
    alert("Delete");
  };
  return (
    <>
      <article className="rounded-lg break-words border border-gray-100 bg-white p-4  shadow-sm transition hover:cursor-pointer hover:shadow-lg sm:p-6 font-baijamjuree">
        <span className="inline-block rounded bg-rose-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="inline-flex my-1 items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
          <p className="whitespace-nowrap text-sm">{category}</p>
        </span>
        <p className="pb-2 text-base text-gray-500">
          {description?.substring(0, description.indexOf("."))}...
        </p>
        <p className=" text-right pb-4 text-sm font-semibold text-gray-600">
          {createdAt}
        </p>
        <div className="flex justify-end gap-2">
          <LuView
            size={32}
            className="text-slate-500 cursor-pointer"
            onClick={() => setIsViewModalOpen(true)}
          />
          <LuPenSquare
            size={32}
            className="text-sky-600 cursor-pointer"
            onClick={() => setIsUpdateModalOpen(true)}
          />
          <LuTrash
            size={32}
            className="text-red-600 cursor-pointer"
            onClick={() => setIsDeleteModalOpen(true)}
          />
        </div>
      </article>
      <Modal
        isOpen={isViewModalOpen}
        setIsOpen={setIsViewModalOpen}
        submitBtnText={""}
        cancelBtnText={""}
      >
        <SingleAgenda id={$id} />
      </Modal>
      <Modal
        isOpen={isUpdateModalOpen}
        setIsOpen={setIsUpdateModalOpen}
        submitBtnText={"Confirm"}
        cancelBtnText={"Cancel"}
        handleSubmit={handleUpdate}
      >
        <UpdateAgenda />
      </Modal>
      <Modal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        submitBtnText={"Confirm"}
        cancelBtnText={"Cancel"}
        handleSubmit={handleDelete}
      >
        <DeleteAgenda />
      </Modal>
    </>
  );
};

export default AgendaCard;
