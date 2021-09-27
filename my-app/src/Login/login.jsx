import React from "react";
import { Grid, Paper, TextField, Button, Typography} from "@material-ui/core";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import * as Yup from 'yup'
import './login.scss'
import { useHistory } from 'react-router-dom';
import { UserNode } from "../Services/userAPI";
//import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const userNode = new UserNode ()

const Login = (props) => {
  const history = useHistory();  
  const initialValues = {
    emailId:'',
    password:''
} ;
const validationSchema=Yup.object().shape({
  emailId:Yup.string().email('please enter valid email').required("Enter a email address"),
  password:Yup.string().required("Enter a password")

});


const onSubmit=(values,props)=>{
  console.log(values)
  
  const userCredentials = {
    email: values.emailId,
    password: values.password
  };
  
  userNode.login(userCredentials)
       .then(res => {
         localStorage.setItem('token', res.data.token);
          history.push('/dashboard');
       })
        // toast.success('Login successfull!')
        .catch(error => {
          console.log(error)
      })
    };

  return (
    <Router>
    <div>
    <Grid className="formStyle">
      <Paper className="login-container login-paper">
        <div  align="center" className="login-form-container">
          <h1 className="header" data-testid="title">
            <span className="fun1">F</span>
            <span className="fun2">u</span> 
            <span className="fun3">n</span> 
            <span className="fun4">d</span> 
            <span className="fun5">o</span> 
            <span className="fun6">o</span> 
            <span className="fun1">N</span>
            <span className="fun2">o</span> 
            <span className="fun3">t</span> 
            <span className="fun4">e</span> 
            <span className="fun5">s</span>
          </h1>
          <Grid>
            <h2 data-testid="login">Sign in</h2>
          </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form data-testid="form"  className="login-form">
        <Field 
        as={TextField}
        className="EmailFieldStyle"
         data-testid="email" 
          label="email Id"
          name="emailId"
          placeholder="Enter user emailId"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="emailId"/>}
        />
        <Field 
        as={TextField}
        className="PasswordStyle"
        data-testid="password"
          label="Password"
          name="password"
          placeholder="Enter password"
          variant="outlined"
          type="password"
          fullWidth
          helperText={<ErrorMessage name="password"/>}
        />
        <Button 
        className="buttonMargin" 
        color = "primary" 
        type="submit" 
        data-testid="button"
        variant="contained"  
        //disabled={props.isSubmitting}
        fullWidth> 
        Sign in</Button> 
        {/* <ToastContainer /> */}
        <Typography className = "textspace">Create a new account? 
            <Link data-testid="link" to = '/SignUp'>
            Sign Up
            </Link>
        </Typography> 
            </Form>
          )
}
        </Formik>
        <Typography>
          <Link data-testid="submit" to = '/ForgotPass'>
            Forgot password
             </Link>
        </Typography>
        {/* <div className="forgetPassword">
              <Button color="primary" onClick={() => this.nextPath('../forgotPassword.jsx')}>Forgot password?</Button>
            </div> */}
        </div>
      </Paper>
    </Grid>
    </div>  
    </Router>
  );
};

export default Login;