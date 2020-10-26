import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA
import './pages.css'
import './darkmode.css'
import { View, Image } from 'react-native';
import { Container, Row, Col } from 'reactstrap';
import './access.css'

export default class ToggleProj extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
            <div className = "ourProject">
                    <div className={ " title"+this.props.colourMode}> Our Project </div>
                    {/*<div className="title" id="ourproject">*/}
                    {/*<div className="title"> Our Project </div>*/}
                    <div className={"sub"+this.props.colourMode}> Beth’s Beauty - Your best beauty services </div>
                    <div className={"buttondiv"+this.props.colourMode}>
                    </div>
                    <div>&nbsp;&nbsp;</div>






                  <div className="row">
                      <div className="col textExp">
                        In this project, we help Beth, a local business owner of beauty care services
                        in Melbourne, build the e-commerce website for her business. It is expected
                        that the system can not just make the appointment procedure automation but also
                        help promote the business to different regions.

                      </div>
                      <div className="col"> <img className="pictureform1" src="/image/page0.png" alt="first page" /> </div>
                  </div>

                  <div className="row">
                  <img className="pictureform4" src="/image/page4.png" alt="second page" /> 
                      <div className="col">
                         <img className="pictureform2" src="/image/page1.png" alt="second page" />
                         <img className="pictureform2" src="/image/page3.png" alt="fourth page" />
                      </div>

                  </div>

                  <div className="row">
                      <div className="col"> <img className="pictureform3" src="/image/page5.png" alt="third page" /> </div>
                      <div className="col"> <img className="pictureform3" src="/image/page2.png" alt="third page" /> </div>
                      <div className="col"> <img className="pictureform3" src="/image/page7.png" alt="fourth page" /> </div>
                      <div className="col textEnd">
                      <p>Team roles:</p><p> Project Manager - Kelly</p><p> Risk Manager - Hsin-Jung</p>
                        <p>Test Manager - Mustafa</p>
                        <p>Developer - Chao-Wei and Zoe</p>
                      </div>
                  </div>







            </div>
        )
    }
}
