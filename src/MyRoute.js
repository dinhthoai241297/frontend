import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Detail from './components/detail/Detail';
import Login from './components/page/Login';
import * as actions from './../../actions/UserActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MyRoute extends Component {

    constructor(props) {
        super(props);
        let data = JSON.parse(localStorage.getItem('data'));
        if (data) {
            this.props.login(data);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Route render={props => (
                    <App>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/search" component={Search} />
                            <Route path="/detail" component={Detail} />
                        </Switch>
                    </App>
                )} />
            </BrowserRouter>
        );
    }
}

MyRoute.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
}

const mapStateToProps = state => {
    return {
        user: state.LoginReducer.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoute);


