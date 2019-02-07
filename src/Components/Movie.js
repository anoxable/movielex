import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'

class Movie extends Component {
  state = {
    title: '',
    overview: '',
    release: '',
    revenue: '',
    budget: '',
    genres: [],
    backdrop: '',
    vote_average: '',
    vote_count: '',
    language: '',
    runtime: '',

  }
  componentDidMount() {
    let id = this.props.match.params.movie_id
    this.setState({
      id: id
    })
    axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=3327de82c58bbb5e77470af2495090c6').then(res => {
      console.log(res)
      this.setState({
        overview: res.data.overview,
        title: res.data.original_title,
        release: res.data.release_date,
        revenue: res.data.revenue,
        budget: res.data.budget,
        genres: res.data.genres,
        backdrop: res.data.backdrop_path,
        vote_average: res.data.vote_average,
        vote_count: res.data.vote_count,
        language: res.data.original_language,
        runtime: res.data.runtime
      })
      console.log(this.state)
    })

  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default withRouter(Movie)
