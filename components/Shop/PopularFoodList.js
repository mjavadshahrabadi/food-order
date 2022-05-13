import Image from "next/image";
import { FaStar } from "react-icons/fa";
const PopularFoodList = () => {
  return (
    <ul className="mt-4">
      <li>
        <div className="flex items-center">
          {/* thumnail */}
          <div className="w-[75px] h-[75px] relative">
            <Image
              src="/images/sidebar-popular-food/food_1.png"
              alt="food_1"
              layout="fill"
            />
          </div>
          {/* detial */}
          <div className="flex flex-col mr-1 space-y-1">
            <h3 className="text-[13px] text-gray-400 font-semibold">نام غذا</h3>

            <h4 className="text-[13px] text-gray-400">۵۲۴۰۰ تومان</h4>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          {/* thumnail */}
          <div className="w-[75px] h-[75px] relative">
            <Image
              src="/images/sidebar-popular-food/food_3.png"
              alt="food_2"
              layout="fill"
            />
          </div>
          {/* detial */}
          <div className="flex flex-col mr-1 space-y-1">
            <h3 className="text-[13px] text-gray-400 font-semibold">نام غذا</h3>

            <h4 className="text-[13px] text-gray-400">۵۲۴۰۰ تومان</h4>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center">
          {/* thumnail */}
          <div className="w-[75px] h-[75px] relative">
            <Image
              src="/images/sidebar-popular-food/food_1.png"
              alt="food_3"
              layout="fill"
            />
          </div>
          {/* detial */}
          <div className="flex flex-col mr-1 space-y-1">
            <h3 className="text-[13px] text-gray-400 font-semibold">نام غذا</h3>

            <h4 className="text-[13px] text-gray-400">۵۲۴۰۰ تومان</h4>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default PopularFoodList;
