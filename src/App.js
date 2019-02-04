import React, { Component } from 'react'
import Search from './Components/Search'
import './App.css'
import axios from 'axios'
import Movie from './Components/Movie'
import Sort from './Components/Sort'

class App extends Component {
  state = {
    movies: [],
    genres: [],
    director: [],
    cast: []

  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3327de82c58bbb5e77470af2495090c6&language=en-US').then(res => {
      console.log(res)
      let count = 18
      let movies = res.data.results.slice(0, count)
      this.setState({
        movies: movies
      })

    })
  }
  handleUpdateMovie = (movies) => {
    this.setState({
      movies: movies
    })

  }
  handleHome = () => {
    this.componentDidMount()
  }
  render() {
    return (
      <div className='App'>
        <h1>Movie-App</h1>
        <div class='sort'>
          <Search UpdateMovie={this.handleUpdateMovie} />
          <button onClick={this.handleHome}>Home</button>
          <Sort UpdateMovie={this.handleUpdateMovie} />
        </div>
        <Movie state={this.state} />
      </div>
    )
  }
}

export default App
