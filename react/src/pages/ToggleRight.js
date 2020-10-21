import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Profile from './Profile.js'
import UserInfo from './userInfo.js'
import axios from 'axios'
import './pages.css'
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
          <div>
          <div className = "bgSecondary vertBox" onClick = {this.toggle} style={{cursor:'pointer'}}>
            <div className = "bgSecondary box">
              <div className = "vertBox">
                  <p><UserInfo clientname = {this.props.name} type = "description"/></p>
                  <p><UserInfo clientname = {this.props.name} type = "skills"/></p>
                  <p><UserInfo clientname = {this.props.name} type = "email"/></p>
              </div>
              <div>
                  <Profile img = {'/image/'+this.props.name+'.jpg'} clientname = {this.state.fullname}/>
              </div>
             </div>
             <div className="buttondiv">
             <button type="submit" className=" btn btn-primary button" onClick = {this.togglecv}  style={{cursor:'pointer'}}>See CV</button>
             <button type="submit" className=" btn btn-primary button" onClick = {this.togglepersonalproj} style={{cursor:'pointer'}}>See Personal Projects</button>
             </div>
          </div>

          <div>
          {this.state.cv &&
            <div className = "bgSecondary box">
            <Image source={"/image/MengyanResume.jpg"}
                style={{width:636, height:900}}/>
            </div>
          }

          </div>

          <div>
          {this.state.personalproj &&
              <div className = "bgSecondary box">
              <p>This is a 100% verified personal project</p>
              </div>}
          </div>

      </div>


        )
    }
}
