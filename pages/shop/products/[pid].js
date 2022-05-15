import React from "react";
import Navbar from "@/components/Layout/Navbar";
import ProductDetail from "@/components/Shop/Product/ProductDetail";
import Footer from "@/components/Layout/Footer";

const SingleProduct = () => {
  return (
    <React.Fragment>
      <ProductDetail />
      <Footer />
    </React.Fragment>
  );
};

export default SingleProduct;
