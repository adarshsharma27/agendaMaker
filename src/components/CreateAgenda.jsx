import React, { useState } from "react";
import FormField from "./FormField";
import { LuPlusSquare } from "react-icons/lu";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import conf, { ID, account, databases } from "../config/config";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { categoryOptions } from "../utils/categoryOptions";
const CreateAgendaSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title is too short" })
    .max(80, { message: "Title is too long" }),
  label: z
    .string()
    .min(5, { message: "Title is too short" })
    .max(20, { message: "Title is too long" }),
  category: z.string().nonempty("Please select a category"),
  description: z
    .string()
    .min(50, { message: "Description is too short" })
    .max(200, { message: "Description is too long" }),
});
const CreateAgenda = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(CreateAgendaSchema) });

  // Watch the input values

  const isCreateDisabled =
    !watch("title") ||
    !watch("label") ||
    !watch("category") ||
    !watch("description");
  const handleCreateAgenda = async (data) => {
    const { email, password } = data;
  };
  const [topic, setTopic] = useState("");
  const [allTopics, setAllTopics] = useState([]);

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
            <form onSubmit={handleSubmit(handleCreateAgenda)}>
              <FormField
                label="Title"
                name="title"
                placeholder="Please Enter Title"
                type="text"
                // value={formData?.title}
                // handleChange={handleChange}
                register={register}
                error={errors.title}
              />
              <FormField
                label="Label"
                name="label"
                placeholder="Please Enter Label"
                type="text"
                // value={formData?.label}
                // handleChange={handleChange}
                register={register}
                error={errors.label}
              />
              <div className="relative">
                <FormField
                  label="Topic"
                  name="topic"
                  placeholder="Please Enter Topic"
                  type="text"
                  // value={topic}
                  // handleChange={handleChangeTopic}
                  register={register}
                  error={errors.topic}
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
                register={register}
                error={errors.category}
                options={categoryOptions}
              />
              <FormField
                label="Description"
                name="description"
                placeholder="Please Enter Description"
                type="description"
                register={register}
                error={errors.description}
              />

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="block md:w-1/4   rounded px-8 py-3 text-base font-bold text-gray-600 shadow hover:text-rose-500 focus:outline-none focus:ring active:text-rose-500"
                  onClick={() => reset()}
                >
                  Cancel
                </button>
                <button
                  type="sumit"
                  className="block  md:w-1/4  rounded-lg bg-rose-600 px-8 py-3 text-base font-bold text-white hover:bg-rose-500 focus:outline-none focus:ring active:bg-rose-500 disabled:bg-rose-400 disabled:cursor-not-allowed"
                  disabled={
                    isCreateDisabled ||
                    errors.title ||
                    errors.label ||
                    errors.category ||
                    errors.description
                  }
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAgenda;
