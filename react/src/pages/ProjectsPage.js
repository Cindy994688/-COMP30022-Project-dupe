import React from 'react';
import axios from 'axios';


class ProjectsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            author: "",
            project: "none",
            projectData: "",
        };
    }

    componentDidMount(props) {
        this.setState({
            loading: true,
            author: this.props.author
        });
        axios.get('/projects')
            .then(result => {
                var authorProjects = [];
                var i;
                //Only adding in projects that belong to the shown client.
                for(i=0;i<result.data.length;i++){
                    if(result.data[i].name === this.state.author){
                    authorProjects.push(result.data[i]);
                    }
                }
                this.setState({
                    isLoading: false,
                    projectData: authorProjects
                })
                console.log(this.state.projectData);
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

        var projectLength = null;
        if(this.state.isLoading === false){
          projectLength = this.state.projectData.length;
        }

        //Assigning the project description based on which project
        //has been selected.
        var projectDesc = null;
        if(this.state.project === "1"){
            projectDesc = this.state.projectData[0].description;
        } else if(this.state.project === "2"){
            projectDesc = this.state.projectData[1].description;
        } else if(this.state.project === "3"){
            projectDesc = this.state.projectData[2].description;
        } else if(this.state.project === "4"){
            projectDesc = this.state.projectData[3].description;
        } else if(this.state.project === "5"){
            projectDesc = this.state.projectData[4].description;
        } else if(this.state.project === "6"){
            projectDesc = this.state.projectData[5].description;
        }

        //Assigning the git repository based on which project has
        //been selected.
        var gitRep = "";
        if(this.state.project === "1"){
            gitRep = this.state.projectData[0].linktogitrepo;
        } else if(this.state.project === "2"){
            gitRep = this.state.projectData[1].linktogitrepo;
        } else if(this.state.project === "3"){
            gitRep = this.state.projectData[2].linktogitrepo;
        } else if(this.state.project === "4"){
            gitRep = this.state.projectData[3].linktogitrepo;
        } else if(this.state.project === "5"){
            gitRep = this.state.projectData[4].linktogitrepo;
        } else if(this.state.project === "6"){
            gitRep = this.state.projectData[5].linktogitrepo;
        }
        if(gitRep.length === 0){
          gitRep = null;
        }

        //Assigning project titles to the buttons.
        if(this.state.isLoading === false && projectLength >= 1){
            var button1 = this.state.projectData[0].projectTitle;
        }
        if(this.state.isLoading === false && projectLength >= 2){
            var button2 = this.state.projectData[1].projectTitle;
        }
        if(this.state.isLoading === false && projectLength >= 3){
            var button3 = this.state.projectData[2].projectTitle;
        }
        if(this.state.isLoading === false && projectLength >= 4){
            var button4 = this.state.projectData[3].projectTitle;
        }
        if(this.state.isLoading === false && projectLength >= 5){
            var button5 = this.state.projectData[4].projectTitle;
        }
        if(this.state.isLoading === false && projectLength >= 6){
            var button6 = this.state.projectData[5].projectTitle;
        }

        return(
            <div className="container">
            {/*Displays buttons based on the length of projects shown.
            //Each button changes which project description is shown.*/}
                {projectLength >= 1 ?
                  <button
                      style={this.state.project === "1" ? clicked : null}
                      name="project"
                      value={this.state.project === "1" ? "none" : "1"}
                      onClick={this.handleChange}
                  >{button1}</button>
                : null}
                {projectLength >= 2 ?
                  <button
                      style={this.state.project === "2" ? clicked : null}
                      name="project"
                      value={this.state.project === "2" ? "none" : "2"}
                      onClick={this.handleChange}
                  >{button2}</button>
                : null}
                {projectLength >= 3 ?
                  <button
                    style={this.state.project === "3" ? clicked : null}
                    name="project"
                    value={this.state.project === "3" ? "none" : "3"}
                    onClick={this.handleChange}
                >{button3}</button>
                : null}
                {projectLength >= 4 ?
                  <button
                    style={this.state.project === "4" ? clicked : null}
                    name="project"
                    value={this.state.project === "4" ? "none" : "4"}
                    onClick={this.handleChange}
                >{button4}</button>
                : null}
                {projectLength >= 5 ?
                  <button
                    style={this.state.project === "5" ? clicked : null}
                    name="project"
                    value={this.state.project === "5" ? "none" : "5"}
                    onClick={this.handleChange}
                >{button5}</button>
                : null}
                {projectLength >= 6 ?
                  <button
                    style={this.state.project === "6" ? clicked : null}
                    name="project"
                    value={this.state.project === "6" ? "none" : "6"}
                    onClick={this.handleChange}
                >{button6}</button>
                : null}

                {/*Rendering the project description.*/}
                {this.state.project !== "none" ?
                <div><hr /><p>{projectDesc}</p>
                {/*Only renders the git repo is it exists*/}
                {gitRep !== null ?
                <p>Link to the git repository: {gitRep}</p> :
                null}
                <hr /><br /><br /></div> :
                <div><br /><br /></div>
                }

                {/*Debug info.*/}
                {/*<p>DEBUG INFO:</p>
                <p>{this.state.author}</p>
                <p>{this.state.author === this.props.author ? "True" : "False"}</p>
                <p>{console.log(this.state)}</p>
                <p>{console.log(this.props)}</p>*/}

            </div>
        )
    }
}

export default ProjectsPage;
