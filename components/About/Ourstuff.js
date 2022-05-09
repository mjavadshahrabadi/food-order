import PersonCart from "./PersonCart";

const OurStuff = () => {
  return (
    <section className="mt-10 lg:mt-20 mb-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3">
          <h4 className="text-[#ff8e28] text-2xl font-bold">پرسنل ما</h4>
          <p className="text-gray-500 font-bold">پرسنل ما را بیشتر بشناسید</p>
        </div>
        <div>
          <button
            type="button"
            className="border-2 px-4 py-2 rounded-md shadow-sm shadow-orange-200 border-orange-300 text-[#ff8e28] font-semibold hover:scale-95 transition-all duration-300 ease-out"
          >
            بیشتر
          </button>
        </div>
      </div>
      {/* 3 cols employee cart */}
      <ul className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 mt-10 gap-y-5">
        <PersonCart
          name="مهدی مافی"
          image="/images/avatar/person_1.png"
          year="۱۰"
        />
        <PersonCart
          name="شاهین عبدی"
          image="/images/avatar/person_2.png"
          year="۷"
        />
        <PersonCart
          name="نیلوفر صادقی"
          image="/images/avatar/person_3.png"
          year="۳"
        />
      </ul>
    </section>
  );
};
export default OurStuff;
