import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.password === "1234"){
            this.setState({
                redirect: true
            })
        }

    }


    render() {
        const { redirect } = this.state;

        if(redirect){
            return(
                <Redirect to='/SecretProjectEdit' />
            );
        }

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

            <button>Login</button>
            <br /><br /><br /><br />
            <p>or link to the <Link to='/SecretProjectEdit'>secret editing</Link> page!</p>

            </div>
        )
    }
}

export default Login;
