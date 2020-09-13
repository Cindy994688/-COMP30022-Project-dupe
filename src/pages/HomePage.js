import React, {Component} from 'react'
//import {View} from 'react-native'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-elastic-carousel'
import './pages.css'
import Profile from './Profile.js'
import UserInfo from './userInfo.js'
import Biotext from './Biotext.js'
import Card from '../../src/components/Card.js'
import axios from 'axios'
//import {clientBanner} from './clientbanner.jpg'
//const clientBanner = "../../src/pages/clientbanner.jpg";


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
        <div className="title"><h1>SWEN90016 Group CRXMM</h1></div>
        <p> really awesome people </p>
        </Jumbotron>

        <div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>

        <Carousel className = "space">
          <Card />
          <Card />
          <Card />
        </Carousel>
        </div>

        <div className="intro">
        <p> Hi, this is CRXMM, we are a team of
           5 from the University of Melbourne.
          While we have different backgrounds,
          different passions, and are even in
          different timezones, we are in unity.
          We believe that as individuals we are
          strong, but together we are incredible.
        </p>
        </div>


        <div className="container">
          <p>
          <Link to="/users">users</Link> is a link i guess \o/
          </p>
        </div>
        {/*medusa*/}
        <div style={{display: 'inline-block'}}>

          <UserInfo clientname = "Medusa" type = "name"/>
          <Profile img = "/image/robot.jpg" clientname = "Robot" />
          <UserInfo clientname = "Medusa" type = "description"/>
          <UserInfo clientname = "Medusa" type = "email"/>
          <UserInfo clientname = "Medusa" type = "skills"/>

        </div>
        {/*first person*/}
        <div style={{display: 'inline-block'}}>
          <Profile img = {require("./chaowei.jpg")} clientname = "Chao-Wei Chiang" />
          </div>
        <div style={{display: 'inline-block'}}>
          <Biotext className = "descr" clientdescr = "He is interested in different kinds of programming languages and has created different projects. Upon working in the field of automation, he realized the power of information technologies and believed it will make the world better. Later he determined himself to acquire advanced knowledge. Currently he is a student in the master of IT degree."/>
          </div>

        {/*second person*/}
          <div style={{display: 'inline-block'}}>
            <Biotext clientdescr = "Postgraduate student in cyber security. Interested in pentesting."/>
          </div>
          <div style={{display: 'inline-block'}}>

            <Profile img = {require("./ron.jpg")} clientname = "Ron Chiu" />
          </div>

        {/*third person*/}
        <div style={{display: 'inline-block'}}>
          <Profile img = {require("./mustafa.jpg")} clientname = "Mustafa Awni" />
        </div>

        <div style={{display: 'inline-block'}}>
          <Biotext clientdescr = "Postgraduate engineering student and avid tennis player. Passionate about all things STEM!"/>
        </div>
        
        {/*fourth person*/}
        <div style={{display: 'inline-block'}}>
            <Biotext clientdescr = "Postgraduate student in IT. Have blockchain research experience."/>
        </div>
        <div style={{display: 'inline-block'}}>
            <Profile img = {require("./xuhan.jpg")} clientname = "Xu Han" />
        </div>
          
        {/*fifth person*/}
        <div style={{display: 'inline-block'}}>
          <Profile img = {require("./mengyan.jpg")} clientname = "Mengyan Hou" />
        </div>

        <div style={{display: 'inline-block'}}>
          <Biotext clientdescr = "A Penultimate year student majoring IT, specialized in Human-computer interaction."/>
        </div>

      </div>
    )
  }
}

export default HomePage;
