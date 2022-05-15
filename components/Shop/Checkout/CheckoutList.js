import CheckoutItem from "./CheckoutItem";

const CheckoutList = () => {
  return (
    <div className="mt-28 mx-5 md:max-w-4xl md:mx-auto bg-white rounded-md p-4 shadow-md mb-10">
      <ul className="flex flex-col space-y-4">
        <CheckoutItem
          name="نام غذا"
          count="۲"
          price="۴۵۰۰۰"
          image="/images/food/food_1.png"
        />
        <CheckoutItem
          name="نام غذا"
          count="۲"
          price="۴۵۰۰۰"
          image="/images/food/food_5.png"
        />
        <CheckoutItem
          name="نام غذا"
          count="۲"
          price="۴۵۰۰۰"
          image="/images/food/food_3.png"
        />
        <CheckoutItem
          name="نام غذا"
          count="۲"
          price="۴۵۰۰۰"
          image="/images/food/food_4.png"
        />
      </ul>
      <div className="my-4 border" />
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-semibold text-gray-600">قیمت کل :</p>
        <p className="text-[15px] font-semibold text-[#ff8e28]">۳۶۰۰۰۰ تومان</p>
      </div>
    </div>
  );
};
export default CheckoutList;
