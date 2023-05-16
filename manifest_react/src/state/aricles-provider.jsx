import React, { createContext, useContext, useEffect, useState } from "react";
import SplashLoader from "../view/components/SplashLoader/SplashLoader";
import articlesSingleton from "../services/articles-client";

const ArticlesContext = createContext(
    {loading: false, articles: []}
);

export function ArticlesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let timeoutId;
    async function fetchArticles() {
      await articlesSingleton.initialize();
      setArticles(articlesSingleton.articles);
      timeoutId = setTimeout(()=>setLoading(false), 2000);
    }
    fetchArticles();
    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  if (loading) {
    return <SplashLoader/>
  }

  return (
    <ArticlesContext.Provider value={{articles, loading}}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error("useArticles must be used within a ArticlesProvider");
  }
  return context;
}
