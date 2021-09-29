import React from "react";
import "./App.css";
import Login from "./Login/login";
import  SignUp from "./Register/SignUp";
import ForgotPass from "./forgotPassword/forgotPassword";
import ResetPass from "./components/ResetPassword/resetPassword";
import Dashboard from "./components/dashboard/dashboard"
import{Route, Switch} from 'react-router-dom'
import ErrorPage from "../src/components/errorPage";
import ProtectedRoute from "../src/components/protectedRouter";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route exact path='/' component={Login}/>
        <Route path="/forgotPassword" component={ForgotPass} exact />
        <Route path="/resetpassword/:token" component={ResetPass} exact />
        
        <Route component={ErrorPage} /> 
        </Switch>
      </div>      
  );
}

export default App;
