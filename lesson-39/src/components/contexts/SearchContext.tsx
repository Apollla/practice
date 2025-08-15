import { createContext, useState } from "react";

type SearchContextType = {
  searchQuery: string;
  performSearch: (query: string) => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

