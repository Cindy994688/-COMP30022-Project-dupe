import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Banner from './clientbanner.jpg';
import Chao from './chaohover.png';


class ProjectsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            author: "",
            projects: "none",
            project_data: "",
            picture_hover: true,
            style: ""
        };
    }

    componentDidMount(props) {
        this.setState({
          loading: true,
          author: this.props.author
        });
        axios.get('/projects')
          .then(result => {
            this.setState({
              isLoading: false,
              project_data: result.data
            })
            console.log(this.state.project_data);
          });
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    render(props) {
        const clicked = {
            color: "#cdcdcd"
        }

        var project_desc = null;
        if(this.state.project === "1"){
            project_desc = this.state.project_data[0].description;
        } else if(this.state.project === "2"){
            project_desc = this.state.project_data[1].description;
        } else if(this.state.project === "3"){
            project_desc = this.state.project_data[2].description;
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

                <p>DEBUG INFO:</p>
                <p>{this.state.author}</p>

                <br/>
                <button
                  name="style"
                  value="thing1"
                  onClick={this.handleChange}
                >Thing 1</button><br/>
                <button
                  name="style"
                  value="thing2"
                  onClick={this.handleChange}
                >Thing 2</button><br/>

                <div className={this.state.style}>
                <p>Some text???</p>
                <h1>and  aheading </h1>
                </div>

                <button
                  name="picture_hover"
                  value={false}
                  onClick={this.handleChange}
                >Undo hover button</button>

                <div class="imgcontainer">
                    <img
                      src= {this.state.picture_hover ? Banner : Chao}
                      alt="clientbanner"
                      name="picture_hover"
                      value={this.state.picture_hover === true ? !this.state.picture_hover : !this.state.picture_hover}
                      onMouseOver={this.handleChange}
                    />
                </div>

            </div>
        )
    }
}

export default ProjectsPage;
