import React, { useEffect, useState } from "react";
import AgendaCard from "./AgendaCard";
import conf, { databases } from "../config/config";

const ViewAgenda = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [allAgendas, setAllAgendas] = useState([]);
  useEffect(() => {
    const getAllAgendas = async () => {
      try {
        const resp = await databases.listDocuments(
          conf.databaseId,
          conf.collectionId
        );

        setAllAgendas(resp?.documents);
      } catch (error) {}
    };
    getAllAgendas();
  }, [isViewModalOpen]);
  return (
    <>
      <div className="px-6 py-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {allAgendas.map((agenda) => {
            const {
              $id,
              title,
              label,
              category,
              topics,
              description,
              createdAt,
            } = agenda;
            return (
              <AgendaCard
                isViewModalOpen={isViewModalOpen}
                setIsViewModalOpen={setIsViewModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                isUpdateModalOpen={isUpdateModalOpen}
                isDeleteModalOpen={isDeleteModalOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
                $id={$id}
                title={title}
                label={label}
                category={category}
                topics={topics}
                description={description}
                createdAt={createdAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewAgenda;
