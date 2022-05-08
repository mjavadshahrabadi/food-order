import React from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import WhyUs from "@/components/Home/WhyUs";
import PopularFood from "@/components/Home/PopularFood";
import FoodList from "@/components/Home/FoodList";
import CustomerFeedback from "@/components/Home/CustomerFeedback";
import BlogContainer from "@/components/Home/BlogContainer";
import Footer from "@/components/Layout/Footer";

const IndexPage = () => {
  return (
    <Layout title="Home Page">
      <Header />
      <WhyUs />
      <PopularFood />
      <FoodList />
      <CustomerFeedback />
      <BlogContainer />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
