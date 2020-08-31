import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>
        <Link to="/users">users</Link> is a link i guess \o/
      </p>
    </div>
  )
}