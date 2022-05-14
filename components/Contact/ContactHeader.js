import Image from "next/image";

const ContactHeader = () => {
  return (
    <header className="mx-4 md:max-w-7xl md:mx-auto mt-32 mb-20 border border-gray-100 rounded-xl shadow-md py-8 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 space-y-4 md:space-y-0">
        <div className="flex items-center border px-4 py-2 border-gray-100 shadow-md rounded-md shadow-orange-100 w-full md:w-auto justify-evenly">
          {/* icon image */}
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-50 rounded-md">
            <Image
              src="/icons/contact/location.png"
              alt="location-icon"
              width={40}
              height={40}
            />
          </div>
          {/* contact description */}
          <div className="flex flex-col pr-2 space-y-1">
            <h4 className="text-[#ff8e28] text-[16px] font-semibold">
              موقعیت مکانی
            </h4>
            <p className="text-gray-400 text-[14px]">
              قزوین، نوروزیان، جنب بانک ملی
            </p>
          </div>
        </div>
        <div className="flex items-center border px-4 py-2 border-gray-100 shadow-md rounded-md shadow-orange-100 w-full md:w-auto justify-evenly">
          {/* icon image */}
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-50 rounded-md">
            <Image
              src="/icons/contact/phone.png"
              alt="phone-icon"
              width={40}
              height={40}
            />
          </div>
          {/* contact description */}
          <div className="flex flex-col pr-2 space-y-1">
            <h4 className="text-[#ff8e28] text-[16px] font-semibold">
              شماره تماس
            </h4>
            <p className="text-gray-400 text-[14px]">
              ۳۳۵۶۷۹۱ - ۰۲۸ , ۳۳۵۶۱۷۹ - ۰۲۸
            </p>
          </div>
        </div>
        <div className="flex items-center border px-4 py-2 border-gray-100 shadow-md rounded-md shadow-orange-100 w-full md:w-auto justify-evenly">
          {/* icon image */}
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-gray-50 rounded-md">
            <Image
              src="/icons/contact/email.png"
              alt="email-icon"
              width={45}
              height={45}
            />
          </div>
          {/* contact description */}
          <div className="flex flex-col pr-2 space-y-1">
            <h4 className="text-[#ff8e28] text-[16px] font-semibold">ایمیل</h4>
            <p className="text-gray-400 text-[14px]">supports@expample.com</p>
          </div>
        </div>
      </div>
      <form className="mt-10 mx-4 md:mx-0 lg:px-8">
        {/* name - email => user */}
        <div className="flex items-center justify-between lg:mx-10">
          <input
            type="text"
            className="w-full lg:w-4/5 bg-gray-100 p-3 rounded-md focus:outline-0 border-2 border-transparent focus:border-[#ff8e28] transition-all duration-300 ease-out focus:bg-gray-50 text-[14px] text-gray-400 ml-5"
            placeholder="نام"
            name="username"
          />
          <input
            type="text"
            className="w-full lg:w-4/5 bg-gray-100 p-3 rounded-md focus:outline-0 border-2 border-transparent focus:border-[#ff8e28] transition-all duration-300 ease-out focus:bg-gray-50 text-[14px] text-gray-400"
            placeholder="ایمیل"
            name="Email"
          />
        </div>
        {/* subject of form */}
        <div className="flex lg:mx-10 mt-5">
          <input
            type="text"
            className="w-full bg-gray-100 p-3 rounded-md focus:outline-0 border-2 border-transparent focus:border-[#ff8e28] transition-all duration-300 ease-out focus:bg-gray-50 text-[14px] text-gray-400"
            placeholder="موضوع خود را وارد کنید"
            name="title"
          />
        </div>
        {/* text area message section */}
        <div className="lg:mx-10 mt-5">
          <textarea
            className="w-full bg-gray-100 p-3 rounded-md focus:outline-0 border-2 border-transparent focus:border-[#ff8e28] transition-all duration-300 ease-out focus:bg-gray-50 text-[14px] text-gray-400"
            rows={10}
            placeholder="پیام خود را بنویسید ..."
          ></textarea>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="px-10 py-2 rounded-md border-2 border-[#ffa95d] text-[#ff8e28] hover:shadow-md hover:scale-95 transition-all duration-300 ease-out"
            type="button"
          >
            ارسال
          </button>
        </div>
      </form>
    </header>
  );
};
export default ContactHeader;
