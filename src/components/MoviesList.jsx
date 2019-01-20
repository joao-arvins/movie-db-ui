import React, { Component } from 'react';
import MovieItem from './MovieItem.jsx';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class MoviesList extends Component {
  render() {
    const { classes, list } = this.props;

    const moviesOutput = list.map(movie => (
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={movie.id} >
        <MovieItem key={movie.id} movie={movie} />
      </Grid>
    ));

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          {moviesOutput}
        </Grid>
      </div>
    );
  }
}

MovieItem.defaultProps = {
  list: [],
  classes: null,
};

MoviesList.propTypes = {
  list: PropTypes.array.isRequired
};

export default withStyles(styles)(MoviesList);