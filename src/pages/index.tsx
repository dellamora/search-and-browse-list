import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "~/components/card";
import Modal from "~/components/modal";
import { type Tools } from "~/domain/interfaces";

const toolsPerpage = 12;

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTool, setCurrentTool] = useState<string | null>(null);
  const [LastToolsViewed, setLastToolsViewed] = useState<Tools[]>([]);

  const { isLoading, error, data } = useQuery<Tools[]>({
    queryKey: ["PlugaAPI"],
    queryFn: () =>
      fetch("https://pluga.co/ferramentas_search.json").then((res) =>
        res.json()
      ),
  });

  const filteredTools = data?.filter((tool) => {
    return tool.name.toLowerCase().includes(query.toLowerCase());
  });

  const totalItems = filteredTools?.length ?? 0;
  const totalPages = Math.ceil(totalItems / toolsPerpage);

  const paginatedTools = filteredTools?.slice(
    (currentPage - 1) * toolsPerpage,
    currentPage * toolsPerpage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCurrentTool = (tool: Tools) => {
    setCurrentTool(tool.app_id)
    let toolAux = LastToolsViewed
    toolAux.push(tool)
    if(toolAux.length > 3) toolAux = toolAux.splice(1)
    setLastToolsViewed(toolAux)
  }
  
  if (isLoading) return <div>Loading</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="flex flex-col  gap-4 bg-[#1E1E1E] p-12 min-h-screen">
      <div className="relative mt-2 flex items-center">
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={(e) => {
            setCurrentPage(1); 
            setQuery(e.target.value);
          }}
          placeholder="Buscar +90 ferramentas..."
          className="pl-6 group border rounded-full transition-colors bg-[#1E1E1E] border-black focus:border-blue-400 focus:placeholder:text-blue-400 roudend block w-full py-3 pr-14 text-white placeholder:text-gray-400 placeholder:text-xl lg:text-xl sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex flex-wrap gap-5 gap-y-8 justify-center">
        {paginatedTools?.map((tool) => (
          <div key={tool.app_id}>
            <Card tool={tool}  onClick={() => handleCurrentTool(tool)} className="border  border-black  hover:border-blue-400 "/>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex mt-4 justify-center">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-black text-white" : "bg-[#131313] text-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      <Modal
        isOpen={!!currentTool}
        onClose={() => setCurrentTool(null)}
        tool={paginatedTools?.find(p => p.app_id === currentTool)}
        LastToolsViewed={LastToolsViewed}
      />
    </div>
  )
}
