import { useContext } from "react";
import { SearchContext } from "../components/contexts/SearchContext";

export const useSearch = () => {
  const searchContext = useContext(SearchContext);

  if (searchContext === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return searchContext;
};