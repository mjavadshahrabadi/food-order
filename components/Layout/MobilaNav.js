import React from "react";
import Image from "next/image";

const MobileNav = (props) => {
  return (
    <nav className="fixed bottom-0 right-0 md:hidden bg-white px-5 py-5 w-full rounded-tr-3xl rounded-tl-3xl border border-gray-200 mobile__nav_shadow z-50">
      <ul className="flex justify-between px-5 items-center">
        <li className="flex flex-col space-y-2 justify-center items-center cursor-pointer">
          <Image src="/icons/home.png" width={34} height={34} alt="home-page" />
          <small className="font-semibold">خانه</small>
        </li>
        <li className="flex flex-col space-y-2 justify-center items-center cursor-pointer">
          <Image
            src="/icons/shop-1.png"
            width={34}
            height={34}
            alt="shop-page"
          />
          <small className="font-semibold">فروشگاه</small>
        </li>
        <li className="flex flex-col space-y-2 justify-center items-center cursor-pointer">
          <Image
            src="/icons/about.png"
            width={34}
            height={34}
            alt="about-page"
          />
          <small className="font-semibold">درباره ما</small>
        </li>
        <li className="flex flex-col space-y-2 justify-center items-center cursor-pointer">
          <Image src="/icons/blog.png" width={34} height={34} alt="blog-page" />
          <small className="font-semibold">بلاگ</small>
        </li>
        <li className="flex flex-col space-y-2 justify-center items-center cursor-pointer">
          <Image
            src="/icons/contact.png"
            width={34}
            height={34}
            alt="contact-page"
          />
          <small className="font-semibold">تماس</small>
        </li>
      </ul>
    </nav>
  );
};
export default MobileNav;
