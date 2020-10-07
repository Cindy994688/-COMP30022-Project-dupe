import React from 'react';
<<<<<<< HEAD
import { Link, Redirect } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import axios from 'axios';
>>>>>>> dynamicwebsite

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

        console.log("Edit");
    }


    handleSubmit = (event) => {
        event.preventDefault();
<<<<<<< HEAD
        if(this.state.password === "1234"){
            this.setState({
                redirect: true
            })
        }

=======
        const description = axios.get('/password/'+ this.state.password)
            .then((res)=>{
                if(res===true){
                    console.log('1');
                } else if (res===false){
                    console.log('2');
                }
            })

        console.log("Submit");
>>>>>>> dynamicwebsite
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

<<<<<<< HEAD
            <button>Login</button>
            <br /><br /><br /><br />
            <p>or link to the <Link to='/SecretProjectEdit'>secret editing</Link> page!</p>
=======
            <button onClick={this.handleSubmit} >Login</button>
>>>>>>> dynamicwebsite

            </div>
        )
    }
}

export default Login;
