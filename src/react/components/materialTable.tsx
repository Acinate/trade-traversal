import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(tradeNum: number, dateStart: string, symbol: string, openPL: string, closedPL: string) {
    return { tradeNum, dateStart, symbol, openPL, closedPL };
}

const rows = [
    createData(5, "8/7/20", "NOW", "Open", "$0.00"),
    createData(4, "8/7/20", "NOW", "Open", "$0.00"),
    createData(3, "8/7/20", "NOW", "Open", "$0.00"),
    createData(2, "8/7/20", "NOW", "Open", "$0.00"),
    createData(1, "8/7/20", "NOW", "Open", "$0.00"),
];

export default function MaterialTable() {
    const classes = useStyles();

    return (
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
                            <TableCell component="th" scope="row">
                                {row.tradeNum}
                            </TableCell>
                            <TableCell align="center">{row.dateStart}</TableCell>
                            <TableCell align="center">{row.symbol}</TableCell>
                            <TableCell align="center">{row.openPL}</TableCell>
                            <TableCell align="center">{row.closedPL}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete">
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
