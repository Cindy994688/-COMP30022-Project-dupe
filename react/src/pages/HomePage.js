import React, {Component} from 'react'
//import {View} from 'react-native'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './pages.css'
import Profile from './Profile.js'
import Biotext from './Biotext.js'
import UserInfo from './userInfo.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { StickyContainer, Sticky } from 'react-sticky';
import { Image } from 'react-native';
//import axios from 'axios'
//import {clientBanner} from './clientbanner.jpg'
//const clientBanner = "../../src/pages/clientbanner.jpg";


class HomePage extends Component {
  state = {
    galleryItems: [
    <img src="/image/ChaoWei.jpg" alt="chaowei"/>,
    <img src="/image/Mengyan.jpg" alt="mengyan"/>,
    <img src="/image/Mustafa.jpg" alt="mustafa"/>,
    <img src="/image/Ron.jpg" alt="ron"/>,
    <img src="/image/Xu.jpg" alt="xuhan"/>
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

  style = {
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 10,
    distanceFromBottom: 0,
    marginLeft:1000,
    fontFamily: 'Arial',
    fontSize: 25,
    align: 'right',
    position: 'fixed',
    color: '#8B008B'
  }


render () {
    return (
      <div>
      <StickyContainer>

        <Jumbotron className = "banner">
          <div className="title"><h1>SWEN90016 Group CRXMM</h1></div>
          <p> really awesome people </p>
        </Jumbotron>
        <Sticky>{() => <h1 style={this.style}>Produced by Potato Powered Portfolios</h1>}</Sticky>

        



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
          <Profile img = "/image/ChaoWei.jpg" clientname = "Chao-Wei Chiang" />
          </div>
        <div style={{display: 'inline-block'}}>
          <UserInfo clientname = "Chao-Wei" type = "description"/>
          </div>


        {/*second person*/}
          <div style={{display: 'inline-block'}}>
            <UserInfo clientname = "Ron" type = "description"/>
          </div>
          <div style={{display: 'inline-block'}}>

            <Profile img = "/image/Ron.jpg" clientname = "Ron Chui" />
          </div>


        {/*third person*/}
        <div style={{display: 'inline-block'}}>
          <Profile img = "/image/Mustafa.jpg" clientname = "Mustafa Awni" />
        </div>

        <div style={{display: 'inline-block'}}>
          <UserInfo clientname = "Mustafa" type = "description"/>
        </div>

        {/*fourth person*/}
        <div style={{display: 'inline-block'}}>
            <UserInfo clientname = "Xu" type = "description"/>
        </div>
        <div style={{display: 'inline-block'}}>
            <Profile img = "/image/Xu.jpg" clientname = "Xu Han" />
        </div>

        {/*fifth person*/}
        <div style={{display: 'inline-block'}}>
          <Profile img = "/image/Mengyan.jpg" clientname = "Mengyan Hou" />
        </div>

        <div style={{display: 'inline-block'}}>
          <UserInfo clientname = "Mengyan" type = "description"/>
        </div>


      </StickyContainer>
      </div>
    )
  }
}

export default HomePage;
