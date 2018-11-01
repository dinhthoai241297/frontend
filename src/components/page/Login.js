import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/UserActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Nav from './../common/Nav';
import background from './../../assets/img/background.png';
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

            this.setState({ mes });
        }).catch(error => {
            this.setState({ mes: 'Error!' });
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

                <section className="bg-dark-alfa-30 parallax-2" id="home" style={{ backgroundImage: `url(${background})`, backgroundPosition: '50% 0px' }}>
                    <div className="js-height-full container" style={{ height: 626 }}>
                        {/* Hero Content */}
                        <div className="home-content">
                            <div className="home-text">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-20">
                                        <h1 className="cus-h1 mb-0">Đăng nhập</h1>
                                    </div>
                                    <div style={{color: 'red'}} className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-10 text-center">
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
                                        />
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 mb-10">
                                        <a href="#">Quên mật khẩu?</a>
                                    </div>
                                    <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                        <a
                                            href="#"
                                            className="btn btn-mod btn-border-w btn-round btn-large"
                                            onClick={this.login}
                                        >Đăng nhập</a>
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