import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import './pages.css'
import './darkmode.css'
import './access.css'



class Profile extends React.Component {

  render ( props ) {
    return (
          <div className="profileImage">
          <Image
            //source={require('./imgbanner.jpg')}
            source={this.props.img}
            style={{width: 300, height: 300, borderRadius: 300/ 2}}/>
          <div className = {"profileName"+this.props.colourMode}>{this.props.clientname}</div>
        </div>


    )
  }
}

  export default Profile;
