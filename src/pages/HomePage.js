import React, {Component} from 'react'
//import {View} from 'react-native'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-elastic-carousel'
import './pages.css'
import Profile from './Profile.js'
import Biotext from './Biotext.js'
import Card from '../../src/components/Card.js'

class HomePage extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }
render () {
  const { items } = this.state;
    return (
      <div>
        <Jumbotron className = "banner">
        <div className="title"><h1>EPORTFOLIO WOOT WOOT</h1></div>
        <p> really inspiring tagline </p>
        </Jumbotron>

        <div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
       
        <Carousel className = "space">
          <Card />
          <Card />
          <Card />
        </Carousel>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>

        <div className="intro">
        <p> this is just a block of text. lorem ipsum i guess. or I can just write this stuff myself.
          The french word for 'bird' is "oiseau". it kind of horrifies me that someone managed to fit
          ALL THE VOWELS in such a short amount of space. wtf. truly frightening. There's also "oeuf" 
          which is egg i think. Less horrifying but still pretty bad. Wow. Also i love names like
          "Saoirse" and "Annaleise" bc that vowel ratio. Truly superb. The enemy of my enemy is not 
          my friend. They're literally just the enemy of my enemy. Just like no news != good news.
          no news == no news. end of story. 
        </p>
        </div>


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
}

export default HomePage;