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
      width: window.innerWidth,
    }
  };


  initialiseFlakes() {
    var area = this.state.width * this.props.height;
    var flakes = (area * this.props.density) / 100000;
    var count = 0;
    var coordinates = [];
    flakes = flakes / 1;
    while (count < flakes) {
      coordinates.push({
        x: (100 * count + Math.floor(Math.random() * 100)) % this.state.width,
        y: Math.floor(Math.random() * 10000) % this.props.height
      });
      count ++;
    }
    this.setState({snowFlakeCoords: coordinates})
  }

  componentDidMount() {
    console.log("The height I be gettin: " + this.state.height)
    this.initialiseFlakes();
    this.renderFlakes();
    this.timerID = setInterval(() => {
      this.fall();
      this.renderFlakes();
    }, 10)
  }

  fall() {
    this.setState((state) => ({
      yDelta: state.yDelta + 1
    }));
  }

  renderFlakes() {
    if (this.state.snowFlakeCoords.length > 0) {
      var coordinate;
      var flakes = [];
      for (coordinate of this.state.snowFlakeCoords) {
        flakes.push(<SnowFlake key={Math.random() * 100} x={(coordinate.x + this.state.xDelta)} y={(coordinate.y + this.state.yDelta) % (this.props.height + 80)}/>)
      }
      this.setState({snowFlakes: flakes})
    }
  }

  render() {
    return (
        <div>
            {this.state.snowFlakes}
        </div>
      );
  };
}
