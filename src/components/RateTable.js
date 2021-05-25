import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RateTableData from "../mockData/RateTableData";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: theme.spacing(1),
    width: "80%",
    margin: "1rem 0rem",
  },
  bold: {
    fontWeight: "bold",
  },
}));

// Object.keys(RateTableData).map((item, index) =>
//   console.log(RateTableData[item].week)
// );

export default function RateTable() {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      elevation={5}
      className={classes.tableContainer}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold}>Holiday/Month</TableCell>
            <TableCell className={classes.bold} align="center">
              Week
            </TableCell>
            <TableCell className={classes.bold} align="center">
              Midweek
            </TableCell>
            <TableCell className={classes.bold} align="center">
              Weekend
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(RateTableData).map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item}
              </TableCell>
              <TableCell align="center">
                &euro;&nbsp;{RateTableData[item].week}
              </TableCell>
              <TableCell align="center">
                &euro;&nbsp;{RateTableData[item].midWeek}
              </TableCell>
              <TableCell align="center">
                &euro;&nbsp;{RateTableData[item].weekend}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
