import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
//thank you to https://www.youtube.com/watch?v=x5oiX93DeHA
import './pages.css'
import './darkmode.css'

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
                <div className = {"topTriangle thirdColor"+this.props.colourMode}>
                    <div className={"intro"+this.props.colourMode + " title"+this.props.colourMode}> Our Project </div>
                    {/*<div className="title" id="ourproject">*/}
                    {/*<div className="title"> Our Project </div>*/}
                    <div className={"sub"+this.props.colourMode}> Beth’s Beauty - Your best beauty services </div>
                    <div className={"buttondiv"+this.props.colourMode}>
                    <button type="submit" className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode} onClick = {this.toggle}  style={{cursor:'pointer'}}>learn about our project</button>
                    </div>
                    <div>&nbsp;&nbsp;</div>
                </div>
                {/*<button onClick = {this.toggle}>clickme</button>*/}

                {this.state.on && this.props.children}
            </div>
        )
    }
}
