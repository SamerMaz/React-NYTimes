import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getArticleDetails, getArticles } from "../../../services/service";
import { removeSpaces } from "../../../helpers/decodeurl";

const Article = ({ article, articleId, articleTitle }) => {
  const classes = useStyles();
//  const articleTitle = useParams()



  return (
    <div className={classes.root}>
      {article && (
        <Card className={classes.card} id={article}>
          <CardMedia
            className={classes.media}
            component="img"
            src={
              article.multimedia[0]?.url
                ? `https://nytimes.com/${article.multimedia[0].url}` //we are checking if there is no image, in that case we will display the NYT logo
                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            }
            alt="news-img"
          />
          <CardContent>
            <Typography color="primary" variant="h6">
              <Link
                // to={`/details/${removeSpaces(articleTitle.headline.main)}`}
                to={`/details/${articleTitle.headline.main}`}
                state={{article: articleId}}
                key={`${articleId}`}
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                  {article.headline.main}
              </Link>
    
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              {article.byline.original}
            </Typography>
            <Typography variant="body2" component="p">
              {article.snippet}
            </Typography>
          </CardContent>
          
        </Card>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
