import React from "react";
import Banner from "../src/Componet/Banner/Banner";
import MemberShip from "./MemberShip";
import ZeroToMastery from "./ZeroToMastery";
import Testimonials from "./Testimonials/Testimonials";
import ImgHero from "./ImageHero/ImgHero";
import BenefitsSection from "./BenefitsSection";
import InstructorsSection from "./InstructorsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ImgHero />
      <BenefitsSection />
      <InstructorsSection />
      <Testimonials />
      <ZeroToMastery />
      <MemberShip />
    </div>
  );
};

export default Home;
