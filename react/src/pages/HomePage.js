import React, {Component} from 'react'
//import {View} from 'react-native'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './pages.css'
import Profile from './Profile.js'
import Biotext from './Biotext.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
//import axios from 'axios'
//import {clientBanner} from './clientbanner.jpg'
//const clientBanner = "../../src/pages/clientbanner.jpg";


class HomePage extends Component {
  state = {
    galleryItems: [
    <img src={require("./chaowei2.jpg")} alt="chaowei"/>,
    <img src={require("./mengyan2.jpg")} alt="mengyan"/>,
    <img src={require("./mustafa2.jpg")} alt="mustafa"/>,
    <img src={require("./ron2.jpg")} alt="ron"/>,
    <img src={require("./xuhan2.jpg")} alt="xuhan"/>
     ].map((i) => <h2 key={i}>{i}</h2>),
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }

  stagePadding =   {
    paddingLeft: 500,     // in pixels
    paddingRight: 25
  }

render () {
    return (
      <div>

        <Jumbotron className = "banner">
          <div className="title"><h1>SWEN90016 Group CRXMM</h1></div>
          <p> really awesome people </p>
        </Jumbotron>

        <div>
          <p>&nbsp;&nbsp;</p>
        </div>

        <div className = "alice">
        <AliceCarousel className = "alice"
        items={this.state.galleryItems}
        responsive={this.responsive}
        controlsStrategy="responsive"
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        buttonsDisabled={true}
        />
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

        <Jumbotron className = "divider">
        <div className="dividerTitle"><h1>OUR PROJECT</h1></div>
        </Jumbotron>
        <p>here is where we will showcase your main project (the hair salon site)</p>

        <Jumbotron className = "divider">
        <div className="dividerTitle"><h1>WHO WE ARE</h1></div>
        </Jumbotron>

        {/*<div className="container">
          <p>
          <Link to="/users">users</Link> is a link i guess \o/ yay
          </p>
        </div>*/}

        {/*medusa*/}
        {/*<div style={{display: 'inline-block'}}>

          <UserInfo clientname = "Medusa" type = "name"/>
          <Profile img = "/image/robot.jpg" clientname = "Robot" />
          <UserInfo clientname = "Medusa" type = "description"/>
          <UserInfo clientname = "Medusa" type = "email"/>
          <UserInfo clientname = "Medusa" type = "skills"/>

      </div>*/}
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
        <h1>Home page, or go to the <Link to="/:id">Projects</Link> page.</h1>
      </div>
    )
  }
}

export default HomePage;
