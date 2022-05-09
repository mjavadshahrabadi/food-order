import Image from "next/image";
import { FaPen } from "react-icons/fa";

const AboutHeader = () => {
  return (
    <header className="pt-16 flex flex-col lg:flex-row items-start justify-between">
      {/* vector part */}
      <div className="w-[100%] lg:w-[900px] h-[300px] lg:h-[600px] relative">
        <Image
          src="/images/about/about.jpg"
          alt="contact-header-vector"
          layout="fill"
        />
      </div>
      {/* detail part */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="text-right">
          <div className="border mx-5 lg:mx-10 border-gray-100 rounded-md px-4 py-3 shadow-md shadow-gray-200 hover:shadow-orange-200 transition-all duration-500 ease-out mt-10 bg-white">
            <div className="flex items-center justify-between">
              <p className="text-[13px] flex items-center">
                <span>
                  <FaPen className="w-3 h-3 text-gray-400" />
                </span>
                <span className="text-gray-400 font-bold pr-2">
                  مدیریت وبسایت
                </span>
              </p>
              {/* avatar section */}
              <div className="w-[50px] h-[50px] relative overflow-hidden rounded-full">
                <Image
                  src="/images/avatar/avt_admin.jpg"
                  alt="admin-avatar"
                  layout="fill"
                />
              </div>
            </div>
            <h2 className="text-sm lg:text-md font-semibold text-[#ff8e28] bg-[#ff8e28] bg-opacity-20 py-2 w-[100px] rounded-md text-center">
              درباره ما
            </h2>
            <p className="pt-4 text-gray-400 text-[14px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
        {/* our history work */}
        <div className="text-right">
          <div className="border mx-5 lg:mx-10 border-gray-100 rounded-md p-4 shadow-md shadow-gray-200 hover:shadow-orange-200 transition-all duration-500 ease-out mt-8 bg-white">
            <div className="flex items-center justify-between">
              <p className="text-[13px] flex items-center">
                <span>
                  <FaPen className="w-3 h-3 text-gray-400" />
                </span>
                <span className="text-gray-400 font-bold pr-2">
                  مدیریت وبسایت
                </span>
              </p>
              {/* avatar section */}
              <div className="w-[50px] h-[50px] relative overflow-hidden rounded-full">
                <Image
                  src="/images/avatar/avt_admin.jpg"
                  alt="admin-avatar"
                  layout="fill"
                />
              </div>
            </div>
            <h2 className="text-sm lg:text-md font-semibold text-[#ff8e28] bg-[#ff8e28] bg-opacity-20 py-2 w-[100px] rounded-md text-center">
              تاریخچه ما
            </h2>
            <p className="pt-4 text-gray-400 text-[14px] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
              چاپگرها و متون بلکه روزنامه و مجله است.
            </p>
          </div>
        </div>
        {/* our history work */}
      </div>
    </header>
  );
};
export default AboutHeader;
