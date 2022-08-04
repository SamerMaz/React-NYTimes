import {
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
import { useLocation, useParams } from "react-router-dom";
import { articleID, getArticleById, getArticleDetails, getArticleId, getArticles } from "../../services/service";
import Article from "./Article/Article";
import Articles from "./Articles";

const useStyles = makeStyles({
  logo: {
    width: 700,
    
  },
});


const Details = ({props}) => {
  const classes = useStyles();
  const [articles, setArticles] = useState([])
  const [page, pages] = useState(0)

 const location = useLocation()

 console.log(location)


const {article} = location.state.article.abstract

  return (
    // <div>
    //   {/* {data.map((article)=> */}
    //   <Paper variant="outlined" id={article}>
    //   {/* <img
    //     src={
    //       article.multimedia[0]?.url
    //         ? `https://nytimes.com/${article[0].multimedia[0].url}` 
    //         : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            
    //     }
    //     alt="img"
    //     className={classes.logo}
    //   /> */}
    // </Paper>
      
    //   {/* )}   */}
      
    // </div>
    <div>{JSON.stringify(location.state.article.abstract)}</div>

    );
}

export default Details
