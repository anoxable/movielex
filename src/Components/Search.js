import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  state = {
    movie: ''
  }
  handleMovie = (e) => {
    let movie = e.target.value
    this.setState({
      movie: movie
    })
    console.log(this.state)
  }
  handleSearch = (e) => {
    e.preventDefault()
    let movie = this.state.movie
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=3327de82c58bbb5e77470af2495090c6&language=en-US&query=' + movie + '&page=1&include_adult=false'
    axios.get(url).then(res => {
      let movies = res.data.results.slice(0, 10)

      this.props.UpdateMovie(movies)
    })

  }
  render() {
    return (
      <form>
        <input onChange={this.handleMovie} type='text' placeholder='search' />
        <button onClick={this.handleSearch}>search</button>
      </form>
    )
  }
}

export default Search
