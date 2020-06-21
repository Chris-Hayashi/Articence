import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import GoogleLogin from "./components/GoogleLogin";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">

            <Navbar />
            
            <Switch>
              <Route exact path="/" component={GoogleLogin} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
