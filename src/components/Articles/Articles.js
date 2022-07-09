import { Grid, TextField, Toolbar } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
import Article from "./Article/Article";
import { getArticles } from "../../services/service";

import { useQuery,useInfiniteQuery } from "react-query";
import axios from "axios";



const Articles = () => {
  const totalPages=100
  const classes = useStyles();
  // const [pageNum, setPageNum] = useState(0);

  // const {isLoading, data }= useQuery('articles', ()=>getArticles(pageNum))
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery('articles', 
      ({pageParam=0})=> getArticles(pageParam), {
        getNextPageParam: (lastPage, allPages)=> {
          const maxPages = lastPage.length * totalPages / 10;
          
          const nextPage = allPages.length+1;
      console.log("LastPage",allPages, nextPage)

          return nextPage <= maxPages ? nextPage : undefined
        }
      })
      // console.log(data)

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

  return(
    <>
     
      {isLoading ? (
        "Loading..."
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
          {data.pages.map((page) => (
            page.map((article) => (
              <Grid item xs={12} sm={4} key={article._id}>
                <Article article={article} />
                {/* {console.log(article)} */}
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
