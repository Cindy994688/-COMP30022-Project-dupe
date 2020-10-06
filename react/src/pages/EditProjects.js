import React from "react";
import { Link } from "react-router-dom";

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
            description: "Project description!",
            colour: ""
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

    }


    render(){
        return(
            <div>
            <h1>Enter any changes to your personal projects here! <Link to="/">Home</Link></h1>

            <label>Select person: </label>
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
            <br /><br />

            <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
            />
            <br /><br />

            <label>Select a colour: </label>
            <select
                value={this.state.person}
                onChange={this.handleChange}
                name="colour"
            >
                <option value="">-</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
            </select>
            <br /><br />

            {/* if an image upload could go here as well, that'd be swell! */}

            <button onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
}

export default EditProjects;
