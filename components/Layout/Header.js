import Navbar from "./Navbar";
import Image from "next/image";
import {
  FaSearch,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full h-[900px] bg-[#191919]">
      <Navbar />
      {/* right section */}
      <div className="mt-10 flex items-center justify-between px-20">
        <div className="w-1/2">
          <Image
            src="/images/header-burger.png"
            width={552}
            height={711}
            alt="burger"
          />
        </div>
        {/* left section */}
        <div className="flex flex-col text-right w-1/2 space-y-4 ">
          <div className="flex flex-col space-y-5">
            <h3 className="text-white text-5xl font-bold shadow-md">
              از وعده غذایی
            </h3>
            <h3 className="text-5xl text-[#ff8e28] font-bold">خوشمزه</h3>
            <h3 className="text-5xl text-[#00a850] font-bold">خود لذت ببرید</h3>
          </div>
          <p className="text-white text-md w-2/3 mt-5 text-justify leading-7">
            غذای خوشمزه ما برای شما آماده است، ما همیشه در نزدیکی شما هستیم، هر
            چیزی که نیاز دارید سفارش دهید.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              placeholder="غذای مورد علاقه خودت رو پیدا کن ..."
              className="p-3 border-transparent focus:outline-0 rounded-tr-md rounded-br-md w-2/5 text-sm text-gray-500"
            />
            <div className="bg-[#ff8e28] text-white flex items-center justify-center p-[14px] rounded-bl-md rounded-tl-md cursor-pointer">
              <FaSearch className="text-white w-4 h-4" />
            </div>
          </div>
          <p className="text-white">ما را در فضای مجازی دنبال کنید:</p>
          <div className="flex text-white w-2/5">
            <div className="cursor-pointer">
              <FaInstagram className="w-6 h-6 text-white hover:scale-110 transition-all duration-300 ease-out" />
            </div>
            <div className="cursor-pointer">
              <FaTelegramPlane className="w-6 h-6 text-white mx-4 hover:scale-110 transition-all duration-300 ease-out" />
            </div>
            <div className="cursor-pointer">
              <FaWhatsapp className="w-6 h-6 text-white hover:scale-110 transition-all duration-300 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
