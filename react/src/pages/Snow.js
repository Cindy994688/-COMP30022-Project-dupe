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
      height: window.innerHeight
    }
    this.updateLoc = this.updateLoc.bind(this);
  };


  initialiseFlakes() {
    var area = this.state.width * this.state.height;
    var flakes = (area * this.props.density) / 100000;
    var count = 0;
    var coordinates = [];
    flakes = flakes / 1;
    while (count < flakes) {
      coordinates.push({
        x: (100 * count + Math.floor(Math.random() * 100)) % this.state.width,
        y: Math.floor(Math.random() * 10000) % this.state.height
      });
      count ++;
    }
    this.setState({snowFlakeCoords: coordinates})
  }

  componentDidMount() {
    this.initialiseFlakes();
    this.renderFlakes();
    this.timerID = setInterval(() => {
      this.fall();
      this.drift();
      this.renderFlakes();
    }, 10)
  }
  fall() {
    this.setState((state) => ({
      yDelta: state.yDelta + 1
    }));
  }

  drift() {
    if (this.xMouse !== this.xMousePrev && this.xMouse !== 0 && this.xMousePrev !== 0) {
      this.setState((state) => ({
        xDelta: (Math.floor(state.xDelta + ((this.xMouse - this.xMousePrev)))),
        xMousePrev: state.xMouse,
      }));
    } else this.setState((state) => ({xMousePrev: state.xMouse}))

  }

  updateLoc(e) {
    console.log('movin: ')
    this.setState({xMouse: e.clientX})
  };

  renderFlakes() {
    if (this.state.snowFlakeCoords.length > 0) {
      var coordinate;
      var flakes = [];
      for (coordinate of this.state.snowFlakeCoords) {
        flakes.push(<SnowFlake key={Math.random() * 100} x={(coordinate.x + this.state.xDelta)} y={(coordinate.y + this.state.yDelta) % window.innerHeight}/>)
      }
      this.setState({snowFlakes: flakes})
    }
  }

  render() {
    return (
        <div className='fullScreenDiv' onMouseMove={this.updateLoc}>
            {this.state.snowFlakes}
            <SnowFlake x={20} y={50}/>
        </div>
      );
    };
}
