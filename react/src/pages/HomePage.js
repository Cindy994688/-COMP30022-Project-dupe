import React, {Component} from 'react'
//import {View} from 'react-native'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './pages.css'
import Profile from './Profile.js'
import Biotext from './Biotext.js'
import ToggleProj from './ToggleProj.js'
import ToggleLeft from './ToggleLeft.js'
import Snow from './Snow.js'
import ToggleRight from './ToggleRight.js'
import ToggleB from './ToggleB.js'
import UserInfo from './userInfo.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import ChaoHover from './chaohover.png'
import RonHover from './ronhover.png'
import MusHover from './mushover.png'
import XuHover from './xuhover.png'
import MengHover from './menghover.png'
import { ToggleButton } from 'react-bootstrap'

import { Image } from 'react-native';


//import axios from 'axios'
//import {clientBanner} from './clientbanner.jpg'
//const clientBanner = "../../src/pages/clientbanner.jpg";


class HomePage extends Component {
  state = {
    galleryItems: [
    <img src="/image/ChaoWei.jpg" alt="chaowei"
      onMouseOver={e => (e.currentTarget.src = ChaoHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/ChaoWei.jpg")}/>,
    <img src="/image/Mengyan.jpg" alt="mengyan"
      onMouseOver={e => (e.currentTarget.src = MengHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/Mengyan.jpg")}/>,
    <img src="/image/MustafaFullBody.jpg" alt="mustafa"
      onMouseOver={e => (e.currentTarget.src = MusHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/MustafaFullBody.jpg")}/>,
    <img src="/image/Ron.jpg" alt="ron"
    onMouseOver={e => (e.currentTarget.src = RonHover)}
    onMouseLeave={e => (e.currentTarget.src = "/image/Ron.jpg")}/>,
    <img src="/image/Xu.jpg" alt="xuhan"
    onMouseOver={e => (e.currentTarget.src = XuHover)}
    onMouseLeave={e => (e.currentTarget.src = "/image/Xu.jpg")}/>
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
      <div className = "fullPage">
        <Snow density={3}></Snow>

        <Jumbotron className = "banner">
          <div className="title"><h1>SWEN90016 Group CRXMM</h1></div>
          {/*<p> really awesome people </p>*/}
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
        /*mouseTrackingEnabled={true}*/
        playButtonEnabled={true}
        /*disableAutoPlayOnAction={true}*/
        stopAutoPlayOnHover={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        buttonsDisabled={true}
        />
        </div>


        <div className = "divider">
        <div className="dividerTitleSmall"><h1> - Harry - Ron - Mustafa - Kelly - Zoe -</h1></div>
        </div>

        <div className="punk">
          <Image  source="/image/logo.jpg" style={{width: 291.5, height: 107.9}}/>
        </div>


        <div className="intro">
        <p> <i>Hi, this is CRXMM, we are a team of
           5 from the University of Melbourne.
          While we have different backgrounds,
          different passions, and are even in
          different timezones, we are in unity.
          We believe that as individuals we are
          strong, but together we are incredible.
          </i>
        </p>
        </div>

        {/*<ToggleB>hello</ToggleB>*/}

      <ToggleProj>
        <div className = "intro">
        <p>In this project, we help Beth, a local business owner of beauty care services
          in Melbourne, build the e-commerce website for her business. It is expected
          that the system can not just make the appointment procedure automation but also
          help promote the business to different regions.</p>
          <p><i>Team roles: Project Manager - Kelly; Risk Manager - Hsin-Jung;
            Test Manager - Mustafa;
            Developer - Chao-Wei and Zoe</i> </p>
        </div>
      </ToggleProj>

      <div><p>&nbsp;&nbsp;</p></div>

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
        <ToggleLeft name = "ChaoWei">
          <div className = "box">
          <p>CV information</p>
            <p><i>Chao-Wei actually studied with giant lizard men during one of his monthly visits to Narnia
              He can confirm - the lizard people are taking over our Government</i> </p>
            <p><i>On the other hand, is it really such a bad thing that we have smart, somewhat benevolent lizard people
             taking over our society?</i> </p>
          </div>
        </ToggleLeft>


        {/*second person*/}
        <ToggleRight name = "Ron">
          <div className = "bgSecondary box">
          <p>CV information</p>
            <p><i>Ron actually studied with giant lizard men during one of his monthly visits to Narnia
              He can confirm - the lizard people are taking over our Government</i> </p>
            <p><i>On the other hand, is it really such a bad thing that we have smart, somewhat benevolent lizard people
             taking over our society?</i> </p>
          </div>
        </ToggleRight>


        {/*third person*/}
        <ToggleLeft name = "Mustafa">
          <div className = "box">
          <p>CV information</p>
            <p><i>Mustafa actually studied with giant lizard men during one of his monthly visits to Narnia
              He can confirm - the lizard people are taking over our Government</i> </p>
            <p><i>On the other hand, is it really such a bad thing that we have smart, somewhat benevolent lizard people
             taking over our society?</i> </p>
          </div>
        </ToggleLeft>


        {/*fourth person*/}
        <ToggleRight name = "Xu">
          <div className = "bgSecondary box">
          <p>CV information</p>
            <p><i>Xu actually studied with giant lizard men during one of his monthly visits to Narnia
              He can confirm - the lizard people are taking over our Government</i> </p>
            <p><i>On the other hand, is it really such a bad thing that we have smart, somewhat benevolent lizard people
             taking over our society?</i> </p>
          </div>
        </ToggleRight>

        {/*fifth person*/}
        <ToggleLeft name = "Mengyan">
          <div className = "box">
          <p>CV information</p>
            <p><i>Mengyan actually studied with giant lizard men during one of his monthly visits to Narnia
              He can confirm - the lizard people are taking over our Government</i> </p>
            <p><i>On the other hand, is it really such a bad thing that we have smart, somewhat benevolent lizard people
             taking over our society?</i> </p>
          </div>
        </ToggleLeft>

      </div>
    )
  }
}

export default HomePage;
