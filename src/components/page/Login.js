import React, { Component } from 'react';
import Header from './../common/Header';
import './../../assets/styles/stylelogin.css';
import { connect } from 'react-redux';
import * as actions from './../../actions/UserActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            mes: ''
        }
    }

    login = (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.login(username, password).then(res => {
            if (res.body.code === 803) {
                mes = 'Sai tài khoản hoặc mật khẩu'
            }
        });
    }

    handleChangeInput = (e) => {
        let { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {

        if (this.props.user) {
            return <Redirect to='/' />;
        }

        return (
            <div className="bg-main h-100vh">

                <Header />

                <div className="container">
                    <div id="login-form">
                        <div className="row">
                            <div className="col-12 col-lg-6 offset-lg-3 text-center">
                                <h3>
                                    Đăng nhập
                                </h3>
                            </div>
                            <div className="col-12 col-lg-6 offset-lg-3 mb-3">
                                <label>Tên đăng nhập</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChangeInput}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-12 col-lg-6 offset-lg-3 mb-3">
                                <label>Mật khẩu</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChangeInput}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-12 col-lg-6 offset-lg-3 text-right">
                                <button onClick={this.login} className="btn btn-default">Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    Copyright © 2018 Nong Lam University. All rights reserved | Design by HCMUAF
			    </div>
            </div>
        );
    }
}

Login.propTypes = {
    user: PropTypes.object,
    login: PropTypes.func
}

const mapStateToProps = state => {
    return {
        user: state.LoginReducer.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (username, password) => dispatch(actions.loginApi(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);