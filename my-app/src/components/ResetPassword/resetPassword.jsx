import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Services from "../../Services/NotesServices";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./resetPassword.scss";
//const service = new Services();

function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}

export default class forgotPassword extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordError: "",
      passwordFlag: false,
      confirmPassword: "",
      confirmPasswordError: "",
      confirmPasswordFlag: false,
      setOpen: false,
      open: false,
      snackMessage: "",
      snackType: "",
    };
  }
  
  token = this.props.match.params.token;

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      passwordError: "",
      passwordFlag: false,
      confirmPasswordError: "",
      confirmPasswordFlag: false,
    };

    if (this.state.password.length === 0) {
      errors.passwordFlag = true;
      errors.confirmPasswordFlag = true;
      isError = true;
      errors.passwordError = "Enter Password";
    }

    if (this.state.confirmPassword !== this.state.password) {
      errors.confirmPasswordFlag = true;
      isError = true;
      errors.confirmPasswordError = "Passwords didn't match.";
    }

    this.setState({
      ...errors,
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    var tokeninput = this.token.split("/");
    const tokenString = tokeninput.toString();
      var requiredToken = tokenString.substring(6);
      var  token = requiredToken;
      
     // Password@12
    if (!err) {
      this.setState({
        confirmPasswordFlag: false,
        confirmPasswordError: "",
        passwordFlag: false,
        passwordError: "",
        password: "",
        confirmPassword: "",
        
        
      });
      let resetPasswordData = {
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,

      };
      Services
        .resetPassword(resetPasswordData, token)
        .then((result) => {
          let obj = JSON.stringify(result);
          console.log("Password reset successful", obj);
          // this.setState({
          //   snackType: "success",
          //   snackMessage: "Password reset successful",
          //   open: true,
          //   setOpen: true,
          // });
          this.nextPath("../login");
        })
        .catch((error) => {
          console.log("Password reset Failed" + error);
          this.setState({
            snackType: "error",
            snackMessage: "Password reset Failed",
            open: true,
            setOpen: true,
          });
        });
    } else {
      console.log("Reset Failed");
    }
  };

  render() {
    return (
      <div className="main">
        <div elevation={0} className="page">
          <span className="inlineTitle">
            <b>
              <font color="#1976d2">F</font>
              <font color="#e53935">u</font>
              <font color="#ffb74d">n</font>
              <font color="#1976d2">d</font>
              <font color="#388e3c">o</font>
              <font color="#e53935">o</font>
            </b>
          </span>
          <span className="signIn">Reset Password</span>
          Use your Fundoo Account
          <form className="Form">
            <div className="inputField">
              <TextField
                size="small"
                className="input"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                value={this.state.password}
                onChange={(e) => this.change(e)}
                error={this.state.passwordFlag}
                helperText={this.state.passwordError}
              />
            </div>
            <div className="inputField">
              <TextField
                size="small"
                className="input"
                label="Conform"
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                helperText={this.state.confirmPasswordError}
                error={this.state.confirmPasswordFlag}
                onChange={(e) => this.change(e)}
              />
            </div>
            <span className="buttonFooter">
              <div className="button">
                <Button
                  variant="contained"
                  onClick={(e) => this.onSubmit(e)}
                  color="primary"
                >
                  Set Password
                </Button>
              </div>
            </span>
          </form>
        </div>
        <div>
          <Snackbar open={this.state.open} autoHideDuration={3000}>
            <Alert severity={this.state.snackType}>
              {this.state.snackMessage}
            </Alert>
          </Snackbar>
        </div>
      </div>
    );
  }
}
