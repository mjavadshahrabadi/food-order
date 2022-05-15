import React from "react";
import CheckoutList from "@/components/Shop/Checkout/CheckoutList";
import CheckoutForm from "@/components/Shop/Checkout/checkoutForm";
import Footer from "@/components/Layout/Footer";
const Checkout = () => {
  return (
    <React.Fragment>
      <section className="bg-[#F5F4F4] w-full h-full border border-transparent">
        <CheckoutList />
        <CheckoutForm />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Checkout;
