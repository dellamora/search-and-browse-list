import React, { useState } from "react";
import Modal from "./modal";
import Image from "next/image"

const franLinda = "/example.png"
const toolName = "CONTA AZUL"
const Card = ( ) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            className="group border transition-colors border-gray-400 hover:border-blue-400 roudend rounded-md h-44 w-44 pt-12 px-8 pb-3 flex flex-col items-center justify-between"
            style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 18px 2px"}}
        >
            <div 
            className="relative aspect-video w-full overflow-hidden">
            <Image 
                src={franLinda} 
                layout="fill" 
                objectFit="cover" 
                alt="tool's logo"
            />
            </div>
            <button onClick={() => setIsOpen(true)} className="transition-colors group-hover:text-blue-400 text-sm">
                {toolName}
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}

export default Card;