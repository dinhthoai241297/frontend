import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Login from './components/page/Login';
import Register from './components/page/Register';
import * as actions from './actions/UserActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResetPassword from './components/page/ResetPassword';
import ForgotPassword from './components/page/ForgotPassowrd';
import SchoolDetail from './components/school/SchoolDetail';

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
                            <Route path="/resetPassword" component={ResetPassword} />
                            <Route path="/forgotPassword" component={ForgotPassword} />
                            <Route path="/school/detail/" component={SchoolDetail} />
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
        user: state.UserReducer.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(actions.logoutApi()),
        login: (data) => dispatch(actions.loginState(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRoute);


