import React from 'react';
import { Link } from 'react-router-dom';

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
        console.log("bye");
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi");

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
                type="text"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
            />
            <br />

            <button>Login</button>

            </div>
        )
    }
}

export default Login;
