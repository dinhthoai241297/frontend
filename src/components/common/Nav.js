import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../../actions/UserActions';

class Nav extends Component {

    logout = e => {
        console.log('here');
        e.preventDefault();
        this.props.logout();
    }

    render() {

        let { user } = this.props;

        return (
            <nav className="main-nav dark cus-blue transparent stick-fixed">
                <div className="full-wrapper relative clearfix">
                    {/* Logo ( * your text or image into link tag *) */}
                    <div className="nav-logo-wrap local-scroll">
                        <a href="/" className="logo"><b>EDUCATION</b></a>
                    </div>
                    <div className="mobile-nav"><i className="fa fa-bars" /></div>
                    {/* Main Menu */}
                    <div className="inner-nav desktop-nav">
                        <ul className="clearlist scroll-nav local-scroll">
                            <li><NavLink exact to='/'>Trang chủ</NavLink></li>
                            <li><NavLink to='/search'>Tra cứu</NavLink></li>
                            <li><a href="#home">Tư vấn</a></li>
                            <li><a href="#home">Tin Tức</a></li>
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