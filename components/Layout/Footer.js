import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1e1d23] mt-10 px-5 lg:px-10 py-14">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14 gap-x-8 place-items-start gap-y-10">
          <div>
            <h3 className="text-white font-bold text-xl">درباره ما</h3>
            <p className="text-gray-300 pt-4 text-sm text-justify text-[14px] ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطر آنچنان که لازم است.
            </p>
            <div className="flex items-center pt-8">
              {/* image opening hour */}
              <div className="bg-[#ff8e28] p-2 flex items-center justify-center rounded-lg">
                <Image
                  src="/icons/open_24.png"
                  alt="open_24"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
              {/* opening hour detail */}
              <div className="flex flex-col space-y-2 text-gray-300 pr-2 text-[14px]">
                <p>شنبه تا جمعه (۱۰ تا ۲۳)</p>
                <p>جمعه ها - تعطیل</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl">راه های ارتباطی</h3>
            <div className="flex flex-col space-y-4 pt-4 text-gray-300 text-[14px]">
              <p className="flex items-center">
                <span>آدرس :</span>
                <span className="pr-1">قزوین، نوروزیان</span>
              </p>
              <p>
                <span>ایمیل :</span>
                <span className="pr-1">support@exmaple.com</span>
              </p>
              <p>
                <span>شماره تماس :</span>
                <span className="pr-1"> ۳۳۵۶۷۹۱ - ۰۲۸ </span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">لینک ها</h3>
            <div className="flex flex-col space-y-3 pt-4 text-gray-300 text-[14px]">
              <p>پرسش و پاسخ</p>
              <p>درباره تیم</p>
              <p>تاریخچه</p>
              <p>تماس با ما</p>
              <p>بلاگ</p>
            </div>
          </div>
          <div className="pb-24 lg:pb-0">
            <h3 className="text-white font-bold text-xl">آخرین پست ها</h3>
            <div className="flex flex-col space-y-4 pt-4 text-gray-300 text-[14px]">
              <div className="flex items-center">
                <div className="w-[70px] h-[70px] relative flex-shrink-0">
                  <Image
                    src="/images/blog-post/footer_1.jpg"
                    alt="footer-post-1
                    "
                    layout="fill"
                    className="rounded-sm"
                  />
                </div>
                {/* post title - time */}
                <div className="flex flex-col pr-2 space-y-1">
                  <h4>آیا فست فود برای بدن مناسب است؟</h4>
                  <small>۲ ساعت پیش</small>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-[70px] h-[70px] relative flex-shrink-0">
                  <Image
                    src="/images/blog-post/footer_2.jpg"
                    alt="footer-post-2"
                    layout="fill"
                    className="rounded-sm"
                  />
                </div>
                {/* post title - time */}
                <div className="flex flex-col pr-2 space-y-1">
                  <h4>وعده های غذایی ناسالم خود را با سبزیچات جایگزین کنید.</h4>
                  <small>۱۰ ساعت پیش</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
