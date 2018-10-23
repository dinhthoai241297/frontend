import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../../actions/UserActions';

class Header extends Component {

    componentDidMount() {
        $("#btn-menu").click(function () {
            $("#nav-menu").toggle(400);
        });
    }

    logout = e => {
        e.preventDefault();
        this.props.logout();
    }

    render() {

        let { user } = this.props;

        return (
            <header>
                <div id="logo-menu">
                    <div className="container-fluid">
                        <div className="row justify-content-between">
                            <div className="col-auto">
                                <div id="logo">
                                    <img src={logo} alt={"logo"} />
                                </div>
                            </div>
                            <div className="col-auto">
                                <nav>
                                    <div>
                                        <button id="btn-menu"><i className="fas fa-2x fa-bars"></i></button>
                                    </div>
                                    <ul id="nav-menu">
                                        <li>
                                            <NavLink exact to="/" activeClassName="active-mn">Trang chủ</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/search" activeClassName="active-mn">Tra cứu</NavLink>
                                        </li>
                                        <li>
                                            <a href="#">Tư vấn</a>
                                        </li>
                                        <li>
                                            <a href="#">Tin tức</a>
                                        </li>
                                        <li>
                                            {user ? (<a href='#' onClick={this.logout}>{user.name} (Logout)</a>) : (<NavLink to="/login" activeClassName="active-mn">Login</NavLink>)}
                                        </li>
                                        <div className="clearfix"></div>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);