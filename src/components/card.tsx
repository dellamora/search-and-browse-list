import React, { useState } from "react";
import Modal from "./modal";
import Image from "next/image"

type Props = {
    name: string;
    logo: string;
    color?: string;
    onClick?: () => void;
}
const Card = ({logo,name, onClick}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            
            className="group border transition-colors bg-blue-500 border-gray-400 hover:border-blue-400 roudend rounded-md h-44 w-44 pt-12 px-8 pb-3 flex flex-col items-center justify-between"
            style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 18px 2px"}}
        >
            <div 
            className="relative aspect-video w-full overflow-hidden">
            <Image 
                src={logo} 
                layout="fill" 
                objectFit="cover" 
                alt="tool's logo"
            />
            </div>
            <button onClick={onClick} className="transition-colors group-hover:text-blue-400 text-sm">
                {name}
            </button>
            
        </div>
    )
}

export default Card;