import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/UserActions';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Nav from '../common/Nav';
import { init_all } from '../../assets/vendor/js/all';
import Footer from '../common/Footer';

class Profile extends Component {

    componentDidMount() {
        init_all();
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    convertDate = date => {
        date = new Date(date);
        return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    }

    render() {

        let { user } = this.props;

        if (!user) {
            return <Redirect to="/login" />
        }

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
                                        <h1 className="cus-h1 mb-0">Thông tin tài khoản</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="container">
                    <div style={{ paddingTop: 70, paddingBottom: 70 }}>
                        <div className="row">
                            <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                                <div className="row">
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-user"></i>
                                                </div>
                                                <div className="media-body">
                                                    {user.fullName}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-transgender"></i>
                                                </div>
                                                <div className="media-body">
                                                    {user.sex === 'male' ? 'Nam' : user.sex === 'female' ? 'Nữ' : 'Khác'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-birthday-cake"></i>
                                                </div>
                                                <div className="media-body">
                                                    {this.convertDate(user.birthday)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-phone"></i>
                                                </div>
                                                <div className="media-body">
                                                    {user.phonenumber}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-map"></i>
                                                </div>
                                                <div className="media-body">
                                                    {user.province.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-envelope"></i>
                                                </div>
                                                <div className="media-body">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-10">
                                        <div className="cus-media">
                                            <div className="media">
                                                <div className="media-left">
                                                    <i className="fas fa-4x fa-graduation-cap"></i>
                                                </div>
                                                <div className="media-body">
                                                    {user.purpose.code}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </Fragment>
        );
    }
}

Profile.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);