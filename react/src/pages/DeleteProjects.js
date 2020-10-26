import React from 'react';
import axios from 'axios';

import { ToggleButton } from 'react-bootstrap';

import './darkmode.css';

class DeleteProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            person: "",
            allProjects: "",
            shownProjects: "",
            selectedProject: "none"
        };
    }


    componentDidMount(props) {
        axios.get('/projects')
            .then(result => {
                var projects = [];
                var i;
                for(i=0;i<result.data.length;i++){
                  result.data[i].order = i;
                  projects.push(result.data[i]);
                }
                console.log(projects);
                this.setState({isLoading: false,
                               allProjects: projects});
            })
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    personChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value,
        selectedProject: "none"
      })
    }

    deleteProject = (event) => {
      const {value} = event.target;
      if(value === null){
        return;
      }
      //Outgoing call to server to delete project at the 'value' position.
      console.log(value);
    }


    render(props){

        var i;
        var projects = [];
        for(i=0;i<this.state.allProjects.length;i++){
          if(this.state.allProjects[i].name === this.state.person){
            projects.push(this.state.allProjects[i]);
          }
        }
        var projectLength = projects.length;

        var projectDesc = null;
        var projectNum = null;
        if(this.state.selectedProject === "1"){
            projectDesc = projects[0].description;
            projectNum = projects[0].order;
        } else if(this.state.selectedProject === "2"){
            projectDesc = projects[1].description;
            projectNum = projects[1].order;
        } else if(this.state.selectedProject === "3"){
            projectDesc = projects[2].description;
            projectNum = projects[2].order;
        } else if(this.state.selectedProject === "4"){
            projectDesc = projects[3].description;
            projectNum = projects[3].order;
        } else if(this.state.selectedProject === "5"){
            projectDesc = projects[4].description;
            projectNum = projects[4].order;
        } else if(this.state.selectedProject === "6"){
            projectDesc = projects[5].description;
            projectNum = projects[5].order;
        }

        return(
            <div className = "bioTextDark">

            <label>Select Person: </label>
            <select
                value={this.state.person}
                onChange={this.personChange}
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

            <div className = "buttonBox">

              {(projectLength >= 1) &&
                  <button type="submit"
                      className="btnDark btn-primaryDark buttonDark"
                      style={{cursor:'pointer'}}
                      name="selectedProject"
                      value={this.state.selectedProject === "1" ? "none" : "1"}
                      onClick = {this.handleChange}
                  >{projects[0].projectTitle}</button>
              }

              {(projectLength >= 2) &&
                  <button type="submit"
                      className="btnDark btn-primaryDark buttonDark"
                      style={{cursor:'pointer'}}
                      name="selectedProject"
                      value={this.state.selectedProject === "2" ? "none" : "2"}
                      onClick = {this.handleChange}
                  >{projects[1].projectTitle}</button>
              }

              {(projectLength >= 3) &&
                  <button type="submit"
                      className="btnDark btn-primaryDark buttonDark"
                      style={{cursor:'pointer'}}
                      name="selectedProject"
                      value={this.state.selectedProject === "3" ? "none" : "3"}
                      onClick = {this.handleChange}
                  >{projects[2].projectTitle}</button>
              }

              {(projectLength >= 4) &&
                  <button type="submit"
                      className="btnDark btn-primaryDark buttonDark"
                      style={{cursor:'pointer'}}
                      name="selectedProject"
                      value={this.state.selectedProject === "4" ? "none" : "4"}
                      onClick = {this.handleChange}
                  >{projects[3].projectTitle}</button>
              }

              {(projectLength >= 5) &&
                  <button type="submit"
                      className="btnDark btn-primaryDark buttonDark"
                      style={{cursor:'pointer'}}
                      name="selectedProject"
                      value={this.state.selectedProject === "5" ? "none" : "5"}
                      onClick = {this.handleChange}
                  >{projects[4].projectTitle}</button>
              }

              {(projectLength >= 6) &&
                  <button type="submit"
                      className="btnDark btn-primaryDark buttonDark"
                      style={{cursor:'pointer'}}
                      name="selectedProject"
                      value={this.state.selectedProject === "6" ? "none" : "6"}
                      onClick = {this.handleChange}
                  >{projects[5].projectTitle}</button>
              }

            </div>

            <div className="bioTextDark">{projectDesc}</div>

            <button type="submit"
                className="btnDark btn-primaryDark buttonDark"
                style={{cursor:'pointer'}}
                value={projectNum}
                onClick = {this.deleteProject}
            >Delete Project</button>

            </div>
        )
    }
}

export default DeleteProjects;
