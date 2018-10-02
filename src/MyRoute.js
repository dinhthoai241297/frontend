import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';

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
                    </Switch>
                </App>
            </Router>
        );
    }
}

export default MyRoute;