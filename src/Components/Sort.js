import React from 'react'
import '../App.css'
import axios from 'axios'

const Sort = (props) => {
  let handleSort = (e) => {
    e.preventDefault()
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=3327de82c58bbb5e77470af2495090c6&language=en-US&sort_by=' + e.target.value + '&include_adult=false&include_video=false&page=1'
    axios.get(url).then(res => {
      let movies = res.data.results
      props.UpdateMovie(movies)
      console.log(movies)
    })
  }
  return (
    <form onChange={handleSort}>
      <select id='country' name='country'>

        <option value='release_date.asc'>Date Released</option>
        <option value='popularity.asc'>Popularity</option>
        <option value='vote_average.asc'>Rating</option>
      </select>
    </form>
  )
}

export default Sort
