import React from "react";
import { LuPlusSquare } from "react-icons/lu";
import FormField from "./FormField";

const UpdateAgenda = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 font-baijamjuree">
        <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
          Update Agenda
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <FormField
            label="Title"
            name="title"
            placeholder="Please Enter Title"
            type="text"
            // value={formData?.title}
            // handleChange={handleChange}
          />
          <FormField
            label="Label"
            name="label"
            placeholder="Please Enter Label"
            type="text"
            // value={formData?.label}
            // handleChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="relative">
            <FormField
              label="Topic"
              name="topic"
              placeholder="Please Enter Topic"
              type="text"
              // value={topic}
              // handleChange={handleChangeTopic}
            />

            <LuPlusSquare
              size={30}
              className="text-rose-600 absolute right-4 top-8 cursor-pointer"
              // onClick={handleAddTopic}
            />
          </div>

          <FormField
            label="Category"
            name="category"
            placeholder="Please Select Category"
            type="select"
            // value={formData?.category}
            // handleChange={handleChange}
            // options={[
            //   { label: "one", value: "1" },
            //   { label: "two", value: "2" },
            // ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <FormField
            label="Description"
            name="description"
            placeholder="Please Enter Description"
            type="description"
            // value={formData?.description}
            // handleChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default UpdateAgenda;
