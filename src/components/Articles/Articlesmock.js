import { Grid, TextField, Toolbar } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
import Article from "./Article/Article";
import { getArticles } from "../../services/service";


const TOTAL_PAGES = 100;

const Articles = () => {

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [pageNum, setPageNum] = useState(0); // 0 will show from 1-10
  const [lastElement, setLastElement] = useState(null);

  const classes = useStyles();


  const observer = useRef(new IntersectionObserver(
    (entries) => {
      const first = entries[0];
      if(first.isIntersecting){
        setPageNum((no)=> no +1);
      }
    }
  )
);


  // const handleScroll = (event) =>{
  //   const { scrollTop, clientHeight, scrollHeight } = event.target //.currentTarget;
  //   // console.log(scrollTop)
  //   var bottom = scrollHeight-scrollTop - clientHeight <50
  //   if(bottom){
  //     let pg = page + 1;
  //     setPage(pg);
  //     // getArticles(pg)
  //   }
  // }

  useEffect(() => {
    if(pageNum <=TOTAL_PAGES){
    setLoading(true)
    getArticles(pageNum).then((articles)=>{
      // if(pageNum >1){
        let allArticles = new Set([...articles, ...articles])
      //   let arr = [  ...articles, ...articles];
      //   // setTimeout(()=>{
          
      //     setArticles(arr)

      // } else {
        setArticles([...allArticles]);
      // }
      
      setLoading(false);

  }).catch((error)=>{ console.log(error)})
    }  
  }, [pageNum]);


  useEffect(()=>{
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if(currentElement) {
      currentObserver.observe(currentElement);
    }

    return () =>{
      if(currentElement) {
        currentObserver.unobserve(currentElement);
      }
    }
  }, [lastElement]);


  return (
    <>
      {/* {
      loading ? (
        // "Loading..."
      // ) : (
        // <div onScroll={handleScroll} style={{height:"600px", overflowY: "auto" }}>
        // <div className={classes.root}  onScroll={handleScroll} style={{height:"600px", overflowY: "auto" }} > */}
        <div className={classes.root} >
          <Grid container spacing={3}  >
            {setArticles.length >0 &&
            articles.map((article, i) => (
               i === articles.length - 1 &&
              !loading &&
              pageNum <= TOTAL_PAGES ? (
                <div
                                // key={`${user.name.first}-${i}`}
                                ref={setLastElement}
                            >
                                <Article article={article} />
                            </div>
            ): <Grid item xs={12} sm={4} key={article._id}>
            <Article article={article}/>
            {console.log(article)}
          </Grid>))}
          </Grid>
          {loading && <p className='text-center'>loading...</p>}
        </div>
        
      {/* // </div>
      // )
      // } */}
    </>
  );
};

// Articles.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   articles: PropTypes.array.isRequired,
// };

export default Articles;
