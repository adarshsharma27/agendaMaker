import React, { useState } from "react";
import FormField from "./FormField";
import { LuMinusSquare, LuPlusSquare } from "react-icons/lu";
import { z } from "zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import conf, { ID, databases } from "../config/config";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { categoryOptions } from "../utils/categoryOptions";
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnBulletList,
  BtnClearFormatting,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  Separator,
} from "react-simple-wysiwyg";
const CreateAgendaSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title is too short" })
    .max(80, { message: "Title is too long" }),
  label: z
    .string()
    .min(5, { message: "Title is too short" })
    .max(20, { message: "Title is too long" }),
  category: z.string().min(1, "Please select a category"),
  description: z
    .string()
    .min(50, { message: "Description is too short" })
    .max(400, { message: "Description is too long" }),
  topics: z
    .array(
      z.object({
        name: z.string().min(1, { message: "Topic name is required" }),
      })
    )
    .min(1, { message: "At least one topic is required" }),
});
const CreateAgenda = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("simple text");

  function onChange(e) {
    setValue(e.target.value);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      title: "",
      label: "",
      category: "",
      topics: [{ name: "" }],
      description: "",
    },

    resolver: zodResolver(CreateAgendaSchema),
  });

  // Watch the input values

  const isCreateDisabled =
    !watch("title") ||
    !watch("label") ||
    !watch("category") ||
    !watch("description");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "topics",
  });
  const handleCreateAgenda = async (data) => {
    const { title, label, category, topics, description } = data;
    const createdAt = moment(new Date()).format("MMM Do YYYY, h:mm:ss a");
    const topicsArray = topics.map((topic) => topic.name);
    const payload = {
      title,
      label,
      category,
      description,
      topics: topicsArray,
      createdAt,
    };
    try {
      await databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        ID.unique(),
        payload
      );
      console.log("Agenda Created Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container px-6 py-12 mx-auto font-baijamjuree">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center text-3xl pt-4 font-bold text-rose-600 sm:text-3xl">
            Create Agenda
          </h1>
          <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(handleCreateAgenda)}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <FormField
                  label="Title"
                  name="title"
                  placeholder="Please Enter Title"
                  type="text"
                  register={register}
                  error={errors.title}
                />
                <FormField
                  label="Label"
                  name="label"
                  placeholder="Please Enter Label"
                  type="text"
                  register={register}
                  error={errors.label}
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
              <div>
                <label
                  className="font-semibold text-gray-500 font-baijamjuree"
                  htmlFor="topics"
                >
                  Please Enter Topic
                </label>

                {fields.map((field, index) => (
                  <div key={field.id} className="relative">
                    <input
                      className="w-full rounded-lg text-gray-600 border-gray-200 p-4 pe-12 text-base font-baijamjuree shadow-sm"
                      placeholder="Please Enter Topic"
                      type="text"
                      {...register(`topics.${index}.name`)}
                    />
                    {fields.length > 1 && (
                      <LuMinusSquare
                        size={24}
                        className="text-blue-500 absolute right-4 top-4 cursor-pointer"
                        onClick={() => remove(index)}
                      />
                    )}
                    {errors?.topics && (
                      <span className="text-red-400 py-2 font-semibold">
                        {errors?.topics[index]?.name?.message}
                      </span>
                    )}
                  </div>
                ))}
                <div className="py-2">
                  <button
                    type="button"
                    className="flex items-center gap-1 md:w-1/6    rounded px-6 py-3 text-base font-bold text-gray-600 shadow hover:text-rose-500 focus:outline-none focus:ring active:text-rose-500"
                    onClick={() => append({ name: "" })}
                  >
                    <LuPlusSquare
                      size={20}
                      className="text-rose-600  cursor-pointer"
                    />
                    Add Topics
                  </button>
                </div>
              </div>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <EditorProvider>
                    <Editor value={field.value} onChange={field.onChange}>
                      <Toolbar>
                        <BtnUndo />
                        <BtnRedo />
                        <Separator />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnClearFormatting />

                        <Separator />
                      </Toolbar>
                    </Editor>
                  </EditorProvider>
                )}
              />

              {errors?.description && (
                <span className="text-red-400 py-2 font-semibold">
                  {errors?.description?.message}
                </span>
              )}


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
                    errors.description ||
                    errors.topics
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
