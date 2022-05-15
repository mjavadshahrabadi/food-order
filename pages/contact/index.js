import React from "react";
import Navbar from "@/components/Layout/Navbar";
import ContactHeader from "@/components/Contact/ContactHeader";
import Footer from "@/components/Layout/Footer";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F5F4F4] border border-transparent">
        <ContactHeader />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
