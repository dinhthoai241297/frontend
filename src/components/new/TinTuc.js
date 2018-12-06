import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Nav from './../common/Nav';
import { init_all } from '../../assets/vendor/js/all';
import Footer from '../common/Footer';
import * as actions from '../../actions/NewActions';
import * as load from '../../actions/LoadingActions';
import NewItem from './NewItem';
import qs from 'query-string';

class Tintuc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    async componentDidMount() {
        init_all();
        await this.initFilter(qs.parse(this.props.location.search));
        this.loadNews();
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            await this.initFilter(qs.parse(nextProps.location.search));
            this.loadNews();
        }
    }

    initFilter = filter => {
        let { page } = filter;
        page = Number(page) || 1;
        this.setState({ page });
    }

    pushUrl = () => {
        let { page } = this.state;
        let query = '?';
        query += page ? ('page=' + page) : '';
        this.props.history.push(this.props.location.pathname + query);
    }

    loadNews = () => {
        this.props.loading(true);
        let { page } = this.state;
        this.props.loadNews(page).then(res => {
            this.props.loading(false);
        }).catch(error => {
            this.props.loading(false);
        });
    }

    newPage = (e, num) => {
        e.preventDefault();
        let { page } = this.state;
        if ((page === 1 && num < 0) || (this.props.data.next === false && num > 0)) {
            return;
        } else {
            this.setState({ page: page + num }, this.pushUrl);
        }
    }

    genListNew = () => {
        let rs = null;
        let { news } = this.props.data;
        if (news) {
            rs = news.map((el, index) => (
                <NewItem key={index} myNew={el} />
            ));
        }
        return rs;
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
                                        <h1 className="cus-h1 mb-0">Tin Tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div id="content">
        <div id="slide">
            <div className="item">
                <div className="img">
                    <a href="http://" title=""><img src="img/slide_1.jpg" alt="" /></a>
                </div>
            </div>
        </div>
        <div id="navation" className="breadcrumb hidden-sm hidden-xs">
            <div className="wrapper">
                <div className="navation">
                    <ul>
                        <li><a href="/index.html">Trang chủ</a></li>
                        <li><a href='/tintuc.html'>Tin tức</a></li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        </div>

        <div className="wrapper">
            <div className="box_mid">
                <div className="mid-title">
                    <div className="titleL">
                        <h1>Tin tức</h1>
                    </div>
                    <div className="titleR"></div>
                    <div className="clear"></div>
                </div>
                <div className="mid-content">

                    <div className="mod-content row">
                        <div id="sidebar" className="col-lg-3 col-md-3 hidden-sm hidden-xs">
                            <div className="menu-sidebar">
                                <ul>
                                    <li><a href='#' title='Sự kiện'><span>Sự kiện</span></a></li>
                                    <li><a href='#' title='Blog'><span>Blog</span></a></li>
                                    <li className="active"><a href='tintuc.html' title='Hot News'><span>Hot News</span></a></li>
                                </ul>     
                            </div>

                        </div>
                        <div id="main" className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="news">
                                        <div className="img">
                                            <a href="news1.html"><img src="img/1.jpg"></a>
                                        </div>
                                        <div className="caption">
                                            <div className="tend">
                                                <h3>
                                                    <a href="news1.html">Luyện nghe Tiếng Anh với trọn bộ
                                                        TACTICS FOR LISTENING từ cơ bản đến nâng cao</a>
                                                </h3>
                                            </div>
                                            <div className="clock">06-12-2017 - 343 lượt xem</div>
                                            <div className="tomtat">Bộ Tactics for listening được chia
                                                ra làm 3 cuốn dành cho người từ mới bắt đầu học hay muốn
                                                nâng cao trình tiếng Anh. Mỗi cuốn sách sẽ có 24 Unit, từng
                                                Unit là một chủ đề quen thuộc về cuộc sống của chúng ta sẽ
                                                giúp bạn dễ nghe và tư duy bằng tiếng Anh tốt nhất, sau mỗi
                                                bài học sẽ có bài tập để kiểm tra đánh giá tổng quan của
                                                bạn.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <ul>
                                    <li><span className="pagecur">1</span></li>
                                    <li><a href='#2' className='pagelink'>2</a></li>
                                    <li><a href='#3' className='pagelink'>3</a></li>
                                    <li><a href='#4' className='pagelink'>4</a></li>
                                    <li><a href='#5' className='pagelink'>5</a></li>
                                    <li><a href='#6' className='pagelink'>6</a></li>
                                    <li><a href='#7' className='pagelink'>7</a></li>
                                    <li><a href='#8' className='pagelink'>8</a></li>
                                    <li><a href='#2' className='btnPage'><i
                                            className="fa fa-angle-right"></i></a></li>
                                    <li><a href='#17' className='btnPage'><i
                                            className="fa fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

                <Footer />
            </Fragment>
        );
    }
}

New.propTypes = {
    data: PropTypes.object,
    loadNews: PropTypes.func,
    loading: PropTypes.func
}

const mapStateToProps = state => {
    return {
        data: state.NewReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadNews: page => dispatch(actions.loadNewApi(page)),
        loading: loading => dispatch(load.loading(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TinTuc);