
import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btstyle = { margin: "8px 0" };
  const initialValues ={
    emailId:'',
    password:''
} ;
const validationSchema=Yup.object().shape({
  emailId:Yup.string().email('please enter valid email').required("Required"),
  password:Yup.string().required("Required" )

})
const onSubmit=(values,props)=>{
  console.log(values)
  console.log(props)
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>sign In</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form>
              {console.log(props)}
        <Field as={TextField}
          label="email Id"
          name="emailId"
          placeholder="Enter user emailId"
          fullWidth
          required
          helperText={<ErrorMessage name="emailId"/>}
        />
        <Field as={TextField}
          label="Password"
          name="password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          helperText={<ErrorMessage name="password"/>}
        />
        <Field as={FormControlLabel} 
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" style={btstyle} fullWidth> Sign in</Button>
            </Form>
          )
}
        </Formik>
        <Typography>
          <Link href="#">Forgot password</Link>
        </Typography>
        <Typography> Do you have an account ?
            <Link href="#">
                Sign Up
            </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
