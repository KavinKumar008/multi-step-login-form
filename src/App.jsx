import React from "react";
import PersonalInfo from "./firstPage/PersonalInfo";
import PlansPage from "./secondpage/PlansPage";
import AddonPage from "./thirdpage/AddonPage";
import FinishupPage from "./fourthpage/FinishupPage";
import ParentForAll from "./parentcomponent/ParentForAll";

const App = () => {
  return (
    <>
      <ParentForAll />
      <PersonalInfo />
      <PlansPage />
      <AddonPage />
      <FinishupPage />
      {/* <Sample /> */}
    </>
  );
};

export default App;
