import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import './pages.css'
import './darkmode.css'
import './access.css'
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
        <div className={"contact"+this.props.colourMode}>
        <br /><br />


          <div className = {"bioTextStable"+this.props.colourMode}>If you are interested in any of the
          projects or information you see on this page, please contact us
          below, or email us directly through one of the email addresses listed in our
          profiles. We look forward to hearing from you!  <p></p> </div>


          <form action="/email" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div>
                  <div className = {"bioTextContact"+this.props.colourMode}>
                  <label htmlFor="name">Name</label>
                  </div>
                  <input type="text" className={"form-control"+this.props.colourMode+ " contactForm"+this.props.colourMode} placeholder = "Enter Name"
                  value={this.state.name} onChange={this.onNameChange.bind(this)}/>
              </div>
              <div>
                <div className = {"bioTextContact"+this.props.colourMode}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                </div>
                <input type="email" className={"form-control"+this.props.colourMode} className={"contactForm"+this.props.colourMode} aria-describedby="emailHelp" placeholder = "Enter Email"
                value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
              </div>
              <div>
                <div className = {"bioTextContact"+this.props.colourMode}>
                <label htmlFor="message">Message</label>
                </div>
                <div>
                <textarea className={"form-control"+this.props.colourMode} rows="5" className={"messageForm"+this.props.colourMode} placeholder = "Enter Message"
                value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                </div>
              </div>
            <button type="submit" className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " buttonsubmit"+this.props.colourMode}>Submit</button>
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
