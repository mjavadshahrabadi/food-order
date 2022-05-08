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
    <header className="w-full h-[600px] lg:h-[850px] bg-[#191919] pt-16">
      <Navbar />
      <div className="mt-10 flex flex-col-reverse lg:flex-row items-center justify-between text-center px-5 lg:px-0 relative">
        {/* right section */}
        <div className="w-1/2 hidden lg:block lg:mr-14">
          <Image
            src="/images/header-burger.png"
            width={552}
            height={711}
            alt="burger"
          />
        </div>
        {/* left section */}
        <div className="flex flex-col text-center lg:text-right w-full lg:w-1/2 space-y-4  px-5 lg:px-0 lg:mr-10">
          <div className="flex flex-col space-y-5 text-4xl lg:text-5xl">
            <h3 className="text-white  font-bold">از وعده غذایی</h3>
            <h3 className=" text-[#ff8e28] font-bold">خوشمزه</h3>
            <h3 className=" text-[#00a850] font-bold">خود لذت ببرید</h3>
          </div>
          <p className="text-white text-md w-full lg:w-6/12 mt-5 text-center lg:text-justify leading-7">
            غذای خوشمزه ما برای شما آماده است، ما همیشه در نزدیکی شما هستیم، هر
            چیزی که نیاز دارید سفارش دهید.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              placeholder="غذای مورد علاقه خودت رو پیدا کن ..."
              className="p-3 border-transparent focus:outline-0 rounded-tr-md rounded-br-md w-full lg:w-5/12 text-sm text-gray-500"
            />
            <div className="bg-[#ff8e28] text-white flex items-center justify-center p-[14px] rounded-bl-md rounded-tl-md cursor-pointer">
              <FaSearch className="text-white w-4 h-4" />
            </div>
          </div>
          <p className="text-white pt-5 lg:pt-0">
            ما را در فضای مجازی دنبال کنید:
          </p>
          <div className="flex text-white w-full lg:w-2/5 justify-center lg:justify-start">
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
      <div className="absolute left-0 bottom-[300px] hidden lg:block">
        <Image
          src="/images/header_more_1.png"
          width={179}
          height={318}
          alt="header_more_1"
        />
      </div>
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image
          src="/images/header_more_3.png"
          width={179}
          height={318}
          alt="header_more_3"
        />
      </div>
    </header>
  );
};
export default Header;
