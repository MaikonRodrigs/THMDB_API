import React, { createContext, useState } from "react";
import useFetch from '@/hooks/useFetch'

export const GlobalContext = createContext();

export const UseDataContext = ({ children }) => {
  const [search, setSearch] = useState("adao-negro");
  

  const URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY
  const LANGUAGE = import.meta.env.VITE_API_LANGUAGE
  const REGION = import.meta.env.VITE_API_REGION
  const img_url = 'https://image.tmdb.org/t/p/original'

  return (
    <GlobalContext.Provider value={{
      search,
      setSearch,
      img_url,
      API_KEY,
      URL,
      LANGUAGE,
      REGION,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
