import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import Articles from "./Articles";

const useStyles = makeStyles({
  logo: {
    width: 700,
    
  },
});


const Details = (props) => {
  const classes = useStyles();
  const { history} = props
  const [articles, setArticles] = useState([]);

  console.log(articles)

  const getArticles = async (articlesId) => {
    console.log(articles[`${articlesId}`])
    const { _id, multimedia, abstract } = articles[`${articlesId}`];
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`   
    )
  }
    


  return (
    <div>
      <Paper variant="outlined" id={articles._id}>
        <img
          src={
            articles.multimedia?.[0]?.url
              ? `https://nytimes.com/${articles.multimedia[0].url}` 
              : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
              
          }
          alt="img"
          className={classes.logo}
        />
      </Paper>
    </div>
  );
}

export default Details
