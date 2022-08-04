import axios from "axios";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Search from "./components/Search";
import { getArticles, searchArticles } from "./services/service";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0); // 0 will show from 1-10
  const [text, setText] = useState([])

  // const {data, isLoading, isError} = useQuery(['articles',page], (text) => searchArticles(text).then((articles)=>{
  //   setArticles(articles)
  // }));
  // console.log("SEARCHHHHH",data, isLoading, isError)






  return (

<div>
    


    <div style={{marginTop:"6rem"}}>
    {/* <Search /> */}
      <Articles/>
    </div>
</div>
   
  );
};




export default App;
