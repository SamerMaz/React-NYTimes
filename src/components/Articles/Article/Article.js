import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {article && (
        <Card className={classes.card} id={article._id}>
          <CardMedia
            className={classes.media}
            component="img"
            src={
              article.multimedia?.[0]?.url
                ? `https://nytimes.com/${article.multimedia[0].url}` //we are checking if there is no image, in that case we will display the NYT logo
                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            }
            alt="news-img"
          />
          <CardContent>
            <Typography color="primary" variant="h6">
              {/* <Link ></Link> */}
              <Link
                // href={article.web_url}
                to= "/article.id"
                
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
