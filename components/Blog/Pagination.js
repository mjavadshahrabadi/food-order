const Pagination = () => {
  return (
    <ul className="flex items-center my-14 justify-center space-x-2" dir="ltr">
      <li className="w-10 h-10  rounded-full flex items-center justify-center font-bold cursor-pointer text-[#ff8e28] bg-white shadow-sm border-2 border-transparent hover:border-orange-300 transition-all duration-300 ease-out">
        ۱
      </li>
      <li className="w-10 h-10  rounded-full flex items-center justify-center font-bold cursor-pointer text-gray-500 bg-white shadow-sm border-2 border-transparent  hover:border-orange-300 transition-all duration-300 ease-out">
        ۲
      </li>
      <li className="w-10 h-10  rounded-full flex items-center justify-center font-bold cursor-pointer text-gray-500 bg-white shadow-sm border-2 border-transparent  hover:border-orange-300 transition-all duration-300 ease-out">
        ۳
      </li>
      <li className="w-10 h-10  rounded-full flex items-center justify-center font-bold cursor-pointer text-gray-500 bg-white shadow-sm border-2 border-transparent  hover:border-orange-300 transition-all duration-300 ease-out">
        ۴
      </li>
    </ul>
  );
};
export default Pagination;
