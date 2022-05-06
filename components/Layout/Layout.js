import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

Layout.defaultProps = {
  title: "Food Order Application",
};

export default Layout;
