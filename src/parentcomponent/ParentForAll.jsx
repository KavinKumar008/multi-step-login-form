import React, { useState } from "react";
import PersonalInfo from "../firstPage/PersonalInfo";
import PlansPage from "../secondpage/PlansPage";
import AddonPage from "../thirdpage/AddonPage";
import FinishupPage from "../fourthpage/FinishupPage";
import SuccessPage from "../fifthpage/SuccessPage";
import LeftContainer from "../leftcontainer/LeftContainer";
import { data } from "autoprefixer";

const ParentForAll = () => {
  const [currentPage, setCurrentPage] = useState("info");

  const [storedData, setStoredData] = useState([]);

  function addplans(data) {
    setStoredData((prev) => [...prev, data]);
  }

  return (
    <div>
      {currentPage === "info" && (
          <LeftContainer currentPage={currentPage} />
        ) && (
          <PersonalInfo
            setCurrentPage={setCurrentPage}
            storedData={storedData}
            setStoredData={setStoredData}
          />
        )}
      {currentPage === "planPage" && (
        <PlansPage
          setCurrentPage={setCurrentPage}
          addplans={addplans}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}
      {currentPage === "addOns" && (
        <AddonPage
          setCurrentPage={setCurrentPage}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}
      {currentPage === "finishPage" && (
        <FinishupPage
          setCurrentPage={setCurrentPage}
          storedData={storedData}
          setStoredData={setStoredData}
        />
      )}
      {currentPage === "successPage" && (
        <SuccessPage setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default ParentForAll;
