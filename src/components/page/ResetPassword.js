import React, { Component, Fragment } from 'react';
import Nav from './../common/Nav';
import { init_all } from '../../assets/vendor/js/all';
import Footer from '../common/Footer';
import UserApi from '../../api/UserApi';
import { Redirect } from 'react-router-dom';

class Register extends Component {

    componentDidMount() {
        init_all();
    }

    constructor(props) {
        super(props);
        this.state = {
            tab: true,
            email: '',
            password: '',
            passwordcfm: '',
            code: '',
            mes: ''
        }
    }

    handleChangeInput = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    changeTab = (e, tab) => {
        e.preventDefault();
        this.setState({ tab });
    }

    forgotPassword = e => {
        e.preventDefault();
        console.log(this.state);
        let { email } = this.state;
        if ('' === email) {
            this.setState({mes: 'Email không được để trống!'});
            return;
        }
        UserApi.forgotPassword({ email }).then(res => {
            if (res.body.code === 200) {
                // success
                this.setState({
                    email: '',
                    tab: false,
                    mes: 'Vui lòng kiểm tra email của bạn để lấy mã.'
                });
            }
        });
    }

    changePassword = e => {
        e.preventDefault();
        UserApi.changePassword({ code, password }).then(res => {
            if (res.body.code === 200) {
                // success
                return <Redirect to="/login" />
            } else {
                // mess error
            }
        }).catch(error => {
            throw (error);
        });
    }

    render() {
        return (
            <Fragment>
                <header style={{ backgroundImage: 'linear-gradient(to bottom right, #00a6c1, #a9c3ea)' }}>
                    <div className="cover" />
                    {/* Navigation panel */}

                    <Nav />

                    {/* End Navigation panel */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                                <div className="row mb-20">
                                    <div className="col-xs-12 text-center">
                                        <h1 className="cus-h1 mb-0">Đặt lại mật khẩu</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="container">
                    <div className="small-section">
                        <div className="row">
                            {/* Col */}
                            <div className="col-sm-8 col-sm-offset-2">
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs tpl-tabs animate mb-20">
                                    <li className={this.state.tab ? 'active' : ''}>
                                        <a
                                            href="#one"
                                            onClick={e => this.changeTab(e, true)}
                                        >Xác nhận mail</a>
                                    </li>
                                    <li className={this.state.tab ? '' : 'active'}>
                                        <a
                                            href="#two"
                                            onClick={e => this.changeTab(e, false)}
                                        >Mật khẩu mới</a>
                                    </li>
                                </ul>

                                <div className="row">
                                    <div className="col-xs-12 text-center" style={{color: '#ff4600'}}>
                                        {this.state.mes}
                                    </div>
                                </div>

                                {/* Tab panes */}
                                <div className="tab-content tpl-tabs-cont section-text">
                                    <div className={'tab-pane fade' + (this.state.tab && ' active in')}>
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-xs-12 mb-20">
                                                    <input
                                                        type="email" name="email"
                                                        className="form-control input-lg" placeholder="Email"
                                                        maxLength="100"
                                                        onChange={this.handleChangeInput}
                                                        onFocus={() => this.setState({mes: ''})}
                                                    />
                                                </div>
                                                <div className="col-xs-12 text-center">
                                                    <button
                                                        className="btn btn-mod btn-border btn-large btn-round"
                                                        onClick={this.forgotPassword}
                                                    >
                                                        Gửi
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className={'tab-pane fade' + (!this.state.tab && ' active in')}>
                                        <form className="form">
                                            <div className="col-xs-12 mb-20">
                                                <input
                                                    type="number" name="code"
                                                    className="form-control input-lg" placeholder="Mã"
                                                    maxLength="100"
                                                    onChange={this.handleChangeInput}
                                                />
                                            </div>
                                            <div className="col-xs-12 mb-20">
                                                <input
                                                    type="password" name="password"
                                                    className="form-control input-lg" placeholder="Mật khẩu mới"
                                                    maxLength="100"
                                                    onChange={this.handleChangeInput}
                                                />
                                            </div>
                                            <div className="col-xs-12 mb-20">
                                                <input
                                                    type="password" name="passwordcfm"
                                                    className="form-control input-lg" placeholder="Xác nhận mật khẩu mới"
                                                    maxLength="100"
                                                    onChange={this.handleChangeInput}
                                                />
                                            </div>
                                            <div className="col-xs-12 text-center">
                                                <button
                                                    className="btn btn-mod btn-border btn-large btn-round"
                                                    onClick={this.changePassword}
                                                >
                                                    Gửi
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End Col */}
                        </div>
                    </div>
                </section>

                <Footer />
            </Fragment>
        );
    }
}

export default Register;