import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import './pages.css'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


class Contact extends React.Component {
  constructor() {
      super();
      this.state = {
          email: "",
          name: "",
          message: ""
      };
  }

  render (props) {
      return (
        <div>
        <div className="contact">

          <div className = "getInTouchHeader">
            Get in Touch
          </div>


          <div className = "bioTextStable">If you are interested in any of the
          projects or information you see on this page, please contact us
          below, or email us directly through one of the email addresses listed in our
          profiles. We look forward to hearing from you!  <p></p> </div>


          <form action="/email" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div>
                  <div className = "bioTextContact">
                  <label htmlFor="name">Name</label>
                  </div>
                  <input type="text" className="form-control contactForm" placeholder = "Enter Name"
                  value={this.state.name} onChange={this.onNameChange.bind(this)}/>
              </div>
              <div>
                <div className = "bioTextContact">
                <label htmlFor="exampleInputEmail1">Email address</label>
                </div>
                <input type="email" className="form-control" className="contactForm" aria-describedby="emailHelp" placeholder = "Enter Email"
                value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </div>
              <div>
                <div className = "bioTextContact">
                <label htmlFor="message">Message</label>
                </div>
                <div>
                <textarea className="form-control" rows="5" className="messageForm" placeholder = "Enter Message"
                value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                </div>
              </div>
            <button type="submit" className="btn btn-primary button">Submit</button>
          </form>
        </div>
        </div>
      )
    }

    onNameChange(event) {
     this.setState({name: event.target.value});
   }

   onEmailChange(event) {
     this.setState({email: event.target.value});
   }

   onMessageChange(event) {
     this.setState({message: event.target.value});
   }

   handleSubmit(event) {
     //console.log(this.state.email);
     event.preventDefault();
     axios.post('/email', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
    this.resetForm();
  }


  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
}



  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: "50px"
    },
    text: {
      marginTop: 30,
      fontSize: 40,
      color: '#43203A',
      fontFamily: ' "Kaushan", Times, serif',
      fontWeight: 'bold',
      alignItems: 'center',
      padding: "10px",
      display: 'inline-block',
      textAlign: 'center'
    },
  });

export default Contact;
