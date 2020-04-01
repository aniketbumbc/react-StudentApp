import React, {Component} from 'react';
import './App.css';
import './style.css';
import Registranation from './components/Registranation';
import DisplayStudent from './components/DisplayStudents';
import Home from './components/Home';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div className="mb-3">
        <h1> Welcome to React Application</h1>
        <Router>
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to ="/"> Home </Link>
              </li>
              <li className="list-inline-item">
                <Link to ="/Students"> SForm </Link>
              </li>
              <li className="list-inline-item">
                <Link to ="/SData"> SData </Link>
              </li>
            </ul>
          </nav>

          <Switch>
          <Route exact path="/Students" Component = {Registranation}>
          <Registranation/>
          </Route>
          <Route path="/SData" Component ={DisplayStudent}> 
          <DisplayStudent/>        
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
