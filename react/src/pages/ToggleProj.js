import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA
import './pages.css'
import './darkmode.css'
import './access.css'

import { View, Image } from 'react-native';
import { Container, Row, Col } from 'reactstrap';
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default class ToggleProj extends Component {
  constructor(props) {
   super(props);

   this.state = {
     photoIndex: 0,
     isOpen: false,
     length: 7
   };
  }

    render() {
       const { photoIndex, isOpen } = this.state;

        return (

            <div className = "ourProject">
                    <div className={"solid"+this.props.colourMode}><br/></div>

                    <div className={ "title"+this.props.colourMode}> Our Project </div>

                    <div className={"solid2"+this.props.colourMode}><br/></div>

                    <div className={"sub"+this.props.colourMode}> Beth’s Beauty - Your best beauty services </div>
                    <div className={"buttondiv"+this.props.colourMode}>
                    </div>
                    <div>&nbsp;&nbsp;</div>



                    {isOpen && (
                      <Lightbox
                        nextSrc={"/image/page"+this.state.photoIndex+".png" }
                        mainSrc={"/image/page"+this.state.photoIndex+".png" }
                        prevSrc={"/image/page"+this.state.photoIndex+".png" }

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + this.state.length - 1) % this.state.length
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % this.state.length
                          })
                        }
                        />
                      )}

                  <div className="row">
                      <div className={"col textExp"+ this.props.colourMode}>
                        In this project, we help Beth, a local business owner of beauty care services
                        in Melbourne, build the e-commerce website for her business. It is expected
                        that the system can not just make the appointment procedure automation but also
                        help promote the business to different regions.

                      </div>
                      <div className="col"> <img className="pictureform1" src="/image/page0.png" alt="first page"
                                        onClick={() => this.setState({ isOpen: true, photoIndex:0, })}/> </div>
                  </div>

                  <div className="row">
                  <img className="pictureform4" src="/image/page1.png" alt="second page"
                      onClick={() => this.setState({ isOpen: true, photoIndex:1 })}/>
                      <div className="col">
                         <img className="pictureform2" src="/image/page2.png" alt="second page"
                            onClick={() => this.setState({ isOpen: true, photoIndex:2 })}/>
                         <img className="pictureform2" src="/image/page3.png" alt="fourth page"
                              onClick={() => this.setState({ isOpen: true, photoIndex:3, })}/>
                      </div>

                  </div>


                  <div className="row">
                      <div className="col"> <img className="pictureform3" src="/image/page4.png" alt="third page"
                          onClick={() => this.setState({ isOpen: true, photoIndex:4, })}/> </div>
                      <div className="col"> <img className="pictureform3" src="/image/page5.png" alt="third page"
                          onClick={() => this.setState({ isOpen: true, photoIndex:5, })}/> </div>
                      <div className="col"> <img className="pictureform3" src="/image/page6.png" alt="fourth page"
                            onClick={() => this.setState({ isOpen: true, photoIndex:6 })}/> </div>
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
