import React, { useState } from "react";
import FormField from "./FormField";
import { LuPlusSquare } from "react-icons/lu";

const CreateAgenda = () => {
  const [topic, setTopic] = useState("");
  const [allTopics, setAllTopics] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    label: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleAddTopic = () => {
    setAllTopics([...allTopics, topic]);
  };
  console.log(topic);
  console.log(allTopics, "all");
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 font-baijamjuree">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center text-3xl font-bold text-rose-600 sm:text-3xl">
            Create Agenda
          </h1>
          <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <FormField
              label="Title"
              name="title"
              placeholder="Please Enter Title"
              type="text"
              value={formData?.title}
              handleChange={handleChange}
            />
            <FormField
              label="Label"
              name="label"
              placeholder="Please Enter Label"
              type="text"
              value={formData?.label}
              handleChange={handleChange}
            />
            <div className="relative">
              <FormField
                label="Topic"
                name="topic"
                placeholder="Please Enter Topic"
                type="text"
                value={topic}
                handleChange={handleChangeTopic}
              />

              <LuPlusSquare
                size={30}
                className="text-rose-600 absolute right-4 top-8 cursor-pointer"
                onClick={handleAddTopic}
              />
            </div>

            <FormField
              label="Category"
              name="category"
              placeholder="Please Select Category"
              type="select"
              value={formData?.category}
              handleChange={handleChange}
              options={[
                { label: "one", value: "1" },
                { label: "two", value: "2" },
              ]}
            />
            <FormField
              label="Description"
              name="description"
              placeholder="Please Enter Description"
              type="description"
              value={formData?.description}
              handleChange={handleChange}
            />

            <div className="flex justify-end gap-4">
              <button className="block md:w-1/4   rounded px-8 py-3 text-base font-bold text-gray-600 shadow hover:text-rose-500 focus:outline-none focus:ring active:text-rose-500">
                Cancel
              </button>
              <button className="block  md:w-1/4  rounded-lg bg-rose-600 px-8 py-3 text-base font-bold text-white hover:bg-rose-500 focus:outline-none focus:ring active:bg-rose-500">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAgenda;
