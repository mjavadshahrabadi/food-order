import Image from "next/image";
import { FaRegHeart, FaShoppingBasket, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-14 py-6 ">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full border-2 border-white ml-2 flex items-center justify-center cursor-pointer relative">
          <FaRegHeart className="w-5 h-5 text-white" />
          <span className="w-6 rounded-full h-6 bg-[#ff8e28] absolute -top-3 -right-2 text-white flex items-center justify-center text-sm">
            ۵
          </span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-white ml-2 flex items-center justify-center cursor-pointer relative ">
          <FaShoppingBasket className="w-5 h-5 text-white" />
          <span className="w-6 rounded-full h-6 bg-[#ff8e28] absolute -top-3 -right-2 text-white flex items-center justify-center text-sm">
            ۳
          </span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center cursor-pointer ">
          <FaSearch className="w-4 h-4 text-white" />
        </div>
      </div>
      <ul className="flex space-x-10 text-white text-[15px]">
        <li className="pl-10 text-[#ff8e28] font-semibold cursor-pointer">
          صفحه اصلی
        </li>
        <li className="hover:orange__hover">درباره ما</li>
        <li className="hover:orange__hover">فروشگاه</li>
        <li className="hover:orange__hover">بلاگ</li>
        <li className="hover:orange__hover">تماس با ما</li>
      </ul>

      <div className="cursor-pointer">
        <Image
          src="/images/logo_white-1.png"
          alt="Webiste-Logo"
          width={140}
          height={37}
        />
      </div>
    </nav>
  );
};

export default Navbar;
