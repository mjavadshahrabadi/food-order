const CheckoutForm = () => {
  return (
    <form className="md:max-w-4xl md:mx-auto bg-white p-4 rounded-md shadow-md mb-10 mx-5 ">
      <h3 className="text-gray-600 font-semibold">اطلاعات سفارش</h3>
      <div className="mt-4">
        <label
          htmlFor="address"
          className="text-[15px] text-gray-500 font-semibold"
        >
          آدرس:
        </label>
        <input
          placeholder="آدرس خود را وارد کنید ...."
          id="address"
          type="text"
          className="w-full bg-gray-100 rounded-md px-4 py-2 text-[14px] focus:outline-0 mt-2 text-gray-500"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="request"
          className="text-[15px] text-gray-500 font-semibold"
        >
          درخواست سفارشی:
        </label>
        <input
          placeholder="درخواست خود را ثبت کنید ..."
          id="request"
          type="text"
          className="w-full bg-gray-100 rounded-md px-4 py-2 text-[14px] focus:outline-0 mt-2 text-gray-500"
        />
      </div>
      <button
        type="button"
        className="bg-[#ff8e28] text-white mt-4 px-4 py-2 rounded-md hover:scale-95 transition-all duration-300 ease-out"
      >
        پرداخت
      </button>
    </form>
  );
};
export default CheckoutForm;
