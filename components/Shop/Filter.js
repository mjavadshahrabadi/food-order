const Filter = () => {
  return (
    <div className="w-full flex items-center justify-between px-8 md:px-0">
      <select
        default="all"
        className="py-2 px-2 text-[13px] focus:outline-0 border-2 border-gray-100 rounded-md hover:border-orange-400 transition-all duration-300 ease-out cursor-pointer text-gray-500 font-semibold"
      >
        <option className="all">همه موارد</option>
        <option className="hover:bg-[#ff8e28]" value="recently">
          جدیدترین ها
        </option>
        <option value="popular">محبوب ترین ها</option>
        <option value="max-rate">بالاترین امتیاز</option>
        <option value="min-price">کمترین قیمت</option>
        <option value="max_price">بیشترین قیمت</option>
      </select>
      <h2 className="text-gray-500 text-[15px] font-semibold">
        نمایش <span className="text-[#ff8e28]">۱۰</span> از{" "}
        <span className="text-[#ff8e28]">۵۰</span> مورد
      </h2>
    </div>
  );
};
export default Filter;
