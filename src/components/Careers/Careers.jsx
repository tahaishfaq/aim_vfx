import React from "react";
import CareersHero from "./CareersHero";
import Persntage from "../Persentage/Persentage";
import CareersCards from "./CareersCards";
import CareersCards2 from "./CareersCards2";
import FooterForm from "../Footer/Footer";
import Compare from "../Campare/Compare";

const Careers = () => {
  //  'main div of Careers component all component rendered in '
  return (
    <div className="solution-page">
      <CareersHero />
      <Persntage />
      <CareersCards />
      <CareersCards2 />
      <FooterForm />
    </div>
  );
};

export default Careers;
