import React, {Component} from 'react'
//import {View} from 'react-native'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './darkmode.css'
import './pages.css'
import './access.css'

import Contact from './Contact.js'
import ToggleProj from './ToggleProj.js'
import ToggleLeft from './ToggleLeft.js'
import ToggleRight from './ToggleRight.js'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ChaoHover from './chaohover.png'
import RonHover from './ronhover.png'
import MusHover from './mushover.png'
import XuHover from './xuhover.png'
import MengHover from './menghover.png'
import { Image } from 'react-native';
import { Link, Element } from 'react-scroll';


//import axios from 'axios'
//import {clientBanner} from './clientbanner.jpg'
//const clientBanner = "../../src/pages/clientbanner.jpg";


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      galleryItems: [
      <img src="/image/ChaoWei.jpg" alt="Image of Chao-Wei Chiang on an image carousel"
        onMouseOver={e => (e.currentTarget.src = ChaoHover)}
        onMouseLeave={e => (e.currentTarget.src = "/image/ChaoWei.jpg")}/>,
      <img src="/image/Mengyan.jpg" alt="Image of Meng-Yan Hou on an image carousel"
        onMouseOver={e => (e.currentTarget.src = MengHover)}
        onMouseLeave={e => (e.currentTarget.src = "/image/Mengyan.jpg")}/>,
      <img src="/image/MustafaFullBody.jpg" alt="Image of Mustafa Awni on an image carousel"
        onMouseOver={e => (e.currentTarget.src = MusHover)}
        onMouseLeave={e => (e.currentTarget.src = "/image/MustafaFullBody.jpg")}/>,
      <img src="/image/Ron.jpg" alt="Image of Ron Chiu on an image carousel"
        onMouseOver={e => (e.currentTarget.src = RonHover)}
        onMouseLeave={e => (e.currentTarget.src = "/image/Ron.jpg")}/>,
      <img src="/image/Xu.jpg" alt="Image of Xu Han on an image carousel"
        onMouseOver={e => (e.currentTarget.src = XuHover)}
        onMouseLeave={e => (e.currentTarget.src = "/image/Xu.jpg")}/>
       ].map((i) => <div key={i}>{i}</div>),
       colourMode: "",
    }
  }

    // Keep the below definition, and always remember to provide a return to default option in the colour buttons
  // Make a new function for each colourscheme like the one below
  //
  //  setDarkMode= () => {
  //    this.setState({colourMode: 'Dark'});
  //  };
  //
  // And don't forget to add a button like below referencing your new switch function
  //
  // <button onClick={this.setDarkMode}>Set Dark Mode</button>
  //
  // And remember your default button!
  //
  // <button onClick={this.setDefaultMode}>Set default Mode</button>


  setColourMode = (event) => {
    const { value } = event.target;
    this.setState({colourMode: value});
  };

  handleNavClick = (event) => {
    if(this.contactReference.current){
      this.contactReference.current.scrollIntoView({
        behaviour: "smooth",
        block: "nearest"
      });
    }
  }

  toLogin = () => {
    this.props.history.push('/Login');
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
      <div className = {"fullPage" + this.state.colourMode}>
        <Element name="top">
          <Jumbotron className = {"banner" + this.state.colourMode}>
            <div className = {"maintitle" + this.state.colourMode}>
            <h1>SWEN90016 </h1>
            <div id="subheading">Group CRXMM</div>
            </div>
            {/*<p> really awesome people </p>*/}
          </Jumbotron>
        </Element>

      <div className = "buttonBox">
        <button className = {"modeButton" + this.state.colourMode} value="" onClick={this.setColourMode}>Set Default Mode</button>
        <button className = {"modeButton" + this.state.colourMode} value="AC" onClick={this.setColourMode}>Set Accessibility Mode</button>
        <button className = {"modeButton" + this.state.colourMode} value="Dark" onClick={this.setColourMode}>Set Dark Mode</button>
        <button className = {"modeButton" + this.state.colourMode} onClick={this.toLogin}>Login</button>
      </div>

      {/*NAVBAR HERE*/}
      <div className = "buttonBox">
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="top" spy={true} smooth={true} duration={500} offset={0}>Top</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="intro" spy={true} smooth={true} duration={500} offset={270}>Intro</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="project" spy={true} smooth={true} duration={500} offset={450}>Project</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="ChaoWei" spy={true} smooth={true} duration={500} offset={-25}>Harry</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="Ron" spy={true} smooth={true} duration={500} offset={50}>Ron</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="Mustafa" spy={true} smooth={true} duration={500} offset={-25}>Mustafa</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="Xu" spy={true} smooth={true} duration={500} offset={50}>Zoe</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="Mengyan" spy={true} smooth={true} duration={500} offset={-25}>Kelly</Link>
        <Link activeClass="active" className={"modeButton" + this.state.colourMode} to="contactUs" spy={true} smooth={true} duration={500} offset={0}>Contact Us</Link>
      </div>

      <p>&nbsp;&nbsp;</p>
        <div className = {"alice" + this.state.colourMode}>
        <AliceCarousel
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

        <div className = {"divider" + this.state.colourMode}>
        <div className= {"dividerTitleSmall" + this.state.colourMode}>
        <h1> - Harry - Ron - Mustafa - Kelly - Zoe -</h1>
        </div>
        </div>

        <div className={"punk" + this.state.colourMode}>
          <Image  source="/image/logo.jpg" style={{width: 291.5, height: 107.9}}/>
        </div>

        <Element name="intro">
          <div className={"intro" + this.state.colourMode}>
          <div className={"title" + this.state.colourMode} id="intro">Intro</div>
          <p>Hi, this is CRXMM, we are a team of
             5 from the University of Melbourne.
            While we have different backgrounds,
            different passions, and are even in
            different timezones, we are in unity.
            We believe that as individuals we are
            strong, but together we are incredible.
          </p>
          </div>
        </Element>

        {/*<ToggleB>hello</ToggleB>*/}
        <Element name="project">
          <ToggleProj colourMode = {this.state.colourMode}>
          <div className = {"drop-down" + this.state.colourMode + " intro" + this.state.colourMode}>
            In this project, we help Beth, a local business owner of beauty care services
            in Melbourne, build the e-commerce website for her business. It is expected
            that the system can not just make the appointment procedure automation but also
            help promote the business to different regions.
            <div id="drop-down introtext">
            Team roles: Project Manager - Kelly; Risk Manager - Hsin-Jung;
              Test Manager - Mustafa;
              Developer - Chao-Wei and Zoe
            </div>
          </div>
        </ToggleProj>
      </Element>



      <div className={"title" + this.state.colourMode} id="whoweare">Who we are</div>
        {/*first person*/}
        <Element name="ChaoWei">
          <ToggleLeft colourMode = {this.state.colourMode} name = "ChaoWei" author = "chaowei"/>
        </Element>

        {/*second person*/}
        <Element name="Ron">
          <ToggleRight colourMode = {this.state.colourMode} name = "Ron" author = "ronchiu"/>
        </Element>

        {/*third person*/}
        <Element name="Mustafa">
          <ToggleLeft colourMode = {this.state.colourMode} name = "Mustafa" author = "mustafa"/>
        </Element>

        {/*fourth person*/}
        <Element name="Xu">
          <ToggleRight colourMode = {this.state.colourMode} name = "Xu" author = "xuhan"/>
        </Element>

        {/*fifth person*/}
        <Element name="Mengyan">
          <ToggleLeft colourMode = {this.state.colourMode} name = "Mengyan" author = "mengyan"/>
        </Element>

        <div className={"getInTouchHeader" + this.state.colourMode}>Contact Us</div>

        <Element name="contactUs">
        <Contact colourMode = {this.state.colourMode} ref={this.contactReference}/>
        </Element>


        <div className= {"footer" + this.state.colourMode}><p>last edited: 27/10/2020</p></div>


      </div>

    )
  }
}

export default HomePage;
