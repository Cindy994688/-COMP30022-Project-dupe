import React, { Component } from 'react'
import SnowFlake from './SnowFlake.js'
import './fullScreenDiv.css'

export default class Snow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xMouse: 0,
      xMousePrev: 0,
      xDelta: 0,
      yDelta: 0,
      snowFlakeCoords: [],
      snowFlakes: [],
    }
  };




  render() {
    return (
        <div>
            mocked snow yo
        </div>
      );
  };
}
