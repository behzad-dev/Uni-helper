import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import history from "../apis/History";
import { withRouter } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import { retrieve_graphql } from "../actions";
import { Container } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Content extends Component {
  state = {
    sortColumn: { path: "Uni_name", order: "asc" },
  };
  componentDidMount() {
    this.props.retrieve_graphql();
  }
  mysort = (path) => {
    console.log("sort");
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      console.log("1");
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
      console.log("2");
    }
    this.setState({ sortColumn });
    console.log(this.state.sortColumn.order);
    console.log(this.state.sortColumn.path);
  };
  render() {
    const myOBJ = this.props.myitems;
    const myOBJ2 = myOBJ[0] && myOBJ[0]["getall"]; //TODO

    // console.log(myOBJ[0]);
    // const filtereditems = myOBJ.filter(m => m.type === this.state.type);
    const sorted = _.orderBy(myOBJ2, this.state.sortColumn.path, [
      this.state.sortColumn.order,
    ]);
    // const useStyles = theme=>({
    //   table: {
    //     minWidth: 6666,

    //   },
    //   root: {
    //     // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     borderRadius: 3,
    //     border: 0,
    //     color: 'green',
    //     height: 48,
    //     padding: '0 30px',
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //     background:'red'
    //   },
    // });

    const StyledTableCell = withStyles((theme) => ({
      head: {
        // backgroundColor: "#383637",
        color: theme.palette.common.white,
        // fontSize: '1rem',
        // htmlFontSize: 10,
        fontSize: 16,
        // fontStyle: 'bold',

        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // borderRadius: 5
        // ,
        border: 0,
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    const StyledTableCellBody2 = withStyles((theme) => ({
      head: {},
      body: {
        maxWidth: 555,
      },
    }))(TableCell);
    const StyledTableCellBody = withStyles((theme) => ({
      head: {},
      body: {
        maxWidth: 25,
      },
    }))(TableCell);
    const StyledTableRow = withStyles((theme) => ({
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
          background: "linear-gradient(77deg, #6b6e75 30%, #2f343d 80%)",
          // borderRadius: 3,
          // border: 0,
          // color: 'white',
          // height: 48,
          // padding: '0 30px',
          // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
      },
    }))(TableRow);
    // const classes = useStyles();

    return (
      <div>
        {/* {console.log(this.props.myitems[0] && this.props.myitems[0].getall[0])}
        {this.props.myitems[0] &&
          this.props.myitems[0].getall.map((m) => <div>{m.title}</div>)} */}
        <Container>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell onClick={() => this.mysort("Uni_name")}>
                    University
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => this.mysort("Field_name")}
                    align="center"
                  >
                    Major
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => this.mysort("LanguageScore")}
                    align="center"
                  >
                    Language
                  </StyledTableCell>
                  <StyledTableCell
                    // onClick={() => this.mysort("LanguageScore")}
                    align="center"
                  >
                    Final score
                  </StyledTableCell>
                  <StyledTableCell align="center">Tuition Fees</StyledTableCell>
                  <StyledTableCell
                    // onClick={() => this.mysort("Overall_score")}
                    align="center"
                  >
                    Admission
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {/* {this.props.myitems &&this.props.myitems[0] &&
                  this.props.myitems[0].getall.map((row) => ( */}
                {sorted &&
                  sorted[0] &&
                  sorted.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">
                        <Link target="_blank" href={row.LinkDaad}>
                          {row.Uni_name}
                        </Link>
                      </TableCell>
                      <TableCell align="center">{row.Field_name}</TableCell>
                      <StyledTableCellBody align="center">
                        {row.LanguageIELTS}
                      </StyledTableCellBody>
                      <StyledTableCellBody align="center">
                        {row.OverallScore}
                      </StyledTableCellBody>
                      <StyledTableCellBody align="center">
                        {row.TuitionFees}
                      </StyledTableCellBody>
                      <StyledTableCellBody2 align="right">
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Link target="_blank" href={row.LinkUni}>
                              {row.Admission}{" "}
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>These are details</AccordionDetails>
                        </Accordion>
                      </StyledTableCellBody2>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state");

  console.log(state);

  return {
    myitems: _.compact(Object.values(state.my_all_data)),
    // myboughtbeh: _.compact(Object.values(state.my_all_data2))
  };
};
export default connect(mapStateToProps, {
  retrieve_graphql,
})(Content);
