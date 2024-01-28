import React from "react";

const Modal = ({ children }) => {
  return (
    <div>
      <div className=" w-full  flex items-center justify-center right-0 left-0 bottom-0 top-0 backdrop-blur-lg absolute  z-10 ">
        <div className="grid grid-cols-12 mx-auto rounded-lg bg-[#ebe9e9] shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
