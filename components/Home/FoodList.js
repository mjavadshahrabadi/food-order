import FoodCart from "./FoodCart";
import FoodData from "data/popularFood";

const FoodList = () => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:max-w-7xl md:mx-auto place-items-center mt-10 lg:mt-20 ">
        {FoodData.map((food) => {
          return (
            <FoodCart
              key={food.id}
              title={food.title}
              score={food.score}
              price={food.price}
              details={food.detail}
              off={food.off}
              off_price={food.off_price}
              image={food.image}
            />
          );
        })}
      </ul>
      <div className="flex justify-center mt-10 lg:mt-20">
        <button className="white text-gray-400 text-sm font-semibold p-4 rounded-xl border-2 border-gray-200 hover:border-[#ff8e28] hover:text-[#ff8e28] transition-all duration-200 ease-out">
          نمایش همه محصولات
        </button>
      </div>
    </>
  );
};
export default FoodList;
