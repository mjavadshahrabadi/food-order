import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Main from "@/components/Blog/Main";

import Footer from "@/components/Layout/Footer";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;
