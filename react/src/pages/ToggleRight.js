import React, { Component } from 'react'
import {Jumbotron,Col,Row, ToggleButton, Card, Container} from 'reactstrap'
import Profile from './Profile.js'
import UserInfo from './userInfo.js'
import axios from 'axios'
import './pages.css'
import './darkmode.css'
import './access.css'
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
          <div className="profile">
          <div className="profileRow">
          <Profile img = {'/image/'+this.props.name+'.jpg'} clientname = {this.state.fullname} colourMode = {this.props.colourMode}/>

          <div className="profileColumn">
          <div className="profileInfo">
            <UserInfo clientname = {this.props.name} type = "description" colourMode = {this.props.colourMode}/>
            <UserInfo clientname = {this.props.name} type = "skills" colourMode = {this.props.colourMode}/>
            <UserInfo clientname = {this.props.name} type = "email" colourMode = {this.props.colourMode}/>
          </div>

                  <div className={"buttondiv"+this.props.colourMode}>
                    <button type="submit" className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode} onClick = {this.togglecv}  style={{cursor:'pointer'}}>See CV</button>
                    <button type="submit" className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode} onClick = {this.togglepersonalproj} style={{cursor:'pointer'}}>See Personal Projects</button>
                  </div>
            </div>
            </div>


            {this.state.cv &&
              <div className = {"box"+this.props.colourMode}>
              <img src={"/image/"+this.props.name+"Resume.jpg"}
                  className="cvPhoto" alt={this.props.name+"CV"}/>
              </div>
            }

          {this.state.personalproj &&
              <div className = {"box"+this.props.colourMode}>
              <p>This is a 100% verified real personal project</p>
              </div>}
        </div>

        )
    }
}
