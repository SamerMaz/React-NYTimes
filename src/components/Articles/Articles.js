import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getArticles, searchArticles } from "../../services/service";
import Article from "./Article/Article";
import useStyles from "./styles";

import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import Search from "../Search";



const Articles = () => {
  const totalPages=100
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery('articles', 
      ({pageParam=0})=> getArticles(pageParam), {
        getNextPageParam: (lastPage, allPages)=> {
          const maxPages = lastPage.length * totalPages / 10;
          
          const nextPage = allPages.length+1;
      // console.log("LastPage",allPages, nextPage)

          return nextPage <= maxPages ? nextPage : undefined
        }
      })

      useEffect(()=>{
        let fetching= false;
        const onScroll = async(event)=>{
          const {scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;

          if(!fetching && scrollHeight - scrollTop <=clientHeight * 1.5){
            fetching = true;
            if(hasNextPage) await fetchNextPage();
            fetching= false;
          }
        };

        document.addEventListener('scroll', onScroll);
        return ()=>{
          document.removeEventListener('scroll', onScroll)
        }

      }, [fetchNextPage, data, hasNextPage])




      // const searchAricle = () =>{
      //   searchArticles(text).then()
      // }
     
      const searchArticle = async (text) => {
        // setLoading(true);
        searchArticles(text).then((articles)=>{
          setArticles(articles)
        })
        
        // setLoading(false);
      };

  return(
    <>
    <Search searchArticles={searchArticle}/>
     
      {isLoading ? (
        "Loading..."
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
          {data.pages.map((page) => (
            page.map((article) => (
              <Grid item xs={12} sm={4} key={article._id}>
                <Article article={article} articleId={article}/>
              </Grid>
            ))))}
          </Grid>
          <div>Loading...</div>
        </div>
      )}
    
  </>
  )
}

export default Articles;
