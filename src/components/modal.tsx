import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props): JSX.Element => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }
  return createPortal(
    <>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none fixed z-50 flex h-screen  w-screen  items-center justify-center"
          >
            <div className="pointer-events-auto relative flex h-auto max-h-screen w-full flex-col overflow-y-hidden  rounded-lg bg-blue-400   md:w-3/5 lg:max-h-[90vh] lg:max-w-7xl ">
              <button
                className="absolute top-1 right-1 block md:hidden"
                onClick={() => {
                  onClose();
                }}
              >
                X
              </button>
              <div className="flex grow flex-col overflow-y-auto pt-4 px-8 pb-2 text-black">
                content here
              </div>
            </div>
          </motion.div>
          <Backdrop
            onClose={() => {
              onClose();
            }}
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;