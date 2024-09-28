import React from "react";

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  handleChange,
  icon,
  options = [],
  register,
  error,
}) => {
  console.log(options);
  return (
    <>
      {type === "description" ? (
        <div>
          <label
            className="font-semibold text-gray-500 font-baijamjuree"
            htmlFor={name}
          >
            {label}
          </label>

          <div className="relative">
            <textarea
              name={name}
              type={type}
              className="w-full h-36 rounded-lg text-gray-600 border-gray-200 p-4 pe-12 text-base font-baijamjuree shadow-sm"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {icon}
            </span>
          </div>
        </div>
      ) : type === "select" ? (
        <div>
          <label
            className="font-semibold text-gray-500 font-baijamjuree"
            htmlFor={name}
          >
            {label}
          </label>
          <select
            name={name}
            type={type}
            className="w-full rounded-lg text-gray-400 border-gray-200 p-4 pe-12 text-base font-baijamjuree shadow-sm"
            value={value}
            onChange={handleChange}
          >
            <option value="">{placeholder}</option>
            {options?.map((option) => (
              <option className="" value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <label
            className="font-semibold text-gray-500 font-baijamjuree"
            htmlFor={name}
          >
            {label}
          </label>

          <div className="relative">
            <input
              name={name}
              type={type}
              className="w-full rounded-lg text-gray-600 border-gray-200 p-4 pe-12 text-base font-baijamjuree shadow-sm"
              placeholder={placeholder}
              {...register(name)}
            />
            {error && (
              <span className="text-red-400 py-2 font-semibold">
                {error.message}
              </span>
            )}
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              {icon}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default FormField;
