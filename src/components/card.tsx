/* eslint-disable @next/next/no-img-element */
import { type Tool } from "~/domain/interfaces";

type Props = {
    tool: Tool
    onClick?: () => void;
    className?: string;
  };
  
  const Card = ({ tool, onClick, className }: Props) => {
    return (
      <div
        onClick={onClick} 
        style={{background: tool.color}}    
        className={`roudend rounded-md h-40 w-40 items-center  p-8 pb-3 flex flex-col justify-between ${className}`}
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={tool.icon}
            alt="tool's logo"
            className={`p-2 rounded-md`}
            style={{background: tool.color}}
          />
        </div>
        <p className="transition-colors text-sm mt-1 text-center  text-white">
          {tool.name}
        </p>
      </div>
    )
  }
  
  export default Card;
  