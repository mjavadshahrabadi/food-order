import { createContext, useState } from "react";

export const BackdropContext = createContext({
  open: false,
  showModal: () => {},
  closeModal: () => {},
});

export default function BackdropContextProivder(props) {
  const [open, setOpen] = useState([]);
  const showModal = () => {
    console.log("modal open");
    setOpen(true);
  };

  const closeModal = () => {
    console.log("modal close");
    setOpen(false);
  };

  const valueContext = {
    open: open,
    showModal: showModal,
    closeModal: closeModal,
  };

  return (
    <BackdropContext.Provider value={valueContext}>
      {props.children}
    </BackdropContext.Provider>
  );
}
