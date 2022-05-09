import { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import FeedbackList from "data/feedbackList";

const CustomerFeedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(FeedbackList[0]);

  useEffect(() => {
    let step = 0;
    const timer = setInterval(() => {
      if (step >= FeedbackList.length - 1) {
        step = -1;
      }
      step += 1;
      setCurrentFeedback(FeedbackList[step]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="max-w-7xl mx-auto px-2 xl:px-0 mt-10 lg:mt-20 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 ">
        <div className="flex flex-col w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#ff8e28]">
            نظرات مشتریان
          </h2>
          <h4 className="text-gray-500 pt-4 text-md lg:text-lg font-semibold">
            مشتریان چه نظری درباره محصولات ما دارند ؟
          </h4>
          {/* carousel part */}
          <div className="border border-slate-100 shadow-md shadow-orange-100 py-4 mt-5 rounded-md w-full md:w-4/5 relative bg-white">
            {/* head */}
            <div className="flex items-center justify-between px-4">
              <p className="text-[15px] font-semibold text-gray-500">
                <span className="pl-2">{currentFeedback.username}</span>
                <small className="border-r pr-2">{currentFeedback.time}</small>
              </p>
              <div className="w-[60px] h-[60px] relative rounded-full overflow-hidden">
                <Image
                  src={currentFeedback.avatar_url}
                  layout="fill"
                  alt="feedback"
                />
              </div>
            </div>
            {/* body */}
            <p className="text-gray-400 py-4 px-4 text-justify">
              {currentFeedback.feedback}
            </p>
            {/* footer */}
            <div className="px-4 flex items-center justify-between ">
              <p className="text-[14px] text-gray-500 font-semibold">
                سفارش:
                {" " + currentFeedback.order_title}
              </p>
              <p className="flex items-center">
                <span className="text-sm font-semibold text-gray-500 pl-1 mt-0.5">
                  {currentFeedback.score}/۱۰
                </span>
                <span>
                  <FaStar className="w-4 h-4 text-yellow-400" />
                </span>
              </p>
            </div>
            {/* dot section */}
            <div className="flex items-center justify-center  relative flex-shrink-0">
              {FeedbackList.map((item) => (
                <div key={item.id}>
                  {currentFeedback.id === item.id ? (
                    <GoPrimitiveDot className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <GoPrimitiveDot className="w-3 h-3 text-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[600px] md:h-[400px] relative w-[350px] h-[250px]">
          <Image
            src="/images/feedback.jpg"
            layout="fill"
            alt="feedback-vector"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
