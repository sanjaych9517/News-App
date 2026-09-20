import { useState } from "react";
import { createContext, useContext } from "react";
import api from "../config/axios";

// create context
// provide
// useContext

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=india") => {
    setLoading(true);
    try {
      const responce = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setLoading(false);
      return responce.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};
export { NewsContextProvider, useNewsContext };
