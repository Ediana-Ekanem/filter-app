import { IoIosPeople } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useState } from "react";
import Form from "./Form";

const Sidebar = ({ handleFilter }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="bg-[#334155] h-screen ">
      <div className=" flex flex-col mx-auto justify-center py-3">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-[Aguafina] font-bold md:text-8xl text-4xl text-white  ">
            EE
          </h1>
          <div className="border-b-2 border-white md:w-[220px] w-[70px]  "></div>
        </div>

        <div
          className="w-14 md:w-24 flex justify-center items-center space-x-3 mx-auto rounded hover:bg-gray-50 hover:bg-opacity-10 transition md:pr-20  pr-9 pl-4  md:pl-10  py-1 mt-5"
          onClick={() => handleFilter("all")}
        >
          <span className="text-white text-3xl flex justify-center items-center ml-5 ">
            <IoIosPeople />
          </span>
          <button className="font-[Ubuntu] text-white font-bold border-one outline-none hidden md:block">
            All
          </button>
        </div>
        <div
          className="flex md:w-40 justify-center items-center space-x-3 mx-auto rounded hover:bg-gray-50 hover:bg-opacity-10 transition  pl-3 pr-3 md:pl-2 md:pr-[25px] py-1 mt-5"
          onClick={() => handleFilter("male")}
        >
          <span className="text-white text-3xl">
            <FcBusinessman />
          </span>
          <button className="font-[Ubuntu] text-white font-bold hidden md:block">
            Male Folks
          </button>
        </div>
        <div
          className="flex md:w-[170px] justify-center items-center space-x-3 mx-auto rounded hover:bg-gray-50 hover:bg-opacity-10 transition py-1  pl-3 pr-3 md:pl-3 md:pr-[20px] mt-5"
          onClick={() => handleFilter("female")}
        >
          <span className="text-white text-3xl">
            <FcBusinesswoman />
          </span>
          <button className="font-[Ubuntu] text-white font-bold hidden md:block">
            Female Folks
          </button>
        </div>
        <div
          className="flex w-15 justify-center items-center space-x-4 mx-auto rounded-lg bg-green-600 hover:bg-green-500 transition py-1.5 pl-5 pr-8   mt-5"
          onClick={() => {
            {
              setShowForm(true);
            }
          }}
        >
          <span className="text-white text-3xl">
            <BsBoxArrowInRight />
          </span>
          <button className=" font-[Ubuntu] text-white font-bold hidden md:block">
            Sign Up
          </button>
        </div>
      </div>
      {showForm && <Form closeForm={setShowForm} />}
    </div>
  );
};

export default Sidebar;
