import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

const CheckoutItem = (props) => {
  const { name, count, price, image } = props;
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        {/* thumbnail */}
        <div className="w-[70px] h-[70px] relative">
          <Image src={image} alt={name} layout="fill" />
        </div>
        {/* detail */}
        <div className="flex flex-col mr-2">
          <h4 className="text-[#ff8e28] text-[15px] font-semibold">{name}</h4>
          {/* <span className="bg-[#ff8e28] text-[#ff8e28] bg-opacity-20 rounded-md p-1 text-[14px]">
          {count} عدد
        </span> */}
          <p className="text-[15px] text-gray-600 font-semibold">
            قیمت: {price}
          </p>
        </div>
      </div>
      {/* increase or decrease */}
      <div className="md:flex items-center space-x-2 hidden " dir="ltr">
        <div className="border p-1 rounded-md cursor-pointer">
          <FaMinus className="w-4 h-4 text-[#ff8e28]" />
        </div>
        <p className="text-gray-600 font-semibold">{count}</p>
        <div className="border p-1 rounded-md cursor-pointer">
          <FaPlus className="w-4 h-4 text-[#ff8e28]" />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center">
        <p className="text-gray-600 text-[15px] font-semibold ml-2">
          ۹۰۰۰۰ تومان
        </p>
        <p className="bg-[#ff8e28] bg-opacity-20 text-[#ff8e28] rounded-md px-2 py-1">
          x{count}
        </p>
      </div>
    </li>
  );
};
export default CheckoutItem;
