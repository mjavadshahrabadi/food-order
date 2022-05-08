import Image from "next/image";

const WhyCart = (props) => {
  const { title, image } = props;
  return (
    <li className="bg-white border-2 border-slate-50 shadow-md flex items-center px-2 py-1 rounded-md justify-between w-full  md:w-2/3 hover:border-l-[#ff8e28] transition-color duration-300 ease-out cursor-pointer">
      <span className="font-semibold text-sm text-gray-600 pl-4">{title}</span>
      <div className="w-[48px] h-[48px] relative z-10">
        <Image src={image} alt={title} layout="fill" />
      </div>
    </li>
  );
};
export default WhyCart;
