import Image from "next/image";
import { FaStar, FaRegHeart, FaShoppingBasket, FaEye } from "react-icons/fa";

const FoodCart = (props) => {
  const { image, title, score, price, details, off, off_price } = props;

  const truncateDetail = (deatil) => {
    return deatil.substring(0, 35) + " " + "...";
  };

  return (
    <li className="bg-white border border-slate-100 shadow-md rounded-xl relative cursor-pointer hover:scale-105 duration-300 ease-out w-10/12 md:w-auto">
      {/* cart Image - header */}
      <div className="w-full h-[300px] md:w-[300px] md:h-[250px] relative rounded-tr-lg rounded-tl-lg overflow-hidden">
        <Image src={image} alt={title} layout="fill" />
      </div>
      {/* cart body - description */}
      <div className="py-3 px-4 overflow-hidden">
        {/* title - score */}
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-gray-500 font-semibold">{title}</p>
          <p className="flex items-center text-sm text-gray-500">
            <span className="pl-1 mt-1">{score}</span>
            <FaStar className="w-4 h-4 text-[#F8CB2E]" />
          </p>
        </div>
        <p className="text-[14px] text-gray-500 pt-2">
          {truncateDetail(details)}
        </p>
        <div className="flex items-center pt-2">
          {off && (
            <span className="flex bg-[#ff8e28] bg-opacity-20 text-[#ff8328]  h-6 rounded-md text-sm justify-center items-center px-0.5 ml-1 font-semibold">
              %{off}
            </span>
          )}
          <p className="text-sm text-gray-500">
            قیمت:
            {off_price ? (
              <>
                <s className="text-sm text-gray-500 pr-1">{price} </s>
                <span className="text-sm text-gray-500 pr-1">{off_price}</span>
                <span className="text-sm text-gray-500 pr-1">تومان</span>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-500 pr-1">{price}</span>
                <span className="text-sm text-gray-500 pr-1">تومان</span>
              </>
            )}
          </p>
        </div>
      </div>
      {/* add favorite - add to bascket - see detail part */}
      <ul className="flex justify-center flex-row-reverse space-x-8 mt-1 bg-gray-50 w-full py-2 ">
        <li className="cursor-pointer">
          <FaRegHeart
            className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-300 ease-out"
            title="add to favorite"
          />
        </li>
        <li className="cursor-pointer">
          <FaShoppingBasket
            className="w-5 h-5 text-gray-400 hover:text-[#ff8e28] transition-colors duration-300 ease-out"
            title="add to basket"
          />
        </li>
        <li className="cursor-pointer">
          <FaEye
            className="w-5 h-5 text-gray-400 hover:text-[#ff8e28] transition-colors duration-300 ease-out"
            title="show detail"
          />
        </li>
      </ul>
    </li>
  );
};
export default FoodCart;
