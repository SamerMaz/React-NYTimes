import axios from "axios";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Articles from "./components/Articles/Articles";
import Search from "./components/Search";
import { getArticles, searchArticles } from "./services/service";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0); // 0 will show from 1-10

 // Create a client
 const queryClient = new QueryClient()

  //console.log(articles)

  // const handleScroll = (event) => {
  //   const { scrollTop, clientHeight, scrollHeight } = event.window.EventTarget; //.currentTarget;
  //   console.log(scrollHeight);
  //   if (scrollHeight - scrollTop === clientHeight) {
  //     setPage((prev) => prev + 1);
  //     getArticles(page)
  //   }
  // };




  
  // useEffect(() => {
  //   setLoading(true)
  //   getArticles(page).then((articles)=>{
  //     if(page >1){
  //       let arr = [articles,  ...articles];
  //       console.log(articles)
  //       setTimeout(()=>{
          
  //         setArticles(arr)
  //         setLoading(false)
  //       }, 5000)
  //     } else {
  //       setArticles(articles);
  //     }
      
  //     setLoading(false);
  // }).catch((error)=>{ console.log(error)})
      
    
  //   // getArticles();
    
  // }, [page]);

  const searchArticle = async (text) => {
    setLoading(true);
    searchArticles(text).then((articles)=>{
      setArticles(articles)
    })
    
    setLoading(false);
  };

  // console.log(page);

  return (
<QueryClientProvider client={queryClient}>

<Search searchArticles={searchArticle} />
    
    <div style={{marginTop:"6rem"}}>
      <Articles />
    </div>
</QueryClientProvider>
   
  );
};




export default App;
