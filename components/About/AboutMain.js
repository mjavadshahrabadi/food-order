import Image from "next/image";
import WhyCart from "../Home/WhyCart";
import OurStuff from "./Ourstuff";

const AboutMain = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 lg:mt-20 px-5 xl:px-0">
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row-reverse items-center justify-between">
        <div className="w-[90%] h-[280px] lg:w-[550px] lg:h-[470px] relative">
          <Image
            src="/images/about/burger.png"
            alt="whyus-burger"
            layout="fill"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="text-[#ff8e28] text-xl lg:text-2xl font-semibold">
            برتری رستوران ما نسبت به دیگران چیست؟
          </h2>
          <p className="text-[15px] text-gray-400 text-justify pt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد.
          </p>
          <ul className="grid grid-cols-2 mt-5 gap-4">
            <WhyCart
              title="تحویل سریع"
              image="/icons/whycart/fast-delivery.png"
            />
            <WhyCart title="تازه" image="/icons/whycart/fresh.png" />
            <WhyCart title="کیفیت" image="/icons/whycart/quality.png" />
            <WhyCart title="پشتیبانی" image="/icons/whycart/support.png" />
          </ul>
        </div>
      </div>
      <OurStuff />
    </section>
  );
};
export default AboutMain;
