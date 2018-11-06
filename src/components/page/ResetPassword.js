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
            mes: '',
            mesEmail: '',
            mesCode: '',
            mesPass: '',
            mesPassCfm: ''
        }

        const MES_EMPTY = 'Trường này không được để trống!';
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
            this.setState({ mesEmail: 'Email không được để trống!' });
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
        const MES_EMPTY = 'Trường này không được để trống!';
        let { code, password, passwordcfm } = this.state;
        let mesCode = '', mesPass = '', mesPassCfm = '';
        mesCode = code === '' ? MES_EMPTY : '';
        mesPass = password === '' ? MES_EMPTY : '';
        mesPassCfm = passwordcfm === '' ? MES_EMPTY : '';
        if (password !== '' && passwordcfm !== '' && password !== passwordcfm) {
            mesPass = mesPassCfm = 'Mật khẩu và xác nhận mật khẩu không khớp!';
        }
        if (mesCode !== '' || mesPass !== '' || mesPassCfm !== '') {
            this.setState({
                mesCode, mesPass, mesPassCfm
            });
            return;
        }
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

        console.log(this.state.mesEmail);
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
                                    <div className="col-xs-12 text-center" style={{ color: '#ff4600' }}>
                                        {this.state.mes}
                                    </div>
                                </div>

                                {/* Tab panes */}
                                <div className="tab-content tpl-tabs-cont section-text">
                                    <div className={'tab-pane fade' + (this.state.tab ? ' active in' : '')}>
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-xs-12 mb-20">
                                                    <div className="cus-mes">
                                                        {this.state.mesEmail}
                                                    </div>
                                                    <input
                                                        type="email" name="email"
                                                        className={'form-control input-lg' + (this.state.mesEmail !== '' ? ' cus-error-field' : '')}
                                                        placeholder="Email"
                                                        maxLength="100"
                                                        onChange={this.handleChangeInput}
                                                        onFocus={() => this.setState({ mes: '', mesEmail: '' })}
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
                                    <div className={'tab-pane fade' + (!this.state.tab ? ' active in' : '')}>
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-xs-12 mb-20">
                                                    <div className="cus-mes">
                                                        {this.state.mesCode}
                                                    </div>
                                                    <input
                                                        type="number" name="code"
                                                        className={'form-control input-lg' + (this.state.mesCode !== '' ? ' cus-error-field' : '')}
                                                        placeholder="Mã"
                                                        maxLength="100"
                                                        onChange={this.handleChangeInput}
                                                        onFocus={() => this.setState({ mesCode: '' })}
                                                    />
                                                </div>
                                                <div className="col-xs-12 mb-20">
                                                    <div className="cus-mes">
                                                        {this.state.mesPass}
                                                    </div>
                                                    <input
                                                        type="password" name="password"
                                                        className={'form-control input-lg' + (this.state.mesPass !== '' ? ' cus-error-field' : '')}
                                                        placeholder="Mật khẩu mới"
                                                        maxLength="100"
                                                        onChange={this.handleChangeInput}
                                                        onFocus={() => this.setState({ mesPass: '' })}
                                                    />
                                                </div>
                                                <div className="col-xs-12 mb-20">
                                                    <div className="cus-mes">
                                                        {this.state.mesPassCfm}
                                                    </div>
                                                    <input
                                                        type="password" name="passwordcfm"
                                                        className={'form-control input-lg' + (this.state.mesPassCfm !== '' ? ' cus-error-field' : '')}
                                                        placeholder="Xác nhận mật khẩu mới"
                                                        maxLength="100"
                                                        onChange={this.handleChangeInput}
                                                        onFocus={() => this.setState({ mesPassCfm: '' })}
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