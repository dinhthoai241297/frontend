import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../../actions/UserActions';
import { init_all } from '../../assets/vendor/js/all';

class Nav extends Component {

    logout = e => {
        e.preventDefault();
        this.props.logout().then(res => {
            init_all();
        });
    }

    render() {

        let { user } = this.props;

        return (
            <nav className="main-nav dark cus-blue transparent stick-fixed">
                <div className="full-wrapper relative clearfix">
                    {/* Logo ( * your text or image into link tag *) */}
                    <div className="nav-logo-wrap local-scroll">
                        <NavLink exact to='/' className="logo"><b>EDUCATION</b></NavLink>
                    </div>
                    <div
                        className="mobile-nav"
                        style={{ height: 75, lineHeight: 75, width: 75 }}
                    >
                        <i className="fa fa-bars" />
                    </div>
                    {/* Main Menu */}
                    <div className="inner-nav desktop-nav">
                        <ul className="clearlist scroll-nav local-scroll">
                            <li><NavLink exact to='/'>Trang chủ</NavLink></li>
                            <li><NavLink to='/search'>Tra cứu</NavLink></li>
                            <li><a href="#">Tư vấn</a></li>
                            <li><a href="#">Tin Tức</a></li>
                            <li>{user ? (<a href="#" onClick={this.logout}>{user.fullName} (Đăng xuất)</a>) : (<NavLink to='/login'>Đăng nhập</NavLink>)}</li>
                            {/* End Item With Sub */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Nav.propTypes = {
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
        logout: () => dispatch(actions.logoutApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);