import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const PersonCart = (props) => {
  const { name, image, year } = props;
  return (
    <li className="border border-slate-100 rounded-md shadow-md px-5 pt-4 bg-white flex flex-col justify-center items-center">
      <div className="w-[80%] h-[250px] md:w-full md:h-[300px] relative">
        <Image src={image} alt={name} layout="fill" />
      </div>
      <h3 className="text-center pt-4 text-gray-400 text-[15px] font-semibold">
        {name}
      </h3>
      <p className="text-center text-[13px] font-semibold text-[#ff8e28] pt-1">
        {year} سال تجربه کاری
      </p>
      {/* social media link */}
      <div className="flex items-center space-x-2 justify-center pt-4">
        <span className="w-8 h-8 p-2 bg-gray-100 rounded-tr-md rounded-tl-md flex items-center justify-center ml-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-out">
          <FaInstagram className="text-gray-500 w-5 h-5" />
        </span>
        <span className="w-8 h-8 p-2 bg-gray-100 rounded-tr-md rounded-tl-md flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-out">
          <FaLinkedinIn className="text-gray-500 w-5 h-5" />
        </span>
        <span className="w-8 h-8 p-2 bg-gray-100 rounded-tr-md rounded-tl-md flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-out">
          <FaTwitter className="text-gray-500 w-5 h-5" />
        </span>
        <span className="w-8 h-8 p-2 bg-gray-100 rounded-tr-md rounded-tl-md flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-out">
          <FaFacebookF className="text-gray-500 w-4 h-4" />
        </span>
      </div>
    </li>
  );
};
export default PersonCart;
