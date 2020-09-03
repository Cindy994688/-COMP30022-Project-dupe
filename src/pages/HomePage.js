import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './pages.css'
import Profile from './Profile.js'
import Biotext from './Biotext.js'

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
      {/*first person*/}
      <div style={{display: 'inline-block'}}>
        <Profile />
        </div>
      <div style={{display: 'inline-block'}}>
        <Biotext />
        </div>

        {/*second person*/}
        <div style={{display: 'inline-block'}}>
        <Biotext />
        </div>
      <div style={{display: 'inline-block'}}>
        
        <Profile />
        </div>
      
    </div>
  )
}