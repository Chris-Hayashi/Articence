import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import GoogleLogin from "./components/GoogleLogin";
import TableSort from "./components/TableSort";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">

            <Navbar />

            {/* <Graph /> */}
            
            <Switch>
              <Route exact path="/" component={GoogleLogin} />
            </Switch>
          </div>
          <div>
            <TableSort />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
