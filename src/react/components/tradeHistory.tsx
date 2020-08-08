import React from 'react';
import MaterialTable from './materialTable';
import Container from '@material-ui/core/Container';
import TableControls from './tableControls';

export default function TradeHistory() {
    return(
        <Container>
        <h1>Trade History</h1>
        <TableControls/>
        <MaterialTable/>
        </Container>
    );
}