import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import MoviesList from './MoviesList.jsx';
import moviesService from '../services/moviesService';

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
    return (
      <div>
        <SearchBox
          value={this.state.query}
          onChangeSearchText={this.onChangeSearchText}
        />
        {<MoviesList list={this.state.movies} />}
      </div>
    );
  }
}

export default App;