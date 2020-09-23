import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';

class Biotext extends React.Component {
  render (props) {
      return (
      <View style={styles.MainContainer2}>
          <Text style={styles.text2}>{this.props.clientdescr}</Text>
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    MainContainer2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'left',
      padding: "30px",
      display: 'inline-block',
      width: '800px',
      padding: "50px"
    },
    text2: {
      //marginTop: 50,
      fontSize: 20,
      color: 'black',
      alignItems: 'center',

    },
  });

export default Biotext;