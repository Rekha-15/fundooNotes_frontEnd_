import React from "react";
import { Grid, Paper, TextField, Button, Typography} from "@material-ui/core";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import './login.scss'
import { useHistory } from 'react-router-dom';
import { UserNode } from '../Services/userNode';
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
         alert('logging in')
        //  setTimeout(()=> {
          history.push('/dashboard');
         //  props.resetForm();
        //  }, 1000);
       }).catch(error => {
          console.log(error)
      })
    };

  return (
    <div>
    <Grid className="formStyle">
      <Paper className="login-container login-paper">
        <div  align="center" className="login-form-container">
          <h1 className="header">
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
            <h2>Sign in</h2>
          </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form className="login-form">
              {/* {console.log(props)} */}
        <Field 
        as={TextField}
        className="EmailFieldStyle"
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
        variant="contained"  
        //disabled={props.isSubmitting}
        fullWidth> 
        Sign in</Button> 
        <Typography className = "textspace">Create a new account? 
            <Link to = '/SignUp'>
            Sign Up
            </Link>
        </Typography> 
            </Form>
          )
}
        </Formik>
        <Typography>
          <Link href="#">Forgot password</Link>
        </Typography>
        </div>
      </Paper>
    </Grid>
    </div>
  );
};

export default Login;