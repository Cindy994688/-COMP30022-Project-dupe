import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.MainContainer}>
        <Image 
            source={require('./imgbanner.jpg')}  
            style={{width: 300, height: 300, borderRadius: 300/ 2}}
        />
        <Text style={styles.text}>CLIENT NAME</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'left',
      padding: "50px"
    },
    text: {
      marginTop: 30,
      fontSize: 40,
      color: 'black',
      fontWeight: 'bold',
      alignItems: 'center',
      padding: "10px",
      display: 'inline-block'
    },
  });