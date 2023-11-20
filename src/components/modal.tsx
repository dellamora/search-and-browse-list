import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";
import Image from "next/image"
import { Tools } from "~/domain/interfaces";

const franLinda = "/example.png"
const toolName = "CONTA AZUL"


type Props = {
  isOpen: boolean;
  onClose: () => void;
  tool?: Pick<Tools, "app_id" | "name">;
};

const Modal = ({ isOpen, onClose,tool }: Props): JSX.Element => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }

  return createPortal(
    <>
      {isOpen && tool && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none fixed z-50 flex h-screen  w-screen  items-center justify-center"
          >
            <div className="pointer-events-auto relative flex h-auto max-h-screen flex-col overflow-y-hidden  rounded-lg bg-white md:w-3/5 lg:max-h-[90vh] lg:max-w-7xl p-8 ">
              <button
                className="absolute top-1 right-1 block md:hidden"
                onClick={() => {
                  onClose();
                }}
              >
                X
              </button>
              <div className="flex  flex-col justify-between">
              <div className="flex items-center">
                <div 
                  className="relative aspect-video w-44 overflow-hidden h-20">
                <Image 
                    src={franLinda} 
                    layout="fill" 
                    objectFit="contain" 
                    alt="tool's logo"
                    />
                </div>
                  <div className="">
                    <p  className="transition-colors group-hover:text-blue-400 text-sm text-black">
                      {tool.name}
                    </p>
                    <button className="border rounded-md bg-blue-400 text-bold text-white px-8">
                      acessar
                    </button>
               </div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold uppercase">ultimas ferramentas visualizadas</h1>
                <div className="flex flex-row gap-2">
                  {/* <Card />
                  <Card/>
                  <Card/> */}
                </div>
              </div>
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



