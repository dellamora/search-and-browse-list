/* eslint-disable @next/next/no-img-element */
import { type Tools } from "~/domain/interfaces";

type Props = {
    tool: Tools
    onClick?: () => void;
    className?: string;
  };
  
  const Card = ({ tool, onClick, className }: Props) => {
    return (
      <div
        onClick={onClick}     
        className={`group transition-colors  roudend rounded-md h-40 w-40 items-center  p-8 pb-3 flex flex-col justify-between ${className}`}
      >
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={tool.icon}
            alt="tool's logo"
            className={`w-full h-full object-cover bg-[${tool?.color}`}
          />
        </div>
        <p className="transition-colors group-hover:text-[#9C96FD] text-sm mt-1 text-center text-white">
          {tool.name}
        </p>
      </div>
    )
  }
  
  export default Card;
  