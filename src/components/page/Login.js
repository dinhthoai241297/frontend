import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/UserActions';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Nav from './../common/Nav';
import { init_all } from '../../assets/vendor/js/all';

class Login extends Component {

    componentDidMount() {
        init_all();
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            mes: '',
            processing: false
        }
    }

    login = (e) => {
        this.setState({ processing: true });
        e.preventDefault();
        let { username, password } = this.state;
        let mes = '';
        this.props.login(username, password).then(res => {
            if (res.body.code === 803) {
                mes = 'Sai tài khoản hoặc mật khẩu'
            } else {
                mes = res.body.code;
            }

            this.setState({ mes, processing: false });
        }).catch(error => {
            this.setState({ mes: 'Error!', processing: false });
        });
    }

    clearMes = () => {
        this.setState({ mes: '' });
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
            <Fragment>
                <Nav />

                <section className="bg-dark-alfa-30 parallax-2" id="home" style={{ backgroundImage: 'linear-gradient(to bottom right, #00a6c1, #a9c3ea)' }}>
                    <div className="js-height-full container" style={{ height: 626 }}>
                        {/* Hero Content */}
                        <div className="home-content">
                            <div className="home-text">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-20">
                                        <h1 className="cus-h1 mb-0">Đăng nhập</h1>
                                    </div>
                                    <div style={{ color: 'red' }} className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-10 text-center">
                                        {this.state.mes}
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-20">
                                        <input
                                            type="text"
                                            className="cus-input cus-light"
                                            placeholder="Tên đăng nhập"
                                            onChange={this.handleChangeInput}
                                            value={this.props.username}
                                            name="username"
                                            onClick={this.clearMes}
                                            disabled={this.state.processing}
                                        />
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-10">
                                        <input
                                            type="password"
                                            className="cus-input cus-light"
                                            placeholder="Mật khẩu"
                                            onChange={this.handleChangeInput}
                                            value={this.props.password}
                                            name="password"
                                            onClick={this.clearMes}
                                            disabled={this.state.processing}
                                        />
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-10">
                                        <Link to="/resetPassword">Quên mật khẩu?</Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                        <a
                                            href="#"
                                            className="btn btn-mod btn-border-w btn-round btn-large"
                                            onClick={this.login}
                                            disabled={this.state.processing}
                                        >Đăng nhập {this.state.processing && (<i className="fa fa-spinner fa-spin"></i>)}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Hero Content */}
                    </div>
                </section>
            </Fragment>
        );
    }
}

Login.propTypes = {
    user: PropTypes.object,
    login: PropTypes.func
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (username, password) => dispatch(actions.loginApi(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);