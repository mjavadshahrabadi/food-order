const ReviewForm = () => {
  return (
    <form className="w-full px-5">
      <div className="flex flex-col space-y-2 mt-4">
        <label htmlFor="review" className="text-gray-500 font-semibold">
          نظر:{" "}
        </label>
        <input
          type="text"
          id="review"
          placeholder="نظر خود را وارد کنید ..."
          className="bg-gray-100 rounded-md focus:outline-0 px-5 py-3 text-sm text-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <label htmlFor="username" className="text-gray-500 font-semibold">
          نام:{" "}
        </label>
        <input
          type="text"
          id="username"
          placeholder="نام خود را وارد کنید ..."
          className="bg-gray-100 rounded-md focus:outline-0 px-5 py-3 text-sm text-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <label htmlFor="username" className="text-gray-500 font-semibold">
          ایمیل:{" "}
        </label>
        <input
          type="email"
          id="email"
          placeholder="ایمیل خود را وارد کنید ..."
          className="bg-gray-100 rounded-md focus:outline-0 px-5 py-3 text-sm text-gray-500"
        />
      </div>
      <button
        type="button"
        className="text-[#ff8e28] px-4 py-2 border-2 border-[#ff8e28] rounded-md mt-5 hover:bg-orange-400 hover:text-white transition-all duration-300 ease-out"
      >
        ارسال
      </button>
    </form>
  );
};
export default ReviewForm;
