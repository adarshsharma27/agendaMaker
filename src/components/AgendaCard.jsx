import React from "react";
import { LuPenSquare, LuTrash, LuView } from "react-icons/lu";

const AgendaCard = () => {
  return (
    <>
      <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 font-baijamjuree">
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

        <h3 className="mt-0.5 text-lg font-bold text-gray-900">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h3>

        <p className="mt-2 line-clamp-3 text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur
        </p>
        <div className="flex justify-end gap-2">
          <LuView size={32} className="text-slate-500 cursor-pointer" />
          <LuPenSquare size={32} className="text-sky-600 cursor-pointer" />
          <LuTrash size={32} className="text-red-600 cursor-pointer" />
        </div>
      </article>
    </>
  );
};

export default AgendaCard;
