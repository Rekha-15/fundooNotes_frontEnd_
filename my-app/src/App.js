import React from "react";
import "./App.css";
import Login from "./Login/login";
import  SignUp from "./Register/SignUp";
import ForgotPass from "./forgotPassword/forgotPassword";
import Dashboard from "./components/dashboard/dashboard"
import{Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route exact path='/' component={Login}/>
        <Route path="/forgotPassword" component={ForgotPass} exact />
        <Route path="/dashboard" component={Dashboard}/>
        )
        </Switch>
      </div>

      
  );
}

export default App;
