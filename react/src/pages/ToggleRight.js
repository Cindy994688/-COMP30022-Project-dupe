import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Profile from './Profile.js'
import UserInfo from './userInfo.js'
import axios from 'axios'
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA

export default class ToggleProj extends Component {
    state = {
        on: false,
    }

    constructor(props) {
      super(props);
      this.state = {
        output: "",
        fullname:"",
        styling:"",
      };
    }

    componentDidMount() {
      const name = axios.get('/name/'+this.props.name)
        .then((res)=>{
          this.setState({
            fullname: res.data,
          })
        });
      if(this.props.position==="left"){
        this.setState({
          styling: "box",
        })
      } else{
        this.setState({
          styling: "bgSecondary box",
        })
      };
    }


    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }


    render() {
        return (
          <div>
          <div className = "bgSecondary box" onClick = {this.toggle} style={{cursor:'pointer'}}>
          <div style={{display: 'inline-block'}}>
              <p><UserInfo clientname = {this.props.name} type = "description"/></p>
              <p><UserInfo clientname = {this.props.name} type = "skills"/></p>
              <p><UserInfo clientname = {this.props.name} type = "email"/></p>
          </div>
          <div style={{display: 'inline-block'}}>
              <Profile img = {'/image/'+this.props.name+'.jpg'} clientname = {this.state.fullname}/>
          </div>
          </div>

          {this.state.on && this.props.children}
      </div>


        )
    }
}
