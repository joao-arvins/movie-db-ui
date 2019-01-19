import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import MoviesList from './MoviesList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      movies: [],
    };
  }

  onChangeSearchText = () => {
    //make request to search movies
    let dummyMovies = [
      { title: 'Movie 1' }
    ];

    this.setState({ 
      movies: dummyMovies
    });
  };

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