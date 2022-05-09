import React from "react";
import Navbar from "@/components/Layout/Navbar";
import AboutHeader from "@/components/About/AboutHeader";
import AboutMain from "@/components/About/AboutMain";
import Footer from "@/components/Layout/Footer";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <AboutHeader />
      <AboutMain />
      <Footer />
    </React.Fragment>
  );
};
export default AboutPage;
