import axios from "axios";
import React, { useEffect, useState } from "react";
import Articles from "./components/Articles/Articles";
import Search from "./components/Search";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0); // 0 will show from 1-10

  //console.log(articles)

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.window.EventTarget; //.currentTarget;
    console.log(scrollHeight);
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
      );
      const articles = res.data.response.docs;
      setArticles(articles);
      setLoading(false);
    };
    getArticles();
  }, [page]);

  const searchArticles = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  console.log(page);

  return (
    <div onScroll={handleScroll}>
      <Search searchArticles={searchArticles} />

      <Articles loading={loading} articles={articles} />
    </div>
  );
};

export default App;
