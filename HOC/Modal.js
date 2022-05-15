import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(open);
    return () => {
      setMounted(false);
    };
  }, [open]);
  return mounted
    ? createPortal(children, document.querySelector("#modal"))
    : null;
};

export default Modal;
