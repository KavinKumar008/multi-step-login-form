import React, { useRef, useState } from "react";
import LeftContainer from "../leftcontainer/LeftContainer";
import FinishupPage from "../fourthpage/FinishupPage";

const AddonPage = ({
  setCurrentPage,
  showPage,
  setShowPage,
  selectedData,
  storedData,
  setStoredData,
  addPlans,
}) => {
  const [selectedCheckbox, setselectedCheckbox] = useState([]);

  const idRef = useRef(0);

  const [isChecked1, setIsChecked1] = useState();
  const [isChecked2, setIsChecked2] = useState();
  const [isChecked3, setIsChecked3] = useState();

  function handleForward() {
    setCurrentPage("finishPage");
    setShowPage(true);
    setStoredData((prev) => {
      const updateState = [...prev, selectedCheckbox];
      return updateState;
    });
  }

  function handleBackward() {
    setCurrentPage("planPage");
  }
  // console.log(selectedData);

  const handleCheckboxSelected = (service, amount) => {
    const newId = idRef.current + 1;
    idRef.current = newId;
    setselectedCheckbox((prevValue) => {
      const isSelected = prevValue.some(
        (item) => item.addon.addons === service
      );
      if (isSelected) {
        // console.log("already selected remove from the state");
        return prevValue.filter((item) => item.addon.addons !== service);
      } else {
        return [
          ...prevValue,
          { addon: { id: newId, addons: service, cash: amount } },
        ];
      }
      // return [
      //   ...prevValue,
      //   { addon: { id: newId, addons: service, cash: amount } },
      // ];
    });
  };

  const handleCheckBoxChange1 = (e) => {
    handleCheckboxSelected("Online service", "+$1/mo");
    setIsChecked1(e.target.checked);
  };

  const handleCheckBoxChange2 = (e) => {
    handleCheckboxSelected("Larger storage", "+$2/mo");
    setIsChecked2(e.target.checked);
  };

  const handleCheckBoxChange3 = (e) => {
    handleCheckboxSelected("Customizable Profile", "+$2/mo");
    setIsChecked3(e.target.checked);
  };

  console.log(selectedCheckbox);
  // console.log(selectedData);
  console.log(storedData);

  return (
    <div className="h-screen flex justify-center items-center max-sm:h-0">
      <main className="bg-white w-8/12 h-5/6 rounded-lg flex  p-4 gap-16 shadow-lg max-sm:block max-sm:w-full max-sm:p-0 max-sm:bg-[rgb(0,255,255)] max-sm:shadow-none max-lg:w-auto">
        <LeftContainer />
        <section className="w-[70%] p-5 max-sm:w-full max-sm:mt-32 max-sm:bg-white max-sm:relative max-sm:h-[420px]">
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-3">
            <h3 className="text-3xl font-bold text-blue-900 max-sm:text-4xl">
              Pick add-ons
            </h3>
            <p className="text-gray-400 text-sm max-sm:text-xl">
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-8 max-lg:pt-10 max-lg:pr-4 max-sm:p-1">
            <div
              className={`flex gap-8 items-center border ${
                isChecked1 ? "border-blue-600" : "border-gray-400"
              } rounded-md  p-4 max-sm:p-1`}
            >
              <input
                type="checkbox"
                value={isChecked1}
                onClick={handleCheckBoxChange1}
              />
              <div className="flex items-center gap-32">
                <div>
                  <p className="text-violet-950 text-sm font-medium max-sm:text-xs">
                    Online service
                  </p>
                  <p className="text-gray-400 text-xs font-normal">
                    Access to multiplayer games
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 text-sm font-medium">
                    +$1/mo
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex gap-8 items-center border ${
                isChecked2 ? "border-blue-600" : "border-gray-400"
              } rounded-md p-4 max-sm:p-1`}
            >
              <input
                type="checkbox"
                value={isChecked2}
                onClick={handleCheckBoxChange2}
              />
              <div className="flex items-center gap-32">
                <div>
                  <p className="text-violet-950 text-sm font-medium">
                    Larger storage
                  </p>
                  <p className="text-gray-400 text-xs font-normal">
                    Extra 1TB of cloud save
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 text-sm font-medium">
                    +$2/mo
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`flex gap-8 items-center border ${
                isChecked3 ? "border-blue-600" : "border-gray-400"
              } rounded-md p-4 max-sm:p-1`}
            >
              <input
                type="checkbox"
                value={isChecked3}
                onClick={handleCheckBoxChange3}
              />
              <div className="flex items-center gap-32">
                <div>
                  <p className="text-violet-950 text-sm font-medium">
                    Customizable Profile
                  </p>
                  <p className="text-gray-400 text-xs font-normal">
                    Custom theme on your profile
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 text-sm font-medium">
                    +$2/mo
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-20 max-sm:hidden max-lg:mt-16">
            <button
              className="text-blue-950 text-sm font-bold"
              onClick={handleBackward}
            >
              Go Back
            </button>
            <button
              type="button"
              className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs"
              onClick={handleForward}
            >
              Next Step
            </button>
          </div>
        </section>
        <div className="flex justify-between mt-16 bg-white p-3 min-[640px]:hidden ">
          <button
            className="text-blue-950 text-sm font-bold max-sm:text-lg"
            onClick={handleBackward}
          >
            Go Back
          </button>
          <button
            type="button"
            className="bg-blue-900 text-white py-3 px-4 rounded-md text-xs max-sm:px-6 max-sm:text-lg max-sm:font-medium"
            onClick={handleForward}
          >
            Next Step
          </button>
        </div>
      </main>
      {/* {showPage ? (
        <FinishupPage showPage={showPage} setShowPage={setShowPage} />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default AddonPage;
