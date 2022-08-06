import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { articleID, getArticleById, getArticleDetails, getArticleId, getArticles } from "../../services/service";
// import ShareButton from "../ShareButton";
import Article from "./Article/Article";
import Articles from "./Articles";

const useStyles = makeStyles({
  logo: {
    // width: "80%",
    // height: '30rem',
    // flexDirection: 'row',
    // alignItems: 'center',

    display: 'block',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: '5%',
    width: "70%",
    height:'30rem'
  
    // justifyContent:'center'
  }
});


const Details = ({props}) => {
  const classes = useStyles();
 const location = useLocation()

 console.log(location)


//  const articleTitle = useParams()

const article = location.state.article
console.log(article)
// console.log(JSON.stringify(location.state.article.multimedia[0].url))

  return (
    <div>
      <Box variant="outlined" id={article}>
       <img
        src={
          article.multimedia[6]?.url
            ? `https://nytimes.com/${article.multimedia[2].url}` 
            : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            
        }
        alt="img"
        className={classes.logo}
      /> 
    </Box>

  <Typography variant="h4">{article.headline.main}</Typography>
  <Typography variant="body1">{article.abstract}</Typography>

  <Typography variant='caption'>For more info:</Typography>
  <Typography variant='subtitle2'>
    <a href={article.web_url} target='_blank' rel="noreferrer" >
      {article.web_url}
    </a>
  </Typography>

{/* <ShareButton/> */}
      



      
   </div>
    // <div>{JSON.stringify(location.state.article.abstract)}</div>

    );
}

export default Details
