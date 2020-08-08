import { hot } from 'react-hot-loader/root';
import React from 'react';
import 'assets/scss/app.scss';
import MenuAppBar from './menuAppBar';
import TradeHistory from './tradeHistory';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const classes = {
    menuButton: 'menuButton',
    title: 'test'
};

const App = () => {
    return (
        <div className="app_container">
            <BrowserRouter>
                <nav>
                <MenuAppBar/>
                </nav>
                <Switch>
                    <Route path="/history" component={TradeHistory}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default hot(App);