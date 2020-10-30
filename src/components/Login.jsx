import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { login_graphql } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../apis/History";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  componentDidMount() {}
  onSubmit_login = async (field) => {
    try {
      const { username, password } = this.state;
      const result = await this.props.login_graphql(username, password);
      // console.log(result.data.data.loginUser.token);
      if (
        result.data.data.loginUser !== null &&
        result.data.data.loginUser.token !== null
      ) {
        localStorage.setItem("token", result.data.data.loginUser.token);
        history.push("/createdata");
      } else {
        toast.error("Wrong Password !");
        localStorage.removeItem("token");
      }
      console.log(result);
    } catch {
      toast.error("ERROR");
    }
  };
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            {/* <Typography color="textSecondary" gutterBottom> */}
            <form noValidate autoComplete="off">
              <div>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Username"
                  onChange={(b) => this.setState({ username: b.target.value })}
                />
              </div>
              <div>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Password "
                  onChange={(b) => this.setState({ password: b.target.value })}
                />
              </div>
              <div>
                {" "}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.onSubmit_login()}
                >
                  Login
                </Button>
              </div>
            </form>
            {/* </Typography> */}
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   if(state.my_all_data.data && state.my_all_data.data.loginUser){
  //     console.log(state.my_all_data.data.loginUser.token);
  //   localStorage.setItem('token',state.my_all_data.loginUser)
  // }
  return {
    myitems: Object.values(state),
  };
};
export default connect(mapStateToProps, {
  login_graphql,
})(Login);
