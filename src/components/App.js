import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import SearchBox from './SearchBox'
import MovieList from './MovieList'
import MovieInfo from './MovieInfo';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      currentMovie: null
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results]})
    })
    
    e.preventDefault()
  }

  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if(movie.id == id) {
        filteredMovie = movie
      }
      console.log("movieDeets", filteredMovie)
    }) 

    this.setState({ currentMovie: filteredMovie })  
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  popularMovies = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results]})
    })
  }

  inTheaters = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results]})
    })
  }

  clearWhenClick = () => {
    this.setState({ movies: []})
  }

  render() {
    return (
        <div>
          <Nav clearWhenClick={this.clearWhenClick} inTheaters={this.inTheaters} popularMovies={this.popularMovies} />
          {this.state.currentMovie == null ? <div><SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList similarMovies={this.similarMovies}  viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo handleSimilarMovies={this.handleSimilarMovies}  closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}
        </div>
    );
  }
}

export default App;