import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
// ahhhhhhhhhhhhh
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={ProjectsPage} />
    </Switch>
    </BrowserRouter>
  )
}