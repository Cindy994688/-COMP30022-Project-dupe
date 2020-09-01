import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './pages.css'
import Profile from './Profile.js'

export default function HomePage() {
  return (
    <div>
      <Jumbotron className = "banner">
       <div className="title"><h1>EPORTFOLIO WOOT WOOT</h1></div>
       <p> really inspiring tagline </p>
      </Jumbotron>

      <div className="container">
        <p>
        <Link to="/users">users</Link> is a link i guess \o/
        </p>
      </div>
      <Profile />
    </div>
  )
}