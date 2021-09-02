import React from "react";
import "./App.css";
import Login from "./Login/login";
import  SignUp from "./Register/SignUp";
import{Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/SignUp' component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
