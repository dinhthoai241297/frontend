import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Detail from './components/detail/Detail';
import Sector from './components/sector/Sector';

class MyRoute extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <switch>
                    
                    
                                <Route exact path="/" component={Home} />
                                <Route path="/sector" component={Sector} />
                                <Route path="/search" component={Search} />
                                <Route path="/detail" component={Detail} />
                    
                </switch>
            </Router>
        );
    }
}

export default MyRoute;


