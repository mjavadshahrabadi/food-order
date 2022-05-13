import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Main from "@/components/Shop/Main";
import Footer from "@/components/Layout/Footer";

const ShopPage = () => {
  return (
    <React.Fragment>
      <section className="bg-[#F5F4F4] h-full w-full border border-transparent bg-opacity-50">
        <Navbar />
        <Main />
        <Footer />
      </section>
    </React.Fragment>
  );
};
export default ShopPage;
