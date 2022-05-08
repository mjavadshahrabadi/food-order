import Image from "next/image";

const PopularFood = () => {
  return (
    <section className="mt-10 max-w-7xl mx-auto hidden lg:block ">
      <h3 className="text-2xl font-bold text-[#ff8328] text-center">
        محبوب ترین ها
      </h3>
      <h4 className="text-center font-bold text-gray-600 pt-4">
        غذای مورد علاقه ات را سفارش بده
      </h4>

      <ul className="flex flex-row  justify-between mt-8">
        <li className="popular__food-filter flex items-center px-2">
          <div className="w-[46px] h-[46px] relative ">
            <Image
              src="/icons/searchbox/all.png"
              alt="all-items"
              layout="fill"
            />
          </div>
          <span className="text-gray-500 font-semibold">محبوب ترین ها</span>
        </li>
        <li className="popular__food-filter flex items-center px-2">
          <div className="w-[46px] h-[46px] relative">
            <Image
              src="/icons/searchbox/burger.png"
              alt="burger"
              layout="fill"
            />
          </div>
          <span className="pr-4 font-semibold text-gray-500">برگر</span>
        </li>
        <li className="popular__food-filter flex items-center px-2">
          <div className="w-[46px] h-[46px] relative">
            <Image src="/icons/searchbox/pizza.png" alt="pizza" layout="fill" />
          </div>
          <span className="pr-4 font-semibold text-gray-500">پیتزا</span>
        </li>
        <li className="popular__food-filter flex items-center px-2">
          <div className="w-[46px] h-[46px] relative">
            <Image
              src="/icons/searchbox/rice.png"
              alt="sonati-food"
              layout="fill"
            />
          </div>
          <span className="pr-2 font-semibold text-gray-500">غذای سنتی</span>
        </li>
        <li className="popular__food-filter flex items-center px-2">
          <div className="w-[36px] h-[36px] relative">
            <Image
              src="/icons/searchbox/sandwiches.png"
              alt="sandwiches"
              layout="fill"
            />
          </div>
          <span className="pr-4 font-semibold text-gray-500">ساندویچ</span>
        </li>
        <li className="popular__food-filter flex items-center px-2">
          <div className="w-[36px] h-[36px] relative">
            <Image
              src="/icons/searchbox/chicken.png"
              alt="sokhari"
              layout="fill"
            />
          </div>
          <span className="pr-4 font-semibold text-gray-500">سوخاری</span>
        </li>
      </ul>
    </section>
  );
};
export default PopularFood;
