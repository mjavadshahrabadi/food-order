import Image from "next/image";
import { FaRegStar, FaPlus, FaMinus, FaRegHeart } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts";
import ReviewForm from "./ReviewForm";

const ProductDetail = () => {
  return (
    <section className="bg-[#F5F4F4] w-full h-full border border-transparent">
      <div className="md:max-w-7xl md:mx-auto mt-28 flex items-start flex-col md:flex-row w-full px-5">
        <div className="flex items-center md:items-start md:w-1/2 w-full">
          {/* more photo columns */}
          <ul className="flex flex-col space-y-4 ml-4">
            <li className="w-[80px] h-[80px] relative bg-white rounded-md shadow-md cursor-pointer">
              <Image
                src="/images/food/food_1.png"
                alt="more-food-1"
                layout="fill"
                className="hover:scale-105 transition-all duration-300 ease-out"
              />
            </li>
            <li className="w-[80px] h-[80px] relative bg-white rounded-md shadow-md cursor-pointer">
              <Image
                src="/images/food/food_2.png"
                alt="more-food-2"
                layout="fill"
                className="hover:scale-105 transition-all duration-300 ease-out"
              />
            </li>
            <li className="w-[80px] h-[80px] relative bg-white rounded-md shadow-md cursor-pointer">
              <Image
                src="/images/food/food_3.png"
                alt="more-food-3"
                layout="fill"
                className="hover:scale-105 transition-all duration-300 ease-out"
              />
            </li>
            <li className="w-[80px] h-[80px] relative bg-white rounded-md shadow-md cursor-pointer">
              <Image
                src="/images/food/food_4.png"
                alt="more-food-4"
                layout="fill"
                className="hover:scale-105 transition-all duration-300 ease-out"
              />
            </li>
          </ul>
          {/* main photo */}
          <div className="w-full h-[300px] md:w-[70%] md:h-[400px] relative bg-white rounded-md shadow-md cursor-pointer ">
            <Image
              src="/images/food/food_7.png"
              alt="main-food-photo"
              layout="fill"
              className="hover:scale-105 transition-all duration-300 ease-out"
            />
          </div>
        </div>
        {/* details area */}
        <div className="w-full md:w-1/2 bg-white px-4 py-4 rounded-md shadow-md mt-8 md:mt-0">
          {/* food name - score - number of reveiws */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gray-600 font-semibold">برگر گوشت</h2>
            {/* score */}
            <div className="flex items-center">
              <p className="text-[14px] text-gray-500 ml-1">نظرات(۰)</p>
              <ul className="flex items-center">
                <li>
                  <FaRegStar className="w-4 h-4 text-yellow-400" />
                </li>
                <li>
                  <FaRegStar className="w-4 h-4 text-yellow-400" />
                </li>
                <li>
                  <FaRegStar className="w-4 h-4 text-yellow-400" />
                </li>
                <li>
                  <FaRegStar className="w-4 h-4 text-yellow-400" />
                </li>
                <li>
                  <FaRegStar className="w-4 h-4 text-yellow-400" />
                </li>
              </ul>
            </div>
          </div>
          {/* description */}
          <p className="mt-3 text-[15px] text-gray-500 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            است.
          </p>
          <div className="flex items-center justify-between mt-2">
            {/* price */}
            <p className="text-[14px] text-gray-500">
              <span>قیمت: </span>
              <s>۷۵۵۰۰ </s>

              <span className="text-[#ff8e28] mr-1">۵۵۰۰۰ تومان</span>
            </p>
            <p className="text-[14px] text-gray-500">
              <span>تخفیف: </span>
              <span className="text-[#ff8e28] bg-[#ff8e28] bg-opacity-20 p-1 rounded-md font-semibold">
                ۳۰%
              </span>
            </p>
          </div>

          <div className="flex items-end justify-between">
            {/* add to cart */}
            <div className="flex items-center mt-3">
              {/* counter */}
              <div
                className="border px-2 py-1 rounded-lg flex items-center space-x-4 shadow-sm"
                dir="ltr"
              >
                <div>
                  <FaPlus className="w-3 h-3 text-gray-500 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out" />
                </div>
                <p className="text-gray-500">۱</p>
                <div>
                  <FaMinus className="w-3 h-3 text-gray-500 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out" />
                </div>
              </div>
              {/* button */}
              <button
                type="button"
                className="text-[13px] font-semibold text-white px-2 py-1.5 rounded-md mr-2 hover:scale-95 transition-all duration-300 ease-out bg-[#ff8e28]"
              >
                افزودن به سبد خرید
              </button>
            </div>
            <p className="text-sm text-gray-500">
              موجودی:
              <span className="text-[#ff8e28] font-semibold"> ۱۲ </span> عدد
            </p>
          </div>
          {/* add to favorite */}
          <p className="flex items-center mt-3 cursor-pointer ">
            <span>
              <FaRegHeart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-all duration-300 ease-out" />
            </span>
            <span className="text-sm text-gray-500 mr-1">
              افزودن به مورد علاقه ها
            </span>
          </p>
          <div className="flex items-start justify-between">
            {/* tags */}
            <div className="flex items-center space-x-4 mt-3">
              <p className="text-[#ff8e28] bg-[#ff8e28] p-1 rounded-md bg-opacity-20 font-semibold text-[13px] ml-2">
                # فست فود
              </p>
              <p className="text-[#ff8e28] bg-[#ff8e28] p-1 rounded-md bg-opacity-20 font-semibold text-[13px]">
                # برگر
              </p>
            </div>
            <p className="text-[13px] text-gray-500 mt-3">دسته بندی: برگر</p>
          </div>
          {/* category */}
        </div>
      </div>
      {/* divider */}
      <div className="max-w-7xl mx-auto">
        <div className="border my-10 border-gray-200" />
        {/* reviews */}
        <div className="bg-white p-4 rounded-md shadow-md mx-5 md:px-0">
          <h3 className="text-gray-500 font-semibold px-5">
            در حال حاضر نظری ثبت نشده است.
          </h3>
          {/* form area */}
          <h4 className="text-[#ff8e28] font-semibold mt-2 px-5">
            نظر خود را با ما در میان بگذارید.
          </h4>
          {/* review form  */}
          <ReviewForm />
        </div>
        {/* related products */}
        <h3 className="text-center mt-10 text-gray-500 font-semibold text-xl">
          محصولات مرتبط
        </h3>
        <RelatedProducts />
      </div>
    </section>
  );
};
export default ProductDetail;
