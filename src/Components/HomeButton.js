import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const HomeButton = (props) => {
  let handleRoute = () => {
    props.history.push('/')
  }
  return (

    <button onClick={handleRoute}>HOME</button>
  )
}

export default withRouter(HomeButton)
