import React from "react";
import Navbar from "@/components/Layout/Navbar";
import ContactHeader from "@/components/Contact/ContactHeader";
import Footer from "@/components/Layout/Footer";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ContactHeader />
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
