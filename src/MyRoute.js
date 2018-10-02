import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Sector from './components/sector/Sector';

class MyRoute extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/sector" component={Sector} />
                    </Switch>
                </App>
            </Router>
        );
    }
}

export default MyRoute;