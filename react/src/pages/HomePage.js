import React, {Component} from 'react'
//import {View} from 'react-native'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './pages.css'
import Profile from './Profile.js'
import Biotext from './Biotext.js'
import ToggleProj from './ToggleProj.js'
import UserInfo from './userInfo.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ChaoHover from './chaohover.png'
import RonHover from './ronhover.png'
import MusHover from './mushover.png'
import XuHover from './xuhover.png'
import MengHover from './menghover.png'
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
    <img src="/image/Mustafa.jpg" alt="mustafa"
      onMouseOver={e => (e.currentTarget.src = MusHover)}
      onMouseLeave={e => (e.currentTarget.src = "/image/Mustafa.jpg")}/>,
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

render () {
    return (
      <div className = "fullPage">

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
        /*mouseTrackingEnabled={true}*/
        playButtonEnabled={true}
        /*disableAutoPlayOnAction={true}*/
        stopAutoPlayOnHover={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
        buttonsDisabled={true}
        />
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
        <div>
          <div  style={{display: 'inline-block'}}>
            <Profile className = "txtColor" img = "/image/ChaoWei.jpg" clientname = "Chao-Wei Chiang" />
            </div>
          <div style={{display: 'inline-block'}}>
            <UserInfo clientname = "Chao-Wei" type = "description"/>
            </div>
        </div>

        {/*second person*/}
          <div className = "bgSecondary"  >
            <div style={{display: 'inline-block'}}>
              <div ><UserInfo clientname = "Ron" type = "description"/></div>
              <div><p>Email: ron's email</p></div>
              
            </div>
            <div style={{display: 'inline-block'}}>

              <Profile img = "/image/Ron.jpg" clientname = "Ron Chiu" />
            </div>
          </div>

        {/*third person*/}
        <div>
          <div style={{display: 'inline-block'}}>
            <Profile img = "/image/Mustafa.jpg" clientname = "Mustafa Awni" />
          </div>

          <div style={{display: 'inline-block'}}>
            <UserInfo clientname = "Mustafa" type = "description"/>
          </div>
        </div>

        {/*fourth person*/}
        <div className = "bgSecondary">
          <div style={{display: 'inline-block'}}>
              <UserInfo clientname = "Xu" type = "description"/>
          </div>
          <div style={{display: 'inline-block'}}>
              <Profile img = "/image/Xu.jpg" clientname = "Xu Han" />
          </div>
        </div>

        {/*fifth person*/}
        <div>
          <div style={{display: 'inline-block'}}>
            <Profile img = "/image/Mengyan.jpg" clientname = "Mengyan Hou" />
          </div>

          <div style={{display: 'inline-block'}}>
            <UserInfo clientname = "Mengyan" type = "description"/>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;
