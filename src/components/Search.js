import {
  AppBar, IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Toolbar
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles({
  color: {
    color: "#FFFF",
  },

  input: {
    color: "white",
  },
});

const Search = ({ searchArticles }) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchArticles(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AppBar>
          <Toolbar>
            <TextField
              label="Search articles"
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment className={classes.color}>
                    <IconButton>
                      <SearchIcon
                        onClick={handleSubmit}
                        className={classes.color}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
        </AppBar>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchArticles: PropTypes.func.isRequired,
};

export default Search;
