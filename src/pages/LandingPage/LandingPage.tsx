import React from "react";
import Header from "../../features/Header/Header";
import Footer from "../../features/Footer/Footer";
import LandingPageSection from "../../features/LandingPageSection/LandingPageSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header className="px-4 sm:px-16 lg:px-40" />
      <LandingPageSection backgroundColor="green">
        <h1>Practice and Potential</h1>
      </LandingPageSection>
      <div className="min-h-3 bg-secondary-matcha" />
      <Footer className="px-4 sm:px-16 lg:px-40" />
      <div />
    </>
  );
};

export default LandingPage;
