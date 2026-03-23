"use client";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  isModalClosed: boolean;
  closeModal: () => void;
  className?: string;
  parentClassName?: string;
};

const Modal = ({
  children,
  isModalClosed,
  closeModal,
  className,
  parentClassName,
}: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const portal = document.getElementById("portal");
  if (!portal) return null;

  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className={`fixed top-0 z-50 h-screen w-full overflow-y-auto bg-text/25 py-28 backdrop-blur-sm transition-all delay-75 ${
        isModalClosed ? "invisible opacity-0" : ""
      } ${parentClassName}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`mx-auto w-150 overflow-y-auto bg-white rounded-2xl ${className}`}
      >
        {children}
      </div>
    </div>,
    portal,
  );
};

export default Modal;
