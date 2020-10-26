import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class EditProjects extends React.Component {
    constructor() {
        super();
        this.state = {
            person: "",
            projects: {
                chaowei: "1",
                ronchiu: "2",
                mustafa: "3",
                xuhan: "4",
                mengyan: "5"
            },
            title: "",
            description: "",
            giturl: "",
            position: 0
        };
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        var person = this.state.projects[this.state.person];
        console.log(person + ": " + this.state.description);
        axios.post('/project', {name: this.state.person,
            projectTitle: this.state.title,
            linktogitrepo: this.state.giturl,
            description: this.state.description,
            position: this.state.position});

    }


    render(){
        return(
            <div className = {"bioText"+this.props.colourMode}>

            <label>Select Person: </label>
            <select
                value={this.state.person}
                onChange={this.handleChange}
                name="person"
            >
                <option value="">-</option>
                <option value="chaowei">Chao-Wei Chiang</option>
                <option value="ronchiu">Ron Chiu</option>
                <option value="mustafa">Mustafa Awni</option>
                <option value="xuhan">Xu Han</option>
                <option value="mengyan">Mengyan Hou</option>
            </select>
            <br />

            <label>Project Title: </label>
            <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <br />

            <label>Project Description: </label>
            <textarea
                className = "textAreaDark"
                name="description"
                cols="120"
                rows="8"
                value={this.state.description}
                onChange={this.handleChange}
            />
            <br />

            <label>Github URL: </label>
            <input
                type="text"
                name="giturl"
                value={this.state.giturl}
                onChange={this.handleChange}
            />
            <br />

            <label>Select Priority: </label>
            <select
                value={this.state.position}
                onChange={this.handleChange}
                name="position"
            >
                <option value="">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <br />

            <button onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
}

export default EditProjects;
