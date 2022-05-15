import { AiOutlineClose } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const ModalDetail = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal__middle bg-white py-4 rounded-md z-50 shadow-sm w-[90%] lg:w-[30%]">
      <div className="cursor-pointer px-4" onClick={closeModal} title="close">
        <AiOutlineClose className="text-orange-500 w-6 h-6" />
      </div>
      <div className="w-full border border-gray-100 my-4" />

      <div className="px-4">
        <h3 className="text-gray-600 font-bold mr-1">سبد خرید :</h3>
        <ul className="flex flex-col mt-2 space-y-6">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="ml-1 cursor-pointer">
                <MdDelete
                  className="w-5 h-5 hover:text-orange-500 text-gray-500 transition-all duration-300 ease-out"
                  title="حذف"
                />
              </div>
              <p className="text-sm font-semibold text-gray-500">
                برگر قارچ و پنیر
                <span className="p-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8e28] rounded-lg mr-1.5 text-sm">
                  ۳ عدد
                </span>
              </p>
            </div>
            <div className="flex item-center space-x-2" dir="ltr">
              <div className="border p-1 rounded-md cursor-pointer">
                <FaPlus className="w-3 h-3 text-[#ff8e28]" />
              </div>
              <p className="text-[#ff8e28] text-md font-semibold">۳</p>
              <div className="border p-1 rounded-md cursor-pointer">
                <FaMinus className="w-3 h-3 text-[#ff8e28]" />
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-[#ff8e28] text-[15px]">۱۵۸۰۰۰ تومان</p>
            </div>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="ml-1 cursor-pointer">
                <MdDelete
                  className="w-5 h-5 hover:text-orange-500 text-gray-500 transition-all duration-300 ease-out"
                  title="حذف"
                />
              </div>
              <p className="text-sm font-semibold text-gray-500">
                برگر قارچ و پنیر
                <span className="p-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8e28] rounded-lg mr-1.5 text-sm">
                  ۳ عدد
                </span>
              </p>
            </div>
            <div className="flex item-center space-x-2" dir="ltr">
              <div className="border p-1 rounded-md cursor-pointer">
                <FaPlus className="w-3 h-3 text-[#ff8e28]" />
              </div>
              <p className="text-[#ff8e28] text-md font-semibold">۳</p>
              <div className="border p-1 rounded-md cursor-pointer">
                <FaMinus className="w-3 h-3 text-[#ff8e28]" />
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-[#ff8e28] text-[15px]">۱۵۸۰۰۰ تومان</p>
            </div>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="ml-1 cursor-pointer">
                <MdDelete
                  className="w-5 h-5 hover:text-orange-500 text-gray-500 transition-all duration-300 ease-out"
                  title="حذف"
                />
              </div>
              <p className="text-sm font-semibold text-gray-500">
                برگر قارچ و پنیر
                <span className="p-1 bg-[#ff8e28] bg-opacity-20 text-[#ff8e28] rounded-lg mr-1.5 text-sm">
                  ۳ عدد
                </span>
              </p>
            </div>
            <div className="flex item-center space-x-2" dir="ltr">
              <div className="border p-1 rounded-md cursor-pointer">
                <FaPlus className="w-3 h-3 text-[#ff8e28]" />
              </div>
              <p className="text-[#ff8e28] text-md font-semibold">۳</p>
              <div className="border p-1 rounded-md cursor-pointer">
                <FaMinus className="w-3 h-3 text-[#ff8e28]" />
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-[#ff8e28] text-[15px]">۱۵۸۰۰۰ تومان</p>
            </div>
          </li>
        </ul>
        <div className="w-full border border-gray-100 mt-6 mb-4" />
        <Link href="/shop/checkout">
          <button
            onClick={closeModal}
            className="bg-[#ff8e28] text-white p-2 rounded-md text-sm hover:shadow-md transition-all duration-300 ease-out"
            type="button"
          >
            ثبت سفارش
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ModalDetail;
