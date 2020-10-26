import React from 'react';
import axios from 'axios';
import { ToggleButton } from 'react-bootstrap';
import './darkmode.css'
import './pages.css'

import EditProjects from './EditProjects';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            login: false,
            title: "Login to add projects."
        };
        this.onKeyDown = this.onKeyDown.bind(this);
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        //console.log("bye");
        this.setState({
            [name]: value
        })

        //console.log("Edit");
    }


    toHome = () => {
      this.props.history.push('/');
    }

    onKeyDown(e){
      if(e.keyCode == 13){
        axios.post('/login', {username:this.state.username, password:this.state.password})
            .then((res)=>{
              console.log(res);
                if(res.data===true){
                    console.log('1');
                    this.setState({login: true,
                                   username: "",
                                   password: "",
                                   title: "Logged in."});
                } else if (res.data===false){
                    console.log('2');
                    this.setState({login: false,
                                   username: "",
                                   password: "",
                                   title: "Login failed. Please try again.",});
                }
            })
      }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const description = axios.post('/login', {username:this.state.username, password:this.state.password})
            .then((res)=>{
              console.log(res);
                if(res.data===true){
                    console.log('1');
                    this.setState({login: true,
                                   username: "",
                                   password: "",
                                   title: "Logged in."});
                } else if (res.data===false){
                    console.log('2');
                    this.setState({login: false,
                                   username: "",
                                   password: "",
                                   title: "Login failed. Please try again."});
                }
            })

        //console.log("Submit");
    }


    render() {
      if(!this.state.login){
        return(
            <div className = {"fullPageDark"}>

              <button
                className = {"modeButtonDark"}
                onClick={this.toHome}
              >Home</button>

              <h1 className={"title"}>{this.state.title}</h1>

              <br />

              <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleChange}
                  onKeyDown={this.onKeyDown}
              />
              <br />

              <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                  onKeyDown={this.onKeyDown}
              />
              <br />

              <button onClick={this.handleSubmit}>Login</button>

            </div>
        )
      } else {
        return(
          <div className = {"fullPageDark"}>
            <button
              className = {"modeButtonDark"}
              onClick={this.toHome}
            >Home</button>

            <h1 className={"title"}>{this.state.title}</h1>
            <br />

            <EditProjects colourMode = "Dark" />

          </div>
        )
      }
    }
}

export default Login;
