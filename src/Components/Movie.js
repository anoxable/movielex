import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'

class Movie extends Component {
  state = {
    genres: [],
    director: [],
    cast: []
  }

  /* query for each movie to get more in depth details */



  render() {

    const { movies } = this.props.state
    console.log(movies)

    let movie = movies.map((movie, index) => {

      if (movie.poster_path == null) {
        return (null)
      } else {
        let url = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
        return (
          <div key={index}>
            <div className='movie'>
              <img className='poster' src={url} />
              <div className="movie-info">
                <span className='movie-rating test'>{movie.vote_average}
                <p>{movie.title}</p>
                <p className='movie-release'>{movie.release_date}</p></span>
                
                <p className='movie-overview'>{movie.overview}</p>
                <hr/>
              </div>
            </div>
          </div >
        )
      }
    })
    console.log(movies)
    return (
      <div className='wrapp'>
        {movie}
      </div>
    )
  }
}
export default Movie
