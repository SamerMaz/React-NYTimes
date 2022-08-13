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
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  articleID,
  getArticleById,
  getArticleDetails,
  getArticleId,
  getArticles,
} from "../../services/service";
import ShareButton from "../ShareButton";
import Article from "./Article/Article";
import Articles from "./Articles";

const useStyles = makeStyles({
  logo: {
    // width: "80%",
    // height: '30rem',
    // flexDirection: 'row',
    // alignItems: 'center',

    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    width: "70%",
    height: "30rem",

    // justifyContent:'center'
  },
});

const Details = ({ props }) => {
  const classes = useStyles();
  const location = useLocation();

  const article = location.state;



  const [persistArticle, setPersistArticle] = useLocalStorage('article', article)
  //  const ahref = `${'https://nyorktimes.netlify.app' + location.pathname}`
  //  console.log(ahref)


    useEffect(()=>{
    setPersistArticle(persistArticle)
  }, [article])


  const ahref = window.location;
  const encodedAhref = encodeURIComponent(ahref);


  return (
    <div>
      {persistArticle && (
        <>
          <Box variant="outlined" id={persistArticle}>
            <img
              src={
                persistArticle.multimedia[6]?.url
                  ? `https://nytimes.com/${persistArticle.multimedia[2].url}`
                  : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
              }
              alt="img"
              className={classes.logo}
            />
          </Box>
          <Typography variant="h4">{persistArticle.headline.main}</Typography>
          <Typography variant="body1">{persistArticle.abstract}</Typography>
          <Typography variant="subtitle2">{persistArticle.byline.original}</Typography>
          <Typography variant="caption">For more info:</Typography>
          <Typography variant="subtitle2">
            <a href={persistArticle.web_url} target="_blank" rel="noreferrer">
              {persistArticle.web_url}
            </a>
          </Typography>
          <ShareButton ahref={ahref} encodedAhref={encodedAhref} />
        </>
      )}
    </div>
  );
};

export default Details;
