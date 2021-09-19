import React from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './SignUp.scss'
import { UserNode } from '../Services/userNode';
import { useHistory } from 'react-router-dom';

const userNode = new UserNode ()
const SignUp = () => {
    const history = useHistory();
    const initialValues = {
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        confirmPassword: '',
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "first Name is too short minimum 3 Char is required").required("Fisrts name required"),
        lastName: Yup.string().min(3, "last Name is too short minimum 3 Char is required").required("Last Name required"),
        emailId: Yup.string().email('please enter valid email').required("emailId is required"),
        // gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        // phoneNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Please enter valid phone number')
        //     .max(10, 'Please enter 10 digits phone number without Space').required("Required"),
        password: Yup.string().min(8, "Use 8 or more characters with a mix of letters, numbers & symbols").required("Enter a password"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password doesn't matched").required("Confirm password should match password")
    });

    const onSubmit = (values, props) => {
        console.log(values)
        if(values && !values.firstName && !values.lastName) return 
       const userDetails = { 
           firstName : values.firstName,
           lastName : values.lastName,
           email : values.emailId,
           password : values.password,
          // confirmPassword : values.confirmPassword
       }
       userNode.registration(userDetails)
       .then(res => {
           alert('Data is submitted')
           history.push('/login')
       }).catch(error => {
           console.log(error)
       })
    }

    return (
        <>
        <Grid className="formStyle">
            <Paper className="register-container paperStyle">
                <div className="register-form">
                    <h3 className="header">
                        <h3 className="header">
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
                        </h3>
                        <span className="headerStyle"> <h5 >Please fill form to create an account !</h5></span>
                    </h3>
                    
                    <Formik initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form className="register-form-inputs">
                                <Grid container spacing={5} className="register-form-element">
                                    <Grid item xs={16} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="First Name"
                                            name="firstName"
                                            placeholder="Enter First Name"
                                            variant="outlined"
                                            fullWidth
                                            helperText={<ErrorMessage name="firstName"/>}/>
                                    </Grid>
                                    <Grid item xs={16} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Last Name"
                                            name="lastName"
                                            placeholder="Enter Last Name"
                                            variant="outlined"
                                            fullWidth
                                            helperText={<ErrorMessage name="lastName"/>}/>
                                        </Grid>
                                    </Grid>
                                <Grid container spacing={1} className="register-form-element">
                                    <Field
                                        className="register-form-inputs"
                                        as={TextField}
                                        label="Email Address"
                                        name="emailId"
                                        placeholder="Enter Email"
                                        variant="outlined"
                                        fullWidth
                                        helperText={<ErrorMessage name="emailId"/>}/>
                                </Grid>
                                <Grid container spacing={1} className="register-form-element">
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Password"
                                            name="password"
                                            placeholder="Enter password"
                                            variant="outlined"
                                            type="password"
                                            fullWidth
                                            helperText={<ErrorMessage name="password"/>}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            placeholder="Enter password"
                                            variant="outlined"
                                            type="password"
                                            fullWidth
                                            helperText={<ErrorMessage name="confirmPassword"/>}/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className="register-form-element submit-button">
                                    <Button
                                       onClick={onSubmit}
                                        type="submit"
                                        variant="contained"
                                       // disabled={props.isSubmitting}
                                        className="register-form-button"
                                        fullWidth
                                    >
                                        Register
                                    </Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                    <Typography className="signInlink">
                        <Link to="/login">Sign in instead</Link>
                    </Typography>
                </div>
                <div className="register-avatar">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt=""></img>
                </div>
            </Paper>
        </Grid >
        </>
    );
};



export default SignUp;