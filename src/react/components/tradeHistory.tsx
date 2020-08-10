import React from "react";
import TradesTable from "./tradesTable";
import Container from "@material-ui/core/Container";

export default function TradeHistory() {
  return (
    <Container>
      <h1>Trade History</h1>
      <TradesTable/>
    </Container>
  );
}