import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const RecentPostCart = (props) => {
  const { image, title, date } = props;

  return (
    <li className="flex items-start cursor-pointer ">
      {/* image post */}
      <div className="w-[70px] h-[70px] relative overflow-hidden rounded-md">
        <Image src={image} alt={title} layout="fill" className="object-cover" />
      </div>
      {/* detail part */}
      <div className="flex flex-col py-1 pr-2 space-y-2 ">
        <h4 className="text-gray-500 font-semibold text-[14px] hover:text-[#ff8e28] transition-all duration-300 ease-out">
          {title}
        </h4>
        <div className="flex items-center">
          <FaCalendarAlt className="w-4 h-4 text-gray-400" />
          <span className="text-[13px] pr-1 text-gray-400 mt-1">{date}</span>
        </div>
      </div>
    </li>
  );
};

export default RecentPostCart;
