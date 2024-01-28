import React from "react";
import Modal from "./Modal";

const Form = ({ closeForm }) => {
  return (
    <Modal>
      <>
        <div className="col-span-8 rounded-lg px-10 py-20">
          <form action="" className="">
            <h1 className="md:text-2xl text-center  text-md font-bold text-gray-700 pt-5 pb-8">
              Hello, Friend!
            </h1>
            <div className="">
              <input
                type="text"
                placeholder="Enter your name"
                className="font-[Ubuntu] font-sembold shadow rounded-full py-1 pl-3 lg:pr-40 text-[#a2a7af] text-lg border-none outline-none "
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-[Ubuntu] font-sembold shadow rounded-full py-1 pl-3 lg:pr-40 text-[#a2a7af] text-lg border-none outline-none  "
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Enter your password"
                className="font-[Ubuntu] font-bold shadow rounded-full py-1 pl-3 lg:pr-40  placeholder-gray-500 text-lg border-none outline-none "
              />
            </div>
          </form>
          <div className="">
            <h2 className="font-bold text-gray-700 mt-5">Gender</h2>
            <div className="flex  space-x-5 ">
              <div className="mt-2 flex  flex-col items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="radio"
                />
                <div className="">Male</div>
              </div>
              <div className="mt-2 flex  flex-col items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="radio"
                />
                <div className="">Female</div>
              </div>
              <div className="mt-2 flex  flex-col items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500"
                  name="radio"
                />
                <div className="">Robot</div>
              </div>
            </div>

            <div className="mt-5">
              <input
                type="checkbox"
                className="form-checkbox text-green-500 w-4 h-4"
              />
              <span className="ml-2">
                I've read and agree to
                <span className="text-green-900">Terms and Conditions</span>
              </span>
            </div>
            <div className="flex space-x-3 mt-10">
              <div className="w-[100px] lg:w-[160px]  ">
                <button className="transition bg-slate-700 hover:bg-slate-600 hover:border-slate-600 text-white font-bold rounded-full w-full py-3 lg:px-[50px] ">
                  Sign up
                </button>
              </div>
              <div className="w-[100px] lg:w-[160px]">
                <button
                  className=" transition bg-red-700 hover:bg-red-600 hover:border-red-600 text-white font-bold rounded-full w-full py-3 lg:px-[50px] "
                  onClick={() => {
                    {
                      closeForm(false);
                    }
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gradient-to-t from-slate-800  to-slate-400   rounded-tr-lg rounded-br-lg  flex justify-center items-center">
          <div className="w-36 ">
            <h1 className="text-white font-bold text-center text-2xl">
              Good to see You!
            </h1>
            <p className="text-center text-white font-medium mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default Form;
