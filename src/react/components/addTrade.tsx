import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {Container, FormControl, Input, InputAdornment, MenuItem, Select, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import {useHistory} from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {round} from "mathjs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650
    },
    controls: {
      margin: "1rem 0"
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
    },
    date: {
      width: "150px"
    },
    size: {
      width: "85px"
    },
    action: {
      width: "100px"
    },
    costCredit: {
      maxWidth: "75px"
    },
    netCost: {
      fontSize: "1rem"
    }
  }));

interface State {
  date: string;
  action: number;
  size: number;
  spread: string;
  cost: number;
}

export default function AddTrade() {
  const classes = useStyles();
  const history = useHistory();
  const [trade, setTrade] = React.useState<State>({
    date: "2020-08-11",
    action: 0,
    size: 0,
    spread: "",
    cost: 0
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrade({...trade, [prop]: event.target.value});
  };

  const addTrade = () => {
    console.log(trade);
  };

  const formatNetCost = (cost: number): string => {
    return cost >= 0 ? `$${round(cost, 2).toFixed(2)}` : `-$${round(cost, 2).toFixed(2)}`;
  };

  return (
    <Container>
      <h1>Add Trade</h1>
      <TextField id="standard-basic" label="Underlying symbol"/>
      <h2>Position trades</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Option/Spread</TableCell>
              <TableCell align="center">Cost/Credit</TableCell>
              <TableCell align="center">Net Cost</TableCell>
              <TableCell align="center"/>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={1}>
              <TableCell component="th" scope="row" className={classes.boldText}>
                {1}
              </TableCell>
              <TableCell align="center">
                <FormControl>
                  <Input
                    id="input_date"
                    className={classes.date}
                    type="date"
                    value={trade.date}
                    onChange={handleChange("date")}

                  />
                </FormControl>
              </TableCell>
              <TableCell align="center" className={classes.boldText}>
                <FormControl>
                  <Select
                    id="input_action"
                    className={classes.action}
                    value={trade.action}
                    onChange={handleChange("action")}
                  >
                    <MenuItem value={0}>BOT</MenuItem>
                    <MenuItem value={1}>SLD</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell className={classes.size}>
                <FormControl>
                  <Input
                    id="input_size"
                    type="number"
                    value={trade.size}
                    onChange={handleChange("size")}
                  />
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <Input
                    id="input_spread"
                    type="text"
                    value={trade.spread}
                    onChange={handleChange("spread")}
                    placeholder="Oct 16 165/170 call vertical"
                  />
                </FormControl>
              </TableCell>
              <TableCell className={classes.costCredit}>
                <FormControl>
                  <Input
                    id="input_cost"
                    type="number"
                    value={trade.cost}
                    onChange={handleChange("cost")}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    placeholder="0.75"
                  />
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <span className={classes.netCost}>{formatNetCost(trade.size * trade.cost * 100)}</span>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<AddCircleIcon/>}
                  onClick={() => addTrade()}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        container
        className={classes.controls}
        spacing={1}
        direction="row"
        alignItems="center"
        justify="flex-end"
      >
        <Grid item>
          <Button
            variant="contained"
            endIcon={<CloseIcon/>}
            onClick={() => history.push("/trades")}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SaveIcon/>}
            onClick={() => history.push("/trades/add")}
          >
            Save Trade
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
