import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1e1d23] mt-10 px-10 py-14">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* top of footer */}
          <div className="flex flex-col md:flex-row space-y-4 items-center">
            <div className="relative w-[52px] h-[35px]">
              <Image
                src="/icons/newsletter.png"
                layout="fill"
                alt="news-letter"
              />
            </div>
            <h3 className="text-white font-bold text-md md:text-xl pr-2">
              برای دریافت خبرنامه ایمیل خود را ثبت کنید
            </h3>
          </div>
          {/* input section */}

          <div className="pt-4 md:pt-0">
            <input
              type="text"
              placeholder="ایمیل خود را ثبت کنید"
              className="border-2 border-[#454449] bg-[#25242a5c] px-4 py-2 rounded-tr-md rounded-br-md focus:outline-0 text-sm border-l-0 text-white"
            ></input>
            <button className="text-white bg-[#ff8e28] py-2 px-4 rounded-md text-[15px] relative -right-1">
              ثبت
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
