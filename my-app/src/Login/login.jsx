import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
const Login = () => {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btstyle = { margin: "8px 0" };
  const initialValues ={
    emailId:'',
    password:''
} ;
const validationSchema=Yup.object().shape({
  emailId:Yup.string().email('please enter valid email').required("Required"),
  password:Yup.string().required("Required")

})
const onSubmit=(values,props)=>{
  console.log(values)
  setTimeout(()=>{
    props.resetForm()
    props.setSubmitting(false)
  },2000)
  };
  return (
    <Grid>
      <Paper elevation={20} className="paperStyle">
        <Grid align="center">
          <Avatar> 
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="header" >FundooNotes App</h2>
          <h2>sign In</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form>
              {console.log(props)}
        <Field as={TextField}
        className="EmailFieldStyle"
          label="email Id"
          name="emailId"
          placeholder="Enter user emailId"
          fullWidth
          required
          helperText={<ErrorMessage name="emailId"/>}
        />
        <Field as={TextField}
        className="PasswordStyle"
          label="Password"
          name="password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          helperText={<ErrorMessage name="password"/>}
        />
        <Button className="buttonMargin" type="submit" variant="contained"  disabled={props.isSubmitting}
        fullWidth> {props.isSubmitting?"Loading":"Sign in"  }</Button> 
        <Typography>Create a new account? 
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
         {/* <Typography> Do you have an account ?
            <Link href="#">
                Sign Up
            </Link>
        </Typography> */}
      </Paper>
    </Grid>
  );
};

export default Login;