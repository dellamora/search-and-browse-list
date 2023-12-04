/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";
import { type Tool } from "~/domain/interfaces";
import Card from "./card";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  tool: Tool  | null;
  LastToolsViewed: Tool[]
};

const Modal = ({ isOpen, onClose, tool, LastToolsViewed }: Props): JSX.Element => {
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
            <div className="text-white pointer-events-auto relative flex h-auto w-fit flex-col overflow-y-hidden rounded-lg p-8 " style={{background: tool.color}}>
              <button
                className="absolute top-1 right-2 block text-white"
                onClick={() => {
                  onClose();
                }}
              >
                X
              </button>
              <div className="flex flex-col justify-center items-center">
              <div className="relative w-24 h-24 overflow-hidden">
                <img
                  src={tool.icon}
                  alt="tool's logo"
                  className={`p-2 rounded-md`}
                  style={{background: tool.color}}
                />
              </div>
                  <div className="pl-4 flex flex-col gap-1  justify-center items-center w-1/2 ">
                    <p  className="transition-colors group-hover:text-blue-400 text-4xl font-extrabold ">
                      {tool.name}
                    </p>
                    <a 
                      className="rounded-md py-1 px-2 font-semibold text-white transition-colors hover:bg-[#000000]/20" 
                      href={tool.link}
                      target="_blank"
                    >
                      Saiba mais
                    </a>
              </div>
              <div className="flex flex-col mt-4">              
                <h1 className="font-bold text-2xl">Últimas ferramentas visualizadas:</h1>
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



