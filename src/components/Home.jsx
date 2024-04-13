import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { userImg } from "../assets/portfolio";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-slate-900 to-gray-800"
    >
      <div className="flex flex-col items-center justify-around h-full mx-auto md:flex-row">
        {/* profile info div */}
        <div className=" rounded-xl py-5 flex flex-col items-baseline gap-4 mt-20 px-5 mx-auto">
          <h1 className="text-slate-100 text-6xl ">Full Stack Maven</h1>
          <p className="text-pretty text-base max-w-md text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            tempore totam placeat maiores nam harum molestiae saepe quos
            quisquam numquam. Accusantium totam ipsam consectetur alias enim
            consequatur repellat, tempore culpa.
          </p>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="group flex items-center w-fit p-2 rounded-xl text-slate-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:cursor-pointer"
          >
            <span className="font-semibold">Portfolio</span>
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </Link>
        </div>
        {/** Image */}
        <img
          className="h-[50vh] mx-auto"
          width={400}
          src={userImg}
          alt="user profile "
        />
      </div>
    </div>
  );
};

export default Home;
