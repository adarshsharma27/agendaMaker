import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-gray-50 font-baijamjuree">
        <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-full lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-rose-500 sm:block">
                {" "}
                Increase Conversion.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea illo tenetur fuga ducimus numquam ea!!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-rose-600 px-12 py-3 text-base font-bold text-white shadow hover:bg-rose-500 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-base font-bold text-gray-600 shadow hover:text-rose-500 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
