import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })

        console.log("Edit");
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const description = axios.get('/password/'+ this.state.password)
            .then((res)=>{
                if(res===true){
                    console.log('1');
                } else if (res===false){
                    console.log('2');
                }
            })

        console.log("Submit");
    }


    render() {
        return(
            <div>
            <h1>This is a login page! :)      <Link to="/">Home</Link></h1>
            <br />

            <input
                type="text"
                name="username"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
            />
            <br />

            <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
            />
            <br />

            <button onClick={this.handleSubmit} >Login</button>

            </div>
        )
    }
}

export default Login;
