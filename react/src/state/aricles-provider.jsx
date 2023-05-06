import React, { createContext, useContext, useEffect, useState } from "react";
import articlesSingleton from "../services/articles-client";

const ArticlesContext = createContext(
    {loading: false, articles: []}
);

export function ArticlesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      await articlesSingleton.initialize();
      setArticles(articlesSingleton.articles);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  if (loading) {
    return <div className="d-flex justify-content-center">Loading...</div>;
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
