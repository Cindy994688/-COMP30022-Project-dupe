import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';
import './pages.css'



class Profile extends React.Component {

  render ( props ) {
    return (
      <div className = "vertBox">
        <View style={styles.MainContainer}>
          <div>
        <Image 
            //source={require('./imgbanner.jpg')}  
            source={this.props.img}  
            style={{width: 300, height: 300, borderRadius: 300/ 2}}
        />
        <Text style={styles.text} className = "txtColor">{this.props.clientname}</Text>
        </div>
      </View>

      </div>
    )
  }
}

  const styles = StyleSheet.create({
    MainContainer: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: "50px",
    },
    text: {
      marginTop: 30,
      fontSize: 40,
      color: '#43203A',
      fontFamily: ' "Kaushan", Times, serif',
      fontWeight: 'bold',
      padding: "20px",
      display: 'inline-block',
    },
  });

  export default Profile;