import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Login from './components/page/Login';
import Register from './components/user/Register';
import * as actions from './actions/UserActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResetPassword from './components/user/ResetPassword';
import ForgotPassword from './components/user/ForgotPassowrd';
import SchoolDetail from './components/school/SchoolDetail';
import Profile from './components/user/Profile';
import Update from './components/user/Update';
import Suggest from './components/page/Suggest';
import New from './components/new/New';
import NewDetail from './components/new/NewDetail';

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
                            <Route path="/register" component={Register} />
                            <Route path="/user/update" component={Update} />
                            <Route path="/resetPassword" component={ResetPassword} />
                            <Route path="/forgotPassword" component={ForgotPassword} />
                            <Route path="/school/detail/" component={SchoolDetail} />
                            <Route path="/user/profile/" component={Profile} />
                            <Route path="/suggest" component={Suggest} />
                            <Route exact path="/new" component={New} />
                            <Route path="/new/detail/" component={NewDetail} />
                        </Switch>
                    </App>
                )} />
            </BrowserRouter>
        );
    }
}

MyRoute.propTypes = {
    logout: PropTypes.func,
    login: PropTypes.func
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(actions.logoutApi()),
        login: data => dispatch(actions.loginState(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoute);
