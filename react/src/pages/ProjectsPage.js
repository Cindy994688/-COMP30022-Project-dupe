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
            author: this.props.author
        });
        axios.get('/projects')
            .then(result => {
                var authorProjects = [];
                var i, j;
                //Only adding in projects that belong to the shown client.
                //Sorting them based on position, with position 1 shown before 6.
                for(i=0;i<result.data.length;i++){
                    for(j=1;j<=6;j++){
                        if(result.data[i].name === this.state.author && result.data[i].position === j){
                            authorProjects.push(result.data[i]);
                        }
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
        //Storing project length.
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


            {/*KNOWN BUG: buttons are initially centered, but upon being selected
            they align to the left of the text below them*/}

                {(projectLength >= 1) &&
                    <button type="submit"
                        className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode}
                        style={{cursor:'pointer'}}
                        name="project"
                        value={this.state.project === "1" ? "none" : "1"}
                        onClick = {this.handleChange}
                    >{button1}</button>
                }

                {(projectLength >= 2) &&
                    <button type="submit"
                        className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode}
                        style={{cursor:'pointer'}}
                        name="project"
                        value={this.state.project === "2" ? "none" : "2"}
                        onClick = {this.handleChange}
                    >{button2}</button>
                }

                {(projectLength >= 3) &&
                    <button type="submit"
                        className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode}
                        style={{cursor:'pointer'}}
                        name="project"
                        value={this.state.project === "3" ? "none" : "3"}
                        onClick = {this.handleChange}
                    >{button3}</button>
                }

                {(projectLength >= 4) &&
                    <button type="submit"
                        className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode}
                        style={{cursor:'pointer'}}
                        name="project"
                        value={this.state.project === "4" ? "none" : "4"}
                        onClick = {this.handleChange}
                    >{button4}</button>
                }

                {(projectLength >= 5) &&
                    <button type="submit"
                        className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode}
                        style={{cursor:'pointer'}}
                        name="project"
                        value={this.state.project === "5" ? "none" : "5"}
                        onClick = {this.handleChange}
                    >{button5}</button>
                }

                {(projectLength >= 6) &&
                    <button type="submit"
                        className={"btn"+this.props.colourMode+ " btn-primary"+this.props.colourMode+ " button"+this.props.colourMode}
                        style={{cursor:'pointer'}}
                        name="project"
                        value={this.state.project === "6" ? "none" : "6"}
                        onClick = {this.handleChange}
                    >{button6}</button>
                }

                {/*Rendering the project description. Only renders the git repo if it exists*/}
                {(this.state.project !== "none") &&
                <div className = {"bioText"+this.props.colourMode}>
                {gitRep && <p>Link to the git repository: {gitRep}</p>}
                <p>{projectDesc}</p>
                </div>}

            </div>
        )
    }
}

export default ProjectsPage;
