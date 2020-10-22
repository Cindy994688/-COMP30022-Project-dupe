import React, { Component } from 'react'
import {Jumbotron,Col,Row, ToggleButton, Card, Container} from 'reactstrap'
import Profile from './Profile.js'
import UserInfo from './userInfo.js'
import axios from 'axios'
import './pages.css'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import { Image } from 'react-native';
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA

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
                  <Container className ="topTriangle">
                    <Row>
                      {/*<div  style={{display: 'inline-block'}}>*/}
                        <Col md="6">
                          <Profile img = {'/image/'+this.props.name+'.jpg'} clientname = {this.state.fullname}/>
                        </Col>
                        {/*<div style={{display: 'inline-block'}}>*/}
                        <Col md="6">
                          <UserInfo clientname = {this.props.name} type = "description"/>
                          <UserInfo clientname = {this.props.name} type = "skills"/>
                          <UserInfo clientname = {this.props.name} type = "email"/>
                        </Col>
                        <Row>
                        <div className="buttondiv">
                          <button type="submit" className="btn btn-primary button" onClick = {this.togglecv}  style={{cursor:'pointer'}}>See CV</button>
                          <button type="submit" className="btn btn-primary button" onClick = {this.togglepersonalproj} style={{cursor:'pointer'}}>See Personal Projects</button>
                        </div>
                        </Row>
                    </Row>
                  </Container>
                  {this.state.cv &&
                    <div className = "box">
                    <Image source={"/image/MengyanResume.jpg"}
                        style={{width:636, height:900}}/>
                    </div>
                  }

                {this.state.personalproj &&
                    <div className = "box">
                    <p>This is a 100% verified real personal project</p>
                    </div>}

            </>
        )
    }
}
