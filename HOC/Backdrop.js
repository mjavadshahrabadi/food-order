import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Backdrop = ({ children, open }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(open);

    () => setMounted(false);
  }, [open]);
  return mounted
    ? createPortal(children, document.querySelector("#backdrop"))
    : null;
};

export default Backdrop;
