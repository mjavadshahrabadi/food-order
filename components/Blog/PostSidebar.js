import { FaSearch } from "react-icons/fa";
import RecentPostCart from "./RecentPostCart";

const PostSidebar = () => {
  return (
    <section className="md:ml-8">
      {/* serach box */}
      <div className="bg-white border border-gray-100 rounded-md shadow-md py-5 px-8">
        <h4 className="text-gray-500 font-semibold text-[17px]">جستجو کن</h4>
        <form className="pt-4">
          <div className="relative">
            <input
              type="text"
              name="searchbox"
              id="searchbox"
              className="w-full bg-gray-100 px-4 py-3 rounded-md focus:outline-0 text-[14px] text-gray-400 border-2 border-transparent focus:border-[#ff8e28] transition-all duration-300 ease-out focus:bg-gray-50"
              placeholder="دنبال چی میگردی ؟"
            />
            <FaSearch className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
          </div>
        </form>
      </div>
      {/* category box */}
      <div className="bg-white border border-gray-100 rounded-md shadow-md py-5 px-8 mt-5">
        <h4 className="text-gray-500 font-semibold text-[17px]">دسته بندی</h4>
        <ul className="pt-4">
          <li className="text-gray-400 text-[14px] pb-4 border-b border-gray-200 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            پیتزا
          </li>
          <li className="mt-4 text-gray-400 text-[14px] pb-4 border-b border-gray-200 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            غذای سنتی
          </li>
          <li className="mt-4 text-gray-400 text-[14px] pb-4 border-b border-gray-200 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            سوخاری
          </li>
          <li className="mt-4 text-gray-400 text-[14px] pb-4 border-b border-gray-200 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            نوشیدنی
          </li>
          <li className="mt-4 text-gray-400 text-[14px] pb-4 border-b border-gray-200 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            غذای دریایی
          </li>
          <li className="mt-4 text-gray-400 text-[14px] pb-4 border-b border-gray-200 cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            سالاد
          </li>
          <li className="mt-4 text-gray-400 text-[15px]  cursor-pointer hover:text-orange-400 transition-all duration-300 ease-out">
            سوپ
          </li>
        </ul>
      </div>
      {/* recently post box */}
      <div>
        <div className="flex flex-col space-y-4 bg-white border border-gray-100 rounded-md shadow-md py-5 px-8 mt-5">
          <h4 className="text-gray-500 font-semibold text-[17px]">
            آخرین پست ها
          </h4>
          <RecentPostCart
            image="/images/blog-post/footer_1.jpg"
            title="آیا فست فود برای بدن مضر است ؟"
            date="۲۰ تیر ۱۴۰۱"
          />
          <RecentPostCart
            image="/images/blog-post/footer_2.jpg"
            title="آیا فست فود برای بدن مضر است ؟"
            date="۲۰ تیر ۱۴۰۱"
          />
          <RecentPostCart
            image="/images/blog-post/footer_3.jpg"
            title="آیا فست فود برای بدن مضر است ؟"
            date="۲۰ تیر ۱۴۰۱"
          />
          <RecentPostCart
            image="/images/blog-post/footer_4.jpg"
            title="آیا فست فود برای بدن مضر است ؟"
            date="۲۰ تیر ۱۴۰۱"
          />
        </div>
      </div>
      {/* tags part */}
      <div className="bg-white border border-gray-100 rounded-md shadow-md py-5 px-8 mt-5 mb-10 md:mb-0">
        <h4 className="text-gray-500 font-semibold text-[17px]">
          # کلمات کلیدی
        </h4>
        <ul className="grid grid-cols-3 place-items-center mt-5 gap-y-4">
          <li className="w-2/3 py-2 rounded-md bg-[#FF5C58] text-[#FF5C58] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            غذا
          </li>
          <li className="w-2/3 px-4 py-2 rounded-md bg-[#63B4B8] text-[#63B4B8] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            سوخاری
          </li>
          <li className="w-2/3 px-4 py-2 rounded-md bg-[#FFB319] text-[#FFB319] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            برگر
          </li>
          <li className="w-2/3 px-4 py-2 rounded-md bg-[#63B4B8] text-[#63B4B8] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            سوخاری
          </li>

          <li className="w-2/3 px-4 py-2 rounded-md bg-[#FFB319] text-[#FFB319] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            برگر
          </li>
          <li className="w-2/3 py-2 rounded-md bg-[#FF5C58] text-[#FF5C58] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            غذا
          </li>
          <li className="w-2/3 px-4 py-2 rounded-md bg-[#FFB319] text-[#FFB319] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            برگر
          </li>
          <li className="w-2/3 py-2 rounded-md bg-[#FF5C58] text-[#FF5C58] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            غذا
          </li>
          <li className="w-2/3 px-4 py-2 rounded-md bg-[#63B4B8] text-[#63B4B8] bg-opacity-20 flex items-center justify-center text-sm font-semibold">
            سوخاری
          </li>
        </ul>
      </div>
    </section>
  );
};
export default PostSidebar;
