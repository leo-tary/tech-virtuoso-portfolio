import React from "react";

import { portfolios } from "../data/content";
const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="h-auto w-full bg-gradient-to-b from-black via-slate-900 to-gray-800 pb-12 lg:pb-28"
    >
      <div className="flex flex-col items-baseline gap-4 text-white mx-auto px-4 lg:px-8 md:max-w-7xl sm:max-w-2xl">
        <h1 className="text-4xl">Portfolio</h1>
        <p>Checkout some of my creations</p>
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-8 sm:px-2">
          {portfolios.map((portfolio) => {
            return (
              <div
                key={portfolio.id}
                className="shadow-md shadow-gray-600 rounded-lg md:w-2/3"
              >
                <img
                  src={portfolio.image}
                  alt=""
                  className="rounded-md hover:scale-105 duration-500 cursor-pointer"
                />
                <div className="flex justify-around m-4">
                  <button>Demo</button>
                  <button>Code</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
