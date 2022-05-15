import "../styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import React, { useState } from "react";
import Backdrop from "HOC/Backdrop";
import Modal from "HOC/Modal";
import ModalDetail from "@/components/Layout/ModalDetail";

function MyApp({ Component, pageProps }) {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setBackdropOpen(false);
    setModalOpen(false);
  };
  const openModal = () => {
    setBackdropOpen(true);
    setModalOpen(true);
  };

  return (
    <React.Fragment>
      <Backdrop open={backdropOpen}>
        <div
          className="fixed inset-0 bg-gray-100 z-50 w-full h-full bg-opacity-60 cursor-pointer"
          onClick={closeModal}
        />
      </Backdrop>
      <Modal open={modalOpen}>
        <ModalDetail closeModal={closeModal} />
      </Modal>
      <Navbar openModal={openModal} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
