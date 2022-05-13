import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa";

const BlogContainer = () => {
  return (
    <section className="w-full mt-10 lg:mt-20 flex lg:flex-row flex-col px-6 space-y-8 md:space-y-0 mb-14 md:mb-20">
      {/* right blog post */}
      <div className="md:w-1/2 flex flex-col w-full space-y-4 md:space-y-0 lg:flex-row items-center">
        {/* post thumbnail */}
        <div className="md:w-[400px] md:h-[250px] relative overflow-hidden rounded-md w-[100%] h-[200px]">
          <Image
            src="/images/blog-post/post_1.jpg"
            layout="fill"
            alt="blog-post-1"
            className="object-fill"
          />
        </div>
        {/* post details */}
        <div className="flex flex-col w-full lg:w-1/2 px-4 py-4">
          {/* tag  - time */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400 ">۲ فروردین ۱۴۰۰</p>
            <p className="px-2 py-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8328] rounded-md text-sm">
              فست فود
            </p>
          </div>
          <p className="text-sm text-gray-400 pt-5 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <div className="pt-2 flex items-center justify-between">
            <p className="flex items-center">
              <span className="">
                <FaRegComment className="w-4 h-4 text-gray-400" />
              </span>
              <span className="text-[13px] text-gray-400 pr-1 ">۳۲ نظر</span>
            </p>
            <p>
              <span className="text-[13px] text-gray-400">
                زمان مطالعه : ۳ دقیقه
              </span>
            </p>
            <button
              type="button"
              className="px-2 py-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8328] rounded-md text-sm hover:scale-110 transition-all duration-200 ease-out"
            >
              بیشتر
            </button>
          </div>
        </div>
      </div>
      {/* left blog post */}
      <div className="w-full md:w-1/2 flex lg:flex-row flex-col space-y-4 lg:space-y-0 items-center">
        <div className="md:w-[400px] md:h-[250px] w-[100%] h-[200px] relative overflow-hidden rounded-md">
          <Image
            src="/images/blog-post/post_2.jpg"
            layout="fill"
            alt="blog-post-1"
            className="object-fill"
          />
        </div>

        {/* post details */}
        <div className="flex flex-col w-full md:w-1/2 px-4">
          {/* tag  - time */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400 ">۲۳ اردبیهشت ۱۴۰۰</p>
            <p className="px-2 py-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8328] rounded-md text-sm">
              میان وعده
            </p>
          </div>
          <p className="text-sm text-gray-400 pt-5 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <div className="pt-2 flex items-center justify-between">
            <p className="flex items-center">
              <span className="">
                <FaRegComment className="w-4 h-4 text-gray-400" />
              </span>
              <span className="text-[13px] text-gray-400 pr-1 ">۳۲ نظر</span>
            </p>
            <p>
              <span className="text-[13px] text-gray-400">
                زمان مطالعه : ۲ دقیقه
              </span>
            </p>
            <button
              type="button"
              className="px-2 py-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8328] rounded-md text-sm hover:scale-110 transition-all duration-200 ease-out"
            >
              بیشتر
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogContainer;
