import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Products from './Containers/Products';
class App extends Component {
    render() {
        return (
            <div className="App">
                <img alt="logo" width="200" height="100" src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=3'></img>
                <div className="container">
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Products {...this.props} />
                            </Route>


                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
