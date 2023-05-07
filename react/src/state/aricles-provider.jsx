import React, { createContext, useContext, useEffect, useState } from "react";
import articlesSingleton from "../services/articles-client";
import SplashLoading from "../components/Splash/splash";

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
      // ------------------------------------------
      setTimeout(()=>{setLoading(false)},2000) // !!!don't forget to remove the setTimeout
      // ------------------------------------------
    }
    fetchArticles();
  }, []);

  if (loading) {
  // if (true) {
    return <SplashLoading/>
    // return 
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
