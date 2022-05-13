import React from "react";
import Filter from "./Filter";
import FoodList from "./FoodList";
import Sidebar from "./Sidebar";
import Pagination from "../Blog/Pagination";

const Main = () => {
  return (
    <section className="md:max-w-7xl md:mx-auto">
      <div className="flex items-start mt-32 flex-col md:flex-row-reverse">
        {/* food Items - filter header */}
        <div className="w-full md:w-4/5 md:mr-10">
          <Filter />
          <FoodList />
          <Pagination />
        </div>
        {/* sidebar */}
        <div className="w-full md:w-1/5 px-8 md:px-0 mb-10 md:mb-0">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};
export default Main;
