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
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    const moviesOutput = this.props.list.map(movie => (
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={movie.id} >
        <MovieItem key={movie.id} movie={movie} />
      </Grid>
    ));

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {moviesOutput}
        </Grid>
      </div>
    );
  }
}

MoviesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired
};

export default withStyles(styles)(MoviesList);