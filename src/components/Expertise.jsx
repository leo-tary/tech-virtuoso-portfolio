import React from "react";
import { experience } from "../data/content";

const Expertise = () => {
  return (
    <div
      name="expertise"
      className="h-auto w-full bg-gradient-to-b from-gray-800 via-slate-900 to-black text-white"
    >
      <div className="flex flex-col space-y-5 py-5 items-baseline max-w-7xl mx-auto px-4 lg:px-8">
        <h1 className="text-4xl">Expertise</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="w-full grid grid-cols-2 gap-8 sm:grid-cols-3 text-center py-8">
          {experience.map(({ id, style, title, image }) => {
            return (
              <div
                key={id}
                className={`shadow-md py-2 rounded-lg hover:scale-110 duration-500 ${style}`}
              >
                <img src={image} alt="" className="w-32 mx-auto" />
                <p className="mt-5 px-10">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
