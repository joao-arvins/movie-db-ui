import React, { Component } from 'react';
import MoviesList from './MoviesList.jsx';
import moviesService from '../services/moviesService';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  icon: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      movies: [],
    };

    this.onChangeSearchText = this.onChangeSearchText.bind(this);
  }

  async onChangeSearchText(event) {
    let query = event.target.value;

    this.setState({
      query,
      movies: []
    });

    if(query.length) {
      let output = await moviesService.getMoviesByTitle(event.target.value);
      
      this.setState({
        movies: output.results
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolbar}>
            <div className={classes.search}>
              <div className={classes.icon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={this.onChangeSearchText}
                value={this.state.query}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <MoviesList list={this.state.movies} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);