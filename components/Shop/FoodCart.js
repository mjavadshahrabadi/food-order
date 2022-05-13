import Image from "next/image";
import { FaStar, FaRegHeart, FaShoppingBasket, FaEye } from "react-icons/fa";

const FoodCart = (props) => {
  const { image, title, price, off, off_price, score } = props;
  return (
    <li className="bg-white border border-gray-100 rounded-xl shadow-md relative cursor-pointer hover:shadow-orange-200 transition-all duration-500 ease-out pt-4">
      {/* image item */}
      <div className="flex flex-col items-center">
        <div className="w-[70%] h-[180px] relative flex ">
          <Image src={image} alt={title} layout="fill" />
        </div>
      </div>
      {/* detail item */}
      <div className="pt-2 px-4">
        {/* name - score */}
        <div className="flex items-center justify-between">
          <h4 className="text-[14px] text-gray-500 font-semibold">{title}</h4>
          <p className="flex items-center text-sm text-gray-500">
            <span className="mt-0.5">{score}</span>
            <span>
              <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
            </span>
          </p>
        </div>
        {/* price */}
        <div className="pt-2">
          {off_price ? (
            <p className="text-sm text-gray-500">
              <span className="font-semibold">قیمت : </span>
              <s>{price} </s>
              <span>{off_price} </span>
              تومان
            </p>
          ) : (
            <p>
              <span className="font-semibold">قیمت : </span>
              <span>{price} </span>
              تومان
            </p>
          )}
        </div>
        <div
          className="flex items-center mt-4 justify-center space-x-2"
          dir="ltr"
        >
          <button className="p-2 bg-gray-50 rounded-tr-md rounded-tl-md hover:text-red-500 text-gray-500 transition-all duration-300 ease-out">
            <FaRegHeart className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-50 rounded-tr-md rounded-tl-md hover:text-orange-400 text-gray-500 transition-all duration-300 ease-out">
            <FaShoppingBasket className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-50 rounded-tr-md rounded-tl-md hover:text-orange-400 text-gray-500 transition-all duration-300 ease-out">
            <FaEye className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Offer Badge */}
      <span className="absolute top-4 right-4 text-sm bg-[#ff8e28] bg-opacity-20 rounded-md w-8 h-8 text-[#ff8e28] font-semibold flex items-center justify-center">
        %{off}
      </span>
    </li>
  );
};
export default FoodCart;
