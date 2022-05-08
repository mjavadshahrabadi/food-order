import Image from "next/image";
import WhyCart from "./WhyCart";

const WhyUs = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  mt-5 px-5 xl:px-0">
      <div className="w-full md:w-1/2 relative -z-10">
        <Image src="/images/why-2.jpg" width={600} height={400} alt="why-us" />
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600">
          چرا ما بهترین هستیم؟
        </h2>
        <p className="pt-4 text-justify text-[#191919]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
        <ul className="grid grid-cols-2 mt-4 gap-4 place-items-start">
          <WhyCart title="تازه" image="/icons/whycart/fresh.png" />
          <WhyCart title="پشتیبانی" image="/icons/whycart/support.png" />
          <WhyCart title="کیفیت" image="/icons/whycart/quality.png" />
          <WhyCart
            title="تحویل سریع"
            image="/icons/whycart/fast-delivery.png"
          />
        </ul>
      </div>
    </section>
  );
};
export default WhyUs;
