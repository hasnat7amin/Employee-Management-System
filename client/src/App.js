import React,{useState} from 'react';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import AddEmployees from './components/AddEmployees'
import Navbar from './components/Navbar'
import UpdateEmployee from './components/UpdateEmployee'
import Profiles from './components/Profiles.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {
//JSON.parse(localStorage.getItem('user'))
  const [user, setUser] = useState(localStorage.getItem('token'))
  return (
    <Router >{
      !user? (
        <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>  
      </Switch>
      ):(
        <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/profiles">
            <Profiles />
          </Route>
          <Route exact path="/addemployee">
          <AddEmployees token={user}/>
        </Route> 
        <Route exact path="/editemployee" >
          <UpdateEmployee />
        </Route>
        </Switch>
        </div>
      )
    }
    </Router>
  );
}

export default App;
