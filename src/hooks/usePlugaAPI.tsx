import { useQuery } from "@tanstack/react-query";
import { type Tool } from "~/domain/interfaces";

const usePlugaAPI = () => {
  const { isLoading, error, data } = useQuery<Tool[]>({
    queryKey: ["PlugaAPI"],
    queryFn: () =>
      fetch("https://pluga.co/ferramentas_search.json").then((res) =>
        res.json()
      ),
  });
return {
    isLoading,
    error,
    data
}

}

export default usePlugaAPI;