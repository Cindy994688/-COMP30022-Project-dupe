import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
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
            <div className = "vertBox">
                <div className = "vertBox">
                  {/*<div  style={{display: 'inline-block'}}>*/}
                  <div className = "box">
                    <div>
                      <Profile img = {'/image/'+this.props.name+'.jpg'} clientname = {this.state.fullname}/>
                    </div>
                    {/*<div style={{display: 'inline-block'}}>*/}
                    <div className = "vertBox">
                    <p><UserInfo clientname = {this.props.name} type = "description"/></p>
                    <p><UserInfo clientname = {this.props.name} type = "skills"/></p>
                    <p><UserInfo clientname = {this.props.name} type = "email"/></p>
                    </div>
                  </div>
                  <div className="buttondiv">
                  <button type="submit" className="btn btn-primary button" onClick = {this.togglecv}  style={{cursor:'pointer'}}>See CV</button>
                  <button type="submit" className="btn btn-primary button" onClick = {this.togglepersonalproj} style={{cursor:'pointer'}}>See Personal Projects</button>
                  </div>
                </div>

                <div>
                {this.state.cv &&
                  <div className = "box">
                  <Image source={"/image/MengyanResume.jpg"}
                      style={{width:636, height:900}}/>
                  </div>
                }

                </div>

                <div>
                {this.state.personalproj &&
                    <div className = "box">
                    <p>This is a 100% verified real personal project</p>
                    </div>}
                </div>

            </div>
        )
    }
}
