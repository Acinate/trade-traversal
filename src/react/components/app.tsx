import {hot} from "react-hot-loader/root";
import React from "react";
import "assets/scss/app.scss";
import MenuAppBar from "./menuAppBar";
import TradeHistory from "./tradeHistory";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddTrade from "./addTrade";

const App = () => {
  return (
    <div className="app_container">
      <BrowserRouter>
        <nav>
          <MenuAppBar/>
        </nav>
        <Switch>
          <Route exact path="/trades" component={TradeHistory}/>
          <Route exact path="/trades/add" component={AddTrade}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default hot(App);