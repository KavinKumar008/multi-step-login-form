import React, { useContext, useState } from "react";
import LeftContainer from "../leftcontainer/LeftContainer";
import SuccessPage from "../fifthpage/SuccessPage";

const FinishupPage = ({
  setCurrentPage,
  showPage,
  setShowPage,
  storedData,
  setStoredData,
}) => {
  function handleForward() {
    setCurrentPage("successPage");
    showPage(true);
  }

  function handleBackward() {
    setCurrentPage("addOns");
  }

  console.log(storedData);

  return (
    <div className="h-screen flex justify-center items-center max-sm:h-0">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none max-lg:w-auto">
        <LeftContainer />
        <section className="w-[70%] py-7 flex flex-col gap-8 max-sm:w-full max-sm:mt-32 max-sm:bg-white max-sm:relative max-sm:h-[420px]">
          {/* <section className="w-[70%] py-7 flex flex-col gap-8"> */}
          <div className="flex flex-col gap-2 max-sm:pl-4">
            <h3 className="text-3xl font-bold text-blue-900 max-sm:text-4xl">
              Finishing Up
            </h3>
            <p className="text-gray-400 text-sm max-sm:text-lg">
              Double-check everything looks OK before conforming.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="bg-blue-50 w-[400px] flex justify-between p-4 max-sm:w-[360px]">
              <div>
                <p className="text-blue-950 font-xs font-semibold max-sm:text-lg">
                  Arcade (Monthly)
                </p>
                <a
                  href="#"
                  className="text-blue-500 border border-b-blue-700 text-xs max-sm:text-lg"
                >
                  Change
                </a>
              </div>
              <div>
                <span className="text-sm text-blue-950 font-bold max-sm:text-lg">
                  9/mo
                </span>
              </div>
            </div>
            <hr />
            <div className="w-[400px] flex flex-col gap-4 bg-blue-50 pb-4 max-sm:w-[360px]">
              <div className="flex justify-between bg-blue-50 px-4">
                <p className="text-gray-400 text-xs max-sm:text-lg">
                  Online Service
                </p>
                <span className="text-blue-900 text-xs max-sm:text-lg">
                  +$1/mo
                </span>
              </div>
              <div className="flex justify-between bg-blue-50 px-4">
                <p className="text-gray-400 text-xs max-sm:text-lg">
                  Larger storage
                </p>
                <span className="text-blue-900 text-xs max-sm:text-lg">
                  +$2/mo
                </span>
              </div>
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="flex justify-between items-center w-[360px]">
              <p className="text-gray-400 text-sm max-sm:text-lg max-sm:pl-3">
                Total(per month)
              </p>
              <span className="text-lg text-blue-600 font-semibold max-sm:text-2xl">
                +$12/yr
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-16 w-[450px] max-sm:w-[380px] max-sm:p-3 max-sm:mt-36 max-sm:flex  max-sm:bg-white">
            <button
              className="text-gray-400 text-sm font-bold max-sm:text-lg"
              onClick={handleBackward}
            >
              Go Back
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white font-medium py-3 px-6 rounded-md text-xs max-sm:text-lg"
              onClick={handleForward}
            >
              Confirm
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FinishupPage;
