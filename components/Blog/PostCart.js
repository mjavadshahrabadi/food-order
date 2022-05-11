import Image from "next/image";
import { FaCalendarAlt, FaComment, FaEye } from "react-icons/fa";

const PostCart = (props) => {
  const { image, views, comment, title, description, date } = props;

  return (
    <li className="border border-gray-100 bg-white rounded-md px-5 md:px-10 pt-10 pb-5 shadow-md">
      {/* post image */}
      <div className="w-full h-[200px] md:[400px] lg:h-[500px] relative overflow-hidden rounded-md">
        <Image src={image} alt={title} layout="fill" />
      </div>
      {/* time - number of comments - number of views */}

      <ul className="flex items-center pt-5 md:space-x-8 justify-between md:justify-start">
        <li className="md:ml-8 flex items-center">
          <span>
            <FaCalendarAlt className="text-gray-400 w-4 h-4" />
          </span>
          <span className="text-[13px] text-gray-400 pr-2 mt-1">{date}</span>
        </li>
        <li className="flex items-center">
          <span>
            <FaComment className="text-gray-400 w-4 h-4" />
          </span>
          <span className="text-[13px] text-gray-400 pr-2 mt-1">
            نظرات ({comment})
          </span>
        </li>
        <li className="flex items-center">
          <span>
            <FaEye className="text-gray-400 w-4 h-4" />
          </span>
          <span className="text-[13px] text-gray-400 pr-2 mt-1">
            بیننده ({views})
          </span>
        </li>
      </ul>
      <h3 className="pt-4 text-gray-500 text-lg md:text-xl font-semibold">
        {title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-gray-400 pt-2 text-justify">
        {description}
      </p>
      <button
        type="button"
        className="text-[#ff8e28] bg-[#ff9e28] bg-opacity-20 px-8 py-2 mt-4 rounded-md"
      >
        بیشتر
      </button>
    </li>
  );
};
export default PostCart;
