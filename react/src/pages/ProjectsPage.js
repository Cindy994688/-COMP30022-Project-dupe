import React from 'react'
import { Link } from 'react-router-dom'

class ProjectsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            project: "none"
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    render() {
        const clicked = {
            color: "#cdcdcd"
        }

        var project_desc = null;
        if(this.state.project === "1"){
            project_desc = "This is a description for project 1";
        } else if(this.state.project === "2"){
            project_desc = "This is a description for project 2";
        } else if(this.state.project === "3"){
            project_desc = "This is a description for project 3";
        }

        return(
            <div className="container">
                <h1>Projects Page, or go back to the <Link to="/">Home</Link> page.</h1>
                <p>Here's the projects page.</p>

                <br /><br />

                <button
                    style={this.state.project === "1" ? clicked : null}
                    name="project"
                    value={this.state.project === "1" ? "none" : "1"}
                    onClick={this.handleChange}
                >Project 1</button>
                <button
                    style={this.state.project === "2" ? clicked : null}
                    name="project"
                    value={this.state.project === "2" ? "none" : "2"}
                    onClick={this.handleChange}
                >Project 2</button>
                <button
                    style={this.state.project === "3" ? clicked : null}
                    name="project"
                    value={this.state.project === "3" ? "none" : "3"}
                    onClick={this.handleChange}
                >Project 3</button>

                {this.state.project !== "none" ?
                <div><hr /><p>{project_desc}</p><hr /></div> :
                <div></div>
                }
                <br /><br />
                <p>And then some more things go here. :)</p>
            </div>
        )
    }
}

export default ProjectsPage;
