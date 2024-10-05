import React, { useEffect, useState } from "react";
import AgendaCard from "./AgendaCard";
import conf, { databases } from "../config/config";

const ViewAgenda = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [allAgendas, setAllAgendas] = useState([]);
  const getAllAgendas = async () => {
    try {
      const resp = await databases.listDocuments(
        conf.databaseId,
        conf.collectionId
      );

      setAllAgendas(resp?.documents);
    } catch (error) {}
  };
  useEffect(() => {
    getAllAgendas();
  }, [isViewModalOpen, isUpdateModalOpen, isDeleteModalOpen]);
  return (
    <>
      <div className="container px-6 py-12 mx-auto font-baijamjuree">
        <div
          className={`grid grid-cols-1  gap-4 py-4 sm:py-0 ${
            (allAgendas?.length === 1 && `md:grid-cols-2 lg:grid-cols-1`) ||
            (allAgendas?.length === 2 && `md:grid-cols-2 lg:grid-cols-2`) ||
            (allAgendas?.length >= 3 && `md:grid-cols-3 lg:grid-cols-3`)
          } `}
        >
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
                getAllAgendas={getAllAgendas}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewAgenda;
