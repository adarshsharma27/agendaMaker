import React, { useState, useEffect } from "react";
import conf, { databases } from "../config/config";
import { LuTags } from "react-icons/lu";

const SingleAgenda = ({ id }) => {
  console.log(id, "single");
  const [agenda, setSingleAgenda] = useState([]);
  useEffect(() => {
    const getAgenda = async () => {
      try {
        const resp = await databases.getDocument(
          conf.databaseId,
          conf.collectionId,
          id
        );

        setSingleAgenda(resp);
      } catch (error) {}
    };
    getAgenda();
  }, [id]);
  console.log(agenda?.topics);
  return (
    <>
      <article className="py-4 font-baijamjuree">
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

        <h3 className="mt-2 text-lg font-bold text-gray-900">
          {agenda?.title}
        </h3>
        <div className="flex gap-2 mt-2">
          <span className="inline-flex items-center justify-center rounded bg-rose-500 px-2.5 py-0.5 text-white">
            <p className="whitespace-nowrap text-base">{agenda?.label}</p>
          </span>
          <span className="inline-flex  items-center justify-center rounded bg-slate-200 px-2.5 py-0.5 text-rose-600">
            <p className="whitespace-nowrap text-base">{agenda?.category}</p>
          </span>
        </div>
        <div className="mt-2">
          {agenda?.topics?.map((topic) => (
            <div className="flex items-center justify-start pl-2 mt-1 gap-1 rounded py-3 text-base font-bold text-gray-600  shadow hover:text-rose-500 hover:cursor-pointer">
              <LuTags size={22} className="text-rose-600" />
              <span>{topic}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-base text-gray-500 "  dangerouslySetInnerHTML={{ __html: agenda?.description}}></p>
        <p className="mt-2  text-base   text-gray-500">
          Last Updated :{" "}
          <span className="font-semibold ">{agenda?.createdAt}</span>
        </p>
      </article>
    </>
  );
};

export default SingleAgenda;
