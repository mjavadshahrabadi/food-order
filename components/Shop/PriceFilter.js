const PriceFilter = () => {
  return (
    <div className="mt-5">
      <div defaultChecked="1">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-orange-500 border-2 border-gray-300 focus:border-0 cursor-pointer"
            name="radio-colors"
            value="1"
          />
          <span className="mr-1 text-sm text-gray-400 ">
            بین ۳۵۰۰۰ تا ۱۰۰۰۰۰ تومان
          </span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-orange-500 border-2 border-gray-300 focus:border-0 cursor-pointer"
            name="radio-colors"
            value="2"
          />
          <span className="mr-1 text-sm text-gray-400">
            بین ۱۰۰۰۰۰ تا ۲۵۰۰۰۰ تومان
          </span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-orange-500 border-2 border-gray-300 focus:border-0 cursor-pointer"
            name="radio-colors"
            value="3"
          />
          <span className="mr-1 text-sm text-gray-400">
            بین ۲۵۰۰۰۰ تا ۴۰۰۰۰۰ تومان
          </span>
        </label>
      </div>
    </div>
  );
};
export default PriceFilter;
