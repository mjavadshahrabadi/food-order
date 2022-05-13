import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart, FaShoppingBasket, FaSearch } from "react-icons/fa";
import MobileNav from "./MobilaNav";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 lg:px-14 xl:px-20 py-3 bg-white fixed top-0 w-full z-50 rounded-br-xl rounded-bl-xl border border-b-slate-100 shadow-md">
      <div className="flex items-center">
        <div className="ml-2 navbar__icon hover:navbar__icon-inset--shadow">
          <FaRegHeart className="w-5 h-5 text-gray-600" />
          <span className="navbar__icon-badge">۵</span>
        </div>
        <div className="navbar__icon hover:navbar__icon-inset--shadow">
          <FaShoppingBasket className="w-5 h-5 text-gray-600" />
          <span className="navbar__icon-badge">۳</span>
        </div>
        <div className="navbar__icon hover:navbar__icon-inset--shadow">
          <FaSearch className="w-4 h-4 text-gray-600" />
        </div>
      </div>
      <ul className="space-x-10 text-black text-[15px] hidden lg:flex">
        <li className="ml-10 text-[#ff8e28] font-semibold cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 px-4 py-2 rounded-md transition-all duration-300 ease-out">
          صفحه اصلی
        </li>
        <li className="hover:orange__hover hover:bg-[#ff8e28] hover:bg-opacity-20 px-4 py-2 rounded-md font-bold text-gray-500 transition-all duration-300 ease-out">
          فروشگاه
        </li>
        <li className="hover:orange__hover hover:bg-[#ff8e28] hover:bg-opacity-20 px-4 py-2 rounded-md font-bold text-gray-500 transition-all duration-300 ease-out">
          درباره ما
        </li>
        <li className="hover:orange__hover hover:bg-[#ff8e28] hover:bg-opacity-20 px-4 py-2 rounded-md font-bold text-gray-500 transition-all duration-300 ease-out">
          بلاگ
        </li>
        <li className="hover:orange__hover hover:bg-[#ff8e28] hover:bg-opacity-20 px-4 py-2 rounded-md font-bold text-gray-500 transition-all duration-300 ease-out">
          تماس با ما
        </li>
      </ul>
      <div className="cursor-pointer flex items-center">
        {/* <p className="ml-4 text-sm mt-1">لوگو</p> */}
        <div className="w-[48px] h-[48px] relative">
          <Image
            src="/images/logo_white.png"
            alt="Webiste-Logo"
            layout="fill"
          />
        </div>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
