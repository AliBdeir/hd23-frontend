import { useQuery } from "@tanstack/react-query";

export const useRandomQuote = () => {
  const query = useQuery({
    queryKey: ["randomQuote"],
    queryFn: () => fetch("https://api.quotable.io/random").then((res) => res.json()),
    refetchInterval: 10000, // Refetch every 10 seconds
  });
  return (query.data?.content ?? "") as string; // Use optional chaining in case data is undefined during initial fetch
};
