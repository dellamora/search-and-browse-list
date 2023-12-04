import Card from "~/components/card";
import Modal from "~/components/modal";
import { type Tool } from "~/domain/interfaces";
import { useState } from "react";
type GridListProps = {
  query?: string
  paginatedTools: Tool[] | undefined
  
}
const GridList = ({paginatedTools }: GridListProps) => {
  const [currentTool, setCurrentTool] = useState<Tool | null>(null);
  const [LastToolsViewed, setLastToolsViewed] = useState<Tool[]>([]);

  const handleCurrentTool = (tool: Tool) => {
    setLastToolsViewed((prevTools) => {
      const isToolAlreadyPresent = prevTools.some((t) => t.app_id === tool.app_id);
  
      if (!isToolAlreadyPresent) {
        return [...prevTools, tool].slice(-3);
      }
  
      return prevTools;
    });
  
    setCurrentTool(tool);
  };
  
    return (
        <div>   
          <div className="flex flex-wrap gap-5 gap-y-8 justify-center min-h-[22rem]">
          {paginatedTools?.map((tool) => (
            <div key={tool.app_id}>
              <Card tool={tool}  onClick={() => handleCurrentTool(tool)} className="cursor-pointer"/>
            </div>
          ))}
        </div>
        {paginatedTools?.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <p className="text-2xl text-gray-500">Nenhuma ferramenta encontrada</p>
          </div>
        )}    
        <Modal
          isOpen={!!currentTool}
          onClose={() => setCurrentTool(null)}
          tool={currentTool}
          LastToolsViewed={LastToolsViewed}
        />
        </div>
    )
}

export default GridList;