import React, { Component } from 'react';
import {View, Image} from 'react-native';

export default function Card(){

    return(

    <View>
    <Image 
        source={require('../../src/pages/imgbanner.jpg')}  
        style={{width: 700, height: 300}} 
    />
  </View>
    )

}