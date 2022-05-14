import Image from "next/image";
import { FaStar, FaShoppingBasket, FaEye, FaHeart } from "react-icons/fa";

const RelatedProducts = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 place-items-center mt-8 mb-10 mx-5 md:mx-0">
      <li className="bg-white border border-gray-100 rounded-md shadow-md w-full md:w-auto">
        {/* image */}
        <div className="w-full md:w-[300px] h-[300px] relative">
          <Image
            src="/images/food/food_2.png"
            alt="related-food-1"
            layout="fill"
          />
        </div>
        {/* detail */}
        <div className="my-4 px-4">
          {/* name - score */}
          <div className="flex items-center  justify-between">
            <h3 className="font-semibold text-gray-600">نام غذا</h3>
            <p className="flex items-center text-sm text-gray-600 ">
              <span className="ml-1">۷.۴/۱۰</span>
              <span>
                <FaStar className="w-4 h-4 text-yellow-400" />
              </span>
            </p>
          </div>
          {/* price detail */}
          <p className="mt-2 text-sm text-gray-500">
            <span>قیمت: </span>
            <span className="mr-1 text-[#ff8e28] ml-1">۴۵۰۰۰</span>
            <s>۷۸۰۰۰</s>
            <span className="text-[#ff8e28]">تومان</span>
          </p>
        </div>
        {/* see product - add to favorite - add to basket */}
        <div className="flex items-center justify-center space-x-4" dir="ltr">
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaEye className="w-5 h-5 text-gray-500 hover:text-[#ff8e28] transition-all duration-300 ease-out" />
          </div>
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaShoppingBasket className="w-5 h-5 text-gray-500 hover:text-[#ff8e28] transition-all duration-300 ease-out" />
          </div>
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaHeart className="w-5 h-5 text-gray-500 hover:text-red-500 transition-all duration-300 ease-out" />
          </div>
        </div>
      </li>
      <li className="bg-white border border-gray-100 rounded-md shadow-md w-full md:w-auto">
        {/* image */}
        <div className="w-full md:w-[300px] h-[300px] relative">
          <Image
            src="/images/food/food_6.png"
            alt="related-food-2"
            layout="fill"
          />
        </div>
        {/* detail */}
        <div className="my-4 px-4">
          {/* name - score */}
          <div className="flex items-center  justify-between">
            <h3 className="font-semibold text-gray-600">نام غذا</h3>
            <p className="flex items-center text-sm text-gray-600 ">
              <span className="ml-1">۷.۴/۱۰</span>
              <span>
                <FaStar className="w-4 h-4 text-yellow-400" />
              </span>
            </p>
          </div>
          {/* price detail */}
          <p className="mt-2 text-sm text-gray-500">
            <span>قیمت: </span>
            <span className="mr-1 text-[#ff8e28] ml-1">۴۵۰۰۰</span>
            <s>۷۸۰۰۰</s>
            <span className="text-[#ff8e28]">تومان</span>
          </p>
        </div>
        {/* see product - add to favorite - add to basket */}
        <div className="flex items-center justify-center space-x-4" dir="ltr">
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaEye className="w-5 h-5 text-gray-500 hover:text-[#ff8e28] transition-all duration-300 ease-out" />
          </div>
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaShoppingBasket className="w-5 h-5 text-gray-500 hover:text-[#ff8e28] transition-all duration-300 ease-out" />
          </div>
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaHeart className="w-5 h-5 text-gray-500 hover:text-red-500 transition-all duration-300 ease-out" />
          </div>
        </div>
      </li>
      <li className="bg-white border border-gray-100 rounded-md shadow-md w-full md:w-auto">
        {/* image */}
        <div className="w-full md:w-[300px] h-[300px] relative">
          <Image
            src="/images/food/food_4.png"
            alt="related-food-3"
            layout="fill"
          />
        </div>
        {/* detail */}
        <div className="my-4 px-4">
          {/* name - score */}
          <div className="flex items-center  justify-between">
            <h3 className="font-semibold text-gray-600">نام غذا</h3>
            <p className="flex items-center text-sm text-gray-600 ">
              <span className="ml-1">۷.۴/۱۰</span>
              <span>
                <FaStar className="w-4 h-4 text-yellow-400" />
              </span>
            </p>
          </div>
          {/* price detail */}
          <p className="mt-2 text-gray-500">
            <span>قیمت: </span>
            <span className="mr-1 text-[#ff8e28] ml-1">۴۵۰۰۰</span>
            <s>۷۸۰۰۰</s>
            <span className="text-[#ff8e28]">تومان</span>
          </p>
        </div>
        {/* see product - add to favorite - add to basket */}
        <div className="flex items-center justify-center space-x-4" dir="ltr">
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaEye className="w-5 h-5 text-gray-500 hover:text-[#ff8e28] transition-all duration-300 ease-out" />
          </div>
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaShoppingBasket className="w-5 h-5 text-gray-500 hover:text-[#ff8e28] transition-all duration-300 ease-out" />
          </div>
          <div className="bg-gray-200 p-2 rounded-tr-md rounded-tl-md cursor-pointer">
            <FaHeart className="w-5 h-5 text-gray-500 hover:text-red-500 transition-all duration-300 ease-out" />
          </div>
        </div>
      </li>
    </ul>
  );
};
export default RelatedProducts;
