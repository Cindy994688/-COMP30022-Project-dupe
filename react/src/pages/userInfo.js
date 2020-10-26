import React from 'react';
import Biotext from './Biotext.js'
import axios from 'axios'
import './pages.css'


class UserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      output: "",
    };
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
      const description = axios.get('/user/'+ this.props.clientname)
        .then((res)=>{
          console.log(res);
          console.log(res.data[0].description);
          if(this.props.type==="name"){
            this.setState({
              output: res.data[0].name,
            })
          }
          if(this.props.type==="description"){
            this.setState({
              output: res.data[0].description,
            })
          }
          if(this.props.type==="email"){
            this.setState({
              output: "Contact: " + res.data[0].contact[0],
            })
          }
          if(this.props.type==="skills"){
            this.setState({
              output: "Field: "+res.data[0].skills,
            })
          }
        });
  }


  render ( props ) {
    const data = this.state.output;

    return (
      <div className = {"bioText"+this.props.colourMode}>{data}</div>
    )
  }
}

export default UserInfo;
