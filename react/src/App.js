import React, {Component} from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
// ahhhhhhhhhhhhh
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import Login from './pages/Login'
import EditProjects from './pages/EditProjects'

class App extends Component {
  state = {data:null};

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={Login} />
        <p>this.state.data</p>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default  App;
