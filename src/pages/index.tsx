import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "~/components/card";
import { type Tools } from "~/domain/interfaces";


export default function Home() {
  const [query, setQuery] = useState("");

  const { isLoading, error, data,  } = useQuery<Tools[]>({
    queryKey: ["PlugaAPI"],
    queryFn: () =>
      fetch("https://pluga.co/ferramentas_search.json").then(res =>
        res.json(),
      ),
  });

  const filterTools = data?.filter(tool => {
    return tool.name.toLowerCase().includes(query.toLowerCase())
  })

  if (isLoading) return <div>Loading</div>;

  if (error) return <div>An error has occurred: </div>;

  
  return (
    <div className="flex flex-col p-8  gap-4">
      <div className="relative mt-2 flex items-center">
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar +90 ferramentas..."
          className="pl-6 group border rounded-full transition-colors border-gray-400  focus:border-blue-400 focus:placeholder:text-blue-400 roudend block w-full  py-3 pr-14 text-gray-600    placeholder:text-gray-400  placeholder:text-xl lg:text-xl  sm:text-sm sm:leading-6"
        />
      </div>
      {filterTools?.map(tool => {
        return (
          <div key={tool.app_id}>
          <Card logo={tool.icon} name={tool.name}/>
          </div>
        )
      })}
    </div>
  );
}
