import React, { Component } from 'react'
import {Jumbotron,Col,Row, ToggleButton, Card, Container} from 'reactstrap'
import Profile from './Profile.js'
import UserInfo from './userInfo.js'
import axios from 'axios'
import './pages.css'
import './darkmode.css'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import { Image } from 'react-native';
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA
import ProjectsPage from './ProjectsPage';

export default class ToggleProj extends Component {
  state = {
      cv: false,
      personalproj: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      output: "",
      fullname:"",
    };
  }

  componentDidMount() {
    const name = axios.get('/name/'+this.props.name)
      .then((res)=>{
        this.setState({
          fullname: res.data,
        })
      });
  }


  togglecv = () => {
      this.setState({
          cv: !this.state.cv,
          personalproj: false,
      })
  }

  togglepersonalproj = () => {
      this.setState({
          cv: false,
          personalproj: !this.state.personalproj
      })
  }



    render() {
        return (
          <>
            <Container className={"bottomTriangle"+this.props.colourMode+ " bgSecondary"+this.props.colourMode}>
              <Row>
                {/*<div  style={{display: 'inline-block'}}>*/}
                  <Col md="6">
                    <Profile img = {'/image/'+this.props.name+'.jpg'} clientname = {this.state.fullname} colourMode = {this.props.colourMode}/>
                  </Col>
                  {/*<div style={{display: 'inline-block'}}>*/}
                  <Col md="6">
                    <UserInfo clientname = {this.props.name} type = "description" colourMode = {this.props.colourMode}/>
                    <UserInfo clientname = {this.props.name} type = "skills" colourMode = {this.props.colourMode}/>
                    <UserInfo clientname = {this.props.name} type = "email" colourMode = {this.props.colourMode}/>
                  </Col>
                  <Row>
                  <div className={"buttondiv"+this.props.colourMode}>
                    <button type="submit" className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode} onClick = {this.togglecv}  style={{cursor:'pointer'}}>See CV</button>
                    <button type="submit" className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode} onClick = {this.togglepersonalproj} style={{cursor:'pointer'}}>See Personal Projects</button>
                  </div>
                  </Row>
              </Row>
            </Container>
            {this.state.cv &&
              <div className = {"box"+this.props.colourMode}>
              <Image source={"/image/MengyanResume.jpg"}
                  style={{width:636, height:900}}/>
              </div>
            }

          {this.state.personalproj &&
              <div className = {"box"+this.props.colourMode}>
              <ProjectsPage author = {this.props.author} colourMode = {this.props.colourMode}/>
              </div>}

      </>

        )
    }
}
