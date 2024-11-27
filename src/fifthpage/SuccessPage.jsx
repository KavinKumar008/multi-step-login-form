import React from "react";
import LeftContainer from "../leftcontainer/LeftContainer";
import { FaRegCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  return (
    <div className="h-screen flex justify-center items-center max-sm:h-0">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none max-lg:w-auto">
        <LeftContainer />
        <section className="w-[70%]  flex max-sm:w-auto max-sm:mt-32 max-sm:bg-white max-sm:relative max-sm:h-[400px] max-sm:p-5">
          <div className="flex flex-col justify-center items-center gap-6 m-auto">
            <div className="flex flex-col justify-center items-center gap-4">
              <FaRegCheckCircle className="rounded-full bg-red-400 text-5xl text-white" />
              <h3 className="text-3xl font-bold text-blue-900 max-sm:text-3xl max-sm:font-extrabold">
                Thank You!
              </h3>
            </div>
            <p className="text-center text-gray-400 text-sm max-sm:text-xl">
              Thanks for confirming your subscribtion!We hope you have{" "}
              <br className="max-sm:hidden" /> fun using our platform.If you
              ever need support,please feel <br className="max-sm:hidden" />{" "}
              free to email us at support@loremgaming.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessPage;
