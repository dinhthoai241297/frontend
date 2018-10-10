import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
            <BrowserRouter>
                <div>
                    
                            <Route exact path="/" component={Home} />
                            <Route path="/sector" component={Sector} />
                            <Route path="/search" component={Search} />
                            <Route path="/detail" component={Detail} />
                    
                </div>
            </BrowserRouter>
        );
    }
}

export default MyRoute;


