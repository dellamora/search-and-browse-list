import { type Tool } from "~/domain/interfaces";

type PaginationComponentProps = {
    filteredTools: Tool[] | undefined
    currentPage: number
    handlePageChange: (page: number) => void
    toolsPerPage: number
    totalPages: number
}

const PaginationComponent = ({currentPage, handlePageChange, totalPages}:PaginationComponentProps) => {
    

    return (
        <div className="flex mt-4 justify-center">
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)} 
                    className={`mx-1 px-3 py-1 rounded border border-blue-300  ${
                    currentPage === index + 1 ? "bg-blue-300 text-white" : "bg-white text-gray-500"
                    }`}
                >
                    {index + 1}
                </button>
            ))}
        </div> 
    )
}

export default PaginationComponent;




