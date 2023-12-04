import { useState } from "react";
import SearchBar from "~/components/searchBar";
import usePlugaAPI from "~/hooks/usePlugaAPI";
import GridList from "./GridList";
import PaginationComponent from "./PaginationComponent ";

const toolsPerPage = 12;

const SearchToolsPage = () => {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const {
      data: data,
      isLoading,
      error,
    } = usePlugaAPI();
    
    
    const filteredTools = data?.filter((tool) => {
      return tool.name.toLowerCase().includes(query.toLowerCase());
    });
    
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    
    const paginatedTools = filteredTools?.slice(
      (currentPage - 1) * toolsPerPage,
      currentPage * toolsPerPage
    );  
    
    const totalItems = filteredTools?.length ?? 0;
    const totalPages = Math.ceil(totalItems / toolsPerPage);  
    
    if (isLoading) return <div className="text-slate-400">Loading</div>;  
    if (error) return <div className="text-slate-400"> An error has occurred: {error.message}</div>;
    return (
        <div className="p-8 flex flex-col gap-4 ">
        <SearchBar 
            query={query}  
            onChange={(e)=> {
            setCurrentPage(1); 
            setQuery(e.target.value);}} placeholder="Buscar +90 ferramentas..."
        />
        <GridList query={query} paginatedTools={paginatedTools}/>
        {totalPages > 1 && (
          <PaginationComponent filteredTools={filteredTools} currentPage={currentPage} handlePageChange={handlePageChange} toolsPerPage={toolsPerPage} totalPages={totalPages}/>
        )}
        </div>

    )
  
}

export default SearchToolsPage