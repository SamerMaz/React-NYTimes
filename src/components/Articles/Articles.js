import { Grid, TextField, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import PropTypes from "prop-types";
import Article from "./Article/Article";

const Articles = ({ loading, articles }) => {
  const classes = useStyles();

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {articles.map((article) => (
              <Grid item xs={12} sm={4} key={article._id}>
                <Article article={article} />
                {/* {console.log(article)} */}
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

Articles.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};

export default Articles;
