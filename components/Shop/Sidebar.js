import { FaSearch } from "react-icons/fa";
import PriceFilter from "./PriceFilter";
import PopularFoodList from "./PopularFoodList";

const Sidebar = () => {
  return (
    <div className="md:mt-[75px] flex flex-col space-y-6">
      {/* search box */}
      <div className="border border-gray-100 bg-white rounded-md py-5 px-8 flex flex-col shadow-md">
        <h3 className="text-[15px] font-semibold text-gray-500">
          دنبال چی میگردی ؟
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="عنوان جست و جو"
            className="bg-gray-100 rounded-md py-3 px-4 text-[13px] text-gray-500 mt-2 focus:outline-0 w-full"
          />
          <span>
            <FaSearch className="w-3 h-3 text-gray-400 absolute top-6 left-3 cursor-pointer" />
          </span>
        </div>
      </div>
      {/* category */}
      <div className="border border-gray-100 bg-white rounded-md py-5 px-8 flex flex-col shadow-md">
        <h3 className="text-[15px] font-semibold text-gray-500">
          دسته بندی ها
        </h3>
        <ul className="flex flex-col mt-4">
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            برگر
          </li>
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            پیتزا
          </li>
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            ساندویچ
          </li>
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            غذای سنتی
          </li>
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            غذای دریایی
          </li>
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            سوپ
          </li>
          <li className="text-gray-400 text-[14px] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] py-2 rounded-md hover:text-center transition-all duration-300 ease-out">
            سالاد و پیش غذا
          </li>
        </ul>
      </div>
      {/* price filter */}
      <div className="border border-gray-100 bg-white rounded-md py-5 px-8 flex flex-col shadow-md ">
        <h3 className="text-[15px] font-semibold text-gray-500">
          فیلتر بر اساس قیمت
        </h3>
        <PriceFilter />
      </div>
      {/* popular food */}
      <div className="border border-gray-100 bg-white rounded-md py-5 px-8 flex flex-col shadow-md">
        <h3 className="text-[15px] font-semibold text-gray-500">
          پرفروش ترین ها
        </h3>
        <PopularFoodList />
      </div>
    </div>
  );
};

export default Sidebar;
