import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.MainContainer}>
        <Image 
            source={require('./imgbanner.jpg')}  
            style={{width: 400, height: 400, borderRadius: 400/ 2}} 
        />
        <Text style={styles.text}>Client name (oops this is too big)</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0dcdc',
    },
    text: {
      marginTop: 30,
      fontSize: 40,
      color: '#0250a3',
      fontWeight: 'bold',
    },
  });