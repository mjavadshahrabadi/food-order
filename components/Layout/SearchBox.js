import Image from "next/image";

const SearchBox = () => {
  return (
    <section className="w-full relative  bg-white bg-opacity-40 border border-gray-200 shadow-md mobile__nav_shadow">
      <ul className="grid grid-cols-8 place-items-center">
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/drink.png"
              width={48}
              height={48}
              alt="drink"
            />
          </div>
          <h4 className="text-black">نوشیدنی</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/stuck.png"
              width={48}
              height={48}
              alt="stuck"
            />
          </div>
          <h4 className="text-black">استیک</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/burger.png"
              width={48}
              height={48}
              alt="chicken"
            />
          </div>
          <h4 className="text-black">برگر</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/chicken.png"
              width={48}
              height={48}
              alt="drink"
            />
          </div>
          <h4 className="text-black">مرغ سوخاری</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/sandwiches.png"
              width={48}
              height={48}
              alt="sandwiches"
            />
          </div>
          <h4 className="text-black">ساندویچ</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/cake.png"
              width={48}
              height={48}
              alt="cake"
            />
          </div>
          <h4 className="text-black">کیک</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/icecream.png"
              width={48}
              height={48}
              alt="icecream"
            />
          </div>
          <h4 className="text-black">بستنی</h4>
        </li>
        <li className="cursor-pointer flex flex-col items-center space-y-2 py-4 w-full hover:animate-pulse">
          <div className="w-[48px] h-[48px]">
            <Image
              src="/icons/searchbox/fish.png"
              width={48}
              height={48}
              alt="fish"
            />
          </div>
          <h4 className="text-black">غذای دریایی</h4>
        </li>
      </ul>
    </section>
  );
};
export default SearchBox;
