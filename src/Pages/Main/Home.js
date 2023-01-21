import React from "react";
import BatmanAccordion from "./Components/BatmanAccordion";
import BatmanForm from "./Components/BatmanForm";
import BatmanModal from "./Components/BatmanModal";
import BatmanReview from "./Components/BatmanReview";
import Crad from "./Components/Crad";
import Main from "./Components/Main";
import TrialNavbar from "./Components/TrialNavbar";

const Home = () => {
  return (
    <div>
      <TrialNavbar />
      <Main />
      <BatmanAccordion />
      <BatmanReview />
      <Crad />
      <BatmanForm />
      <BatmanModal />
    </div>
  );
};

export default Home;
