/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";
import { type Tools } from "~/domain/interfaces";
import Image from "next/image";
import Card from "./card";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  tool?: Tools;
  LastToolsViewed?: Tools[] | null;
};

const Modal = ({ isOpen, onClose,tool,LastToolsViewed }: Props): JSX.Element => {
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
            <div className="text-white pointer-events-auto relative flex h-auto w-fit flex-col overflow-y-hidden  rounded-lg bg-[#1E1E1E] md:w-1/2 lg:max-h-[90vh]  p-8 ">
              <button
                className="absolute top-1 right-1 block md:hidden"
                onClick={() => {
                  onClose();
                }}
              >
                X
              </button>
              <div className="flex  flex-col justify-center">
              <div className="flex items-center">
                <div 
                  className="relative aspect-video w-44 overflow-hidden h-20">
                <Image 
                    src={tool.icon} 
                    layout="fill" 
                    objectFit="contain" 
                    alt="tool's logo"
                    />
                </div>
                  <div className="pl-4">
                    <p  className="transition-colors group-hover:text-blue-400 text-3xl ">
                      {tool.name}
                    </p>
                    <a className=" rounded-md 0 text-bold hover:underline text-xl" href={tool.link}>
                      Saiba mais
                    </a>
               </div>
              </div>
              <div className="flex flex-col">              
                <h1 className="font-bold uppercase">ultimas ferramentas visualizadas </h1>
                <div className="flex flex-row gap-2">
                {LastToolsViewed?.map((tool) => {
                  return (
                    <Card tool={tool} key={tool.app_id} />
                  )
                })}
                  
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
  )
}

export default Modal;



