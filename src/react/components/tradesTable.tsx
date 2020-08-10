import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import {round} from "mathjs";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650
    },
    button: {
      margin: theme.spacing(1)
    },
    boldText: {
      fontWeight: 500
    },
    lossText: {
      color: "#b9000b",
      fontWeight: 500
    },
    gainText: {
      color: "#00af0a",
      fontWeight: 500
    }
  }));

function createData(tradeNum: number, dateStart: string, symbol: string, status: string, pnl: number) {
  return {tradeNum, dateStart, symbol, status, pnl};
}

const rows = [
  createData(5, "8/7/20", "NOW", "Open", 54.234234),
  createData(4, "8/7/20", "NOW", "Open", -150.00),
  createData(3, "8/7/20", "NOW", "Open", 74.00),
  createData(2, "8/7/20", "NOW", "Open", 15.00),
  createData(1, "8/7/20", "NOW", "Open", -40.00)
];

const formatPnl = (pnl: number): string => {
  return pnl >= 0 ? `$${round(pnl, 2).toFixed(2)}` : `($${round(pnl, 2).toFixed(2)})`;
};

export default function TradesTable() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="flex-end"
        justify="center"
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<AddCircleIcon/>}
            onClick={() => history.push("/trades/add")}
          >
            Add Trade
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">Underlying</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">P/L</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.tradeNum}>
                <TableCell component="th" scope="row" className={classes.boldText}>
                  {row.tradeNum}
                </TableCell>
                <TableCell align="center">{row.dateStart}</TableCell>
                <TableCell align="center" className={classes.boldText}>{row.symbol}</TableCell>
                <TableCell align="center" className={classes.boldText}>{row.status}</TableCell>
                <TableCell align="center"
                           className={row.pnl >= 0 ? classes.gainText : classes.lossText}>{formatPnl(row.pnl)}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <EditIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
