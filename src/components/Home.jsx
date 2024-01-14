import React, { useState } from "react";
import Sidebar from "./Sidebar";
import List from "./List";
import Data from "../Data";

const Home = () => {
  const [filteredData, setFilteredData] = useState(Data);

  const handleFilter = (gender) => {
    if (gender === "all") {
      setFilteredData(Data);
    } else {
      const filteredList = Data.filter((item) => item.gender === gender);
      setFilteredData(filteredList);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 bg-[#eae9e5]  ">
        <div className="col-span-3 sticky top-0 h-screen">
          <Sidebar handleFilter={handleFilter} />
        </div>
        <div className="col-span-9 overflow-y-auto h-full  w-full  py-32 ">
          <List data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
