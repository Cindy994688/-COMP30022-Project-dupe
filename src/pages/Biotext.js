import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text } from 'react-native';

export default function Biotext() {
    return (
    <View style={styles.MainContainer2}>
        <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ultricies enim, quis mattis augue. Mauris mattis pulvinar felis sit amet sollicitudin. Nullam dapibus a sem sed convallis. Nullam porta risus porta dui feugiat, eget facilisis metus volutpat. Sed sit amet sem ut justo suscipit malesuada eget a erat. Pellentesque lacinia tellus ut tortor commodo, at consequat massa auctor. Cras eget faucibus lorem. Sed feugiat quam vitae mi semper, id mollis lacus suscipit.</Text>
    </View>
    )
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
      marginTop: 30,
      fontSize: 20,
      color: 'black',
      alignItems: 'center',
    },
  });

