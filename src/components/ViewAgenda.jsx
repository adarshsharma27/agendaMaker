import React, { useState } from "react";
import AgendaCard from "./AgendaCard";

const ViewAgenda = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <div className="container px-5 py-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AgendaCard
            isViewModalOpen={isViewModalOpen}
            setIsViewModalOpen={setIsViewModalOpen}
            setIsUpdateModalOpen={setIsUpdateModalOpen}
            isUpdateModalOpen={isUpdateModalOpen}
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
          <AgendaCard />
          <AgendaCard />
        </div>
      </div>
    </>
  );
};

export default ViewAgenda;
