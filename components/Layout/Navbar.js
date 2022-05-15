import React from "react";
import Image from "next/image";
import { FaRegHeart, FaShoppingBasket, FaSearch } from "react-icons/fa";
import MobileNav from "./MobilaNav";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const Router = useRouter();
  const { openModal } = props;

  return (
    <nav className="flex items-center justify-between px-5 lg:px-14 xl:px-20 py-3 bg-white fixed top-0 w-full z-30 rounded-br-xl rounded-bl-xl border border-b-slate-100 shadow-md">
      <div className="flex items-center">
        <div className="ml-2 navbar__icon hover:navbar__icon-inset--shadow">
          <FaRegHeart className="w-5 h-5 text-gray-700" />
          <span className="navbar__icon-badge">۵</span>
        </div>
        <div
          className="navbar__icon hover:navbar__icon-inset--shadow"
          onClick={openModal}
        >
          <FaShoppingBasket className="w-5 h-5 text-gray-700" />
          <span className="navbar__icon-badge">۳</span>
        </div>
        <div className="navbar__icon hover:navbar__icon-inset--shadow">
          <FaSearch className="w-4 h-4 text-gray-700" />
        </div>
      </div>
      <ul className="space-x-10 text-black text-[15px] hidden lg:flex">
        <Link href="/">
          <li
            className={
              Router.asPath === "/"
                ? "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out text-[#ff8e28] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20"
                : "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] text-gray-600"
            }
          >
            صفحه اصلی
          </li>
        </Link>
        <Link href="/shop">
          <li
            className={
              Router.asPath === "/shop"
                ? "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out text-[#ff8e28] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20"
                : "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] text-gray-600"
            }
          >
            فروشگاه
          </li>
        </Link>
        <Link href="/about">
          <li
            className={
              Router.asPath === "/about"
                ? "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out text-[#ff8e28] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20"
                : "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] text-gray-600"
            }
          >
            درباره ما
          </li>
        </Link>
        <Link href="/blog">
          <li
            className={
              Router.asPath === "/blog"
                ? "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out text-[#ff8e28] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20"
                : "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] text-gray-600"
            }
          >
            بلاگ
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={
              Router.asPath === "/contact"
                ? "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out text-[#ff8e28] cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20"
                : "ml-10 font-semibold  px-4 py-2 rounded-md transition-all duration-300 ease-out cursor-pointer hover:bg-[#ff8e28] hover:bg-opacity-20 hover:text-[#ff8e28] text-gray-600"
            }
          >
            تماس با ما
          </li>
        </Link>
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
