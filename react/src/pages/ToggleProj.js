import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA

export default class ToggleProj extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
            <div>
                <Jumbotron className = "groupPr gradient-button-3" onClick = {this.toggle} style={{cursor:'pointer'}}>
                    <div className="groupPrTitle"><h1>OUR PROJECT</h1><p>{this.state.on && this.props.children}</p></div>
                </Jumbotron>
                {/*<button onClick = {this.toggle}>clickme</button>*/}

                {this.state.on && this.props.children}
            </div>
        )
    }
}