import axios from "axios";

export const getArticles = async (page) => {
    
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
    );
    const articles = res.data.response.docs;
    return articles
}

export const searchArticles = async (text) =>{
  const res = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
  );
  const articles = res.data.response.docs;
    return articles
}
