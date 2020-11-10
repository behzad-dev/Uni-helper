import React, { Component } from "react";
import { createpost_graphql } from "../actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Createdata extends Component {
  state = {
    Uni_name: "",
    Field_name: "",
    Admission: "",
    LanguageScore: "",
    Overall_score: "",
    token: "",
  };
  componentDidMount() {}
  onSubmit_Create = async (field) => {
    const {
      Uni_name,
      Field_name,
      Admission,
      LanguageScore,
      Overall_score,
    } = this.state;
    // const result = await this.props.login_graphql(username,password);
    // console.log(result.data.data.loginUser.token);
    // localStorage.setItem('token',result.data.data.loginUser.token)
    if (
      (Uni_name !== "",
      Field_name !== "",
      Admission !== "",
      LanguageScore !== "",
      Overall_score !== "")
    ) {
      const result = await this.props.createpost_graphql(
        Uni_name,
        Field_name,
        Admission,
        LanguageScore,
        Overall_score
      );

      if (result.data.data.sendnewpost.Field_name) {
        toast.success(result.data.data.sendnewpost.Field_name + " is Saved!");
      }
    } else {
      toast.error("something is missing");
    }
  };
  render() {
    const token = localStorage.getItem("token");
    return (
      <div>
        {" "}
        <Card>
          <CardContent>
            {(token && (
              <form noValidate autoComplete="off">
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    label="Uni name"
                    onChange={(b) =>
                      this.setState({ Uni_name: b.target.value })
                    }
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    label="Field name "
                    onChange={(b) =>
                      this.setState({ Field_name: b.target.value })
                    }
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    label="Admission "
                    onChange={(b) =>
                      this.setState({ Admission: b.target.value })
                    }
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    label="LanguageScore "
                    onChange={(b) =>
                      this.setState({ LanguageScore: b.target.value })
                    }
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    id="standard-basic"
                    label="Overall_score "
                    onChange={(b) =>
                      this.setState({ Overall_score: b.target.value })
                    }
                  />
                </div>
                <div>
                  {" "}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.onSubmit_Create()}
                  >
                    Create
                  </Button>
                </div>
              </form>
            )) || <div>Login Please</div>}
            {/* </Typography> */}
          </CardContent>
          <CardActions></CardActions>
        </Card>{" "}
        <ToastContainer />
      </div>
    );
  }
  // onSubmit_login = async (field) => {
  //   const {username,password } = this.state;
  //   const result = await this.props.login_graphql(username,password);
  //   // console.log(result.data.data.loginUser.token);
  //   localStorage.setItem('token',result.data.data.loginUser.token)

  // };
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
  createpost_graphql,
})(Createdata);
