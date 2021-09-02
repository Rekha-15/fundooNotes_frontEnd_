
import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutLineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage} from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup'
import './SignUp.scss'
const SignUp = () => {
    //const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
   // const headerStyle = { margin: 0 }
   // const avatarStyle = { backgroundColor: '#1bbd7e' }
   // const btstyle = { margin: "12px 0" };
    const marginTop = { marginTop: 10 }
    const initialValues={
        firstName:'',
        lastName:'',
        emalId:'',
        gender:'',
        phoneNumber:'',
        password:'',
        confirmPassword:'',
        termsAndCondition:false
    }
    const validationSchema=Yup.object().shape({
        firstName:Yup.string().min(3, "first Name is too short minimum 3 Char is required").required("Required"),
        lastName:Yup.string().min(3, "last Name is too short minimum 3 Char is required").required("Required"),
        emalId:Yup.string().email('please enter valid email').required("Required"),
        gender:Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber:Yup.number().typeError('Enter valid phone Number').required("Required"),
        password:Yup.string().min(8,"Password minimum length should be 8").required("Required" ),
        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password doesn't matched").required("Required" ),
        termsAndCondition:Yup.string().oneOf(["true"], "Accept terms & condition")   
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
                <Grid align='center'>
                    <Avatar className="avatarStyle">
                        <AddCircleOutLineOutlinedIcon />
                    </Avatar>
                    <h2 className="header" >FundooNotes App</h2>
                    <h2 className="header">Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props)=>(
                        <Form>
                        <Field as={TextField} fullWidth name="firstName" label='firstName' 
                        placeholder="Enter your First Name" helperText={<ErrorMessage name="firstName"/>} />
                        <Field as={TextField} fullWidth name="lastName" label='lastName' 
                        placeholder="Enter your Last Name" helperText={<ErrorMessage name="lastName"/>} />
                        <Field as={TextField} fullWidth name="emalId"  label='Email' 
                        placeholder="Please enter valid Email Id" helperText={<ErrorMessage name="emalId"/>} />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <Field as ={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </Field>
                        </FormControl>
                        <FormHelperText><ErrorMessage name="gender"/></FormHelperText> 
                        <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number' 
                        placeholder="Enter your valid Phone Number" helperText={<ErrorMessage name="phoneNumber"/>} />
                        <Field as={TextField} fullWidth name="password" type="password" label='Password' 
                        placeholder="Provide your password" helperText={<ErrorMessage name="password"/>}/>
                        <Field as={TextField} fullWidth name="confirmPassword" type="password" label='Confirm Password' 
                        placeholder="Confirm your password" helperText={<ErrorMessage name="confirmPassword"/>}/>
                        <FormControlLabel
                            control={<Field as={Checkbox} name="termsAndCondition" />}
                            label="I accept the terms and condition."
                        />
                        <FormHelperText><ErrorMessage name="termsAndCondition"/></FormHelperText> 
                        {/* <Button type='submit' variant='contained' color='primary' style={btstyle} fullWidth>Sign Up</Button> */}
                        <Button type="submit" variant="contained"  disabled={props.isSubmitting}
                         className="btstyle" fullWidth> {props.isSubmitting?"Loading":"Sign in"}</Button>
                         <Typography>Already have an account?
                            <Link to = '/login'>
                            Login
                            </Link>
                        </Typography>
                    </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default SignUp;