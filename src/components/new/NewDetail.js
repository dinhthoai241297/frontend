import React, { Component, Fragment } from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import NewApi from '../../api/NewApi';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import { init_all } from '../../assets/vendor/js/all';
import * as load from '../../actions/LoadingActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NewDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            myNew: undefined,
            pholder: 'Bình luận ở đây!!!',
            closeBtn: 'Đóng'
        }
    }

    async componentDidMount() {
        init_all();
        await this.initFilter(qs.parse(this.props.location.search));
        this.loadNew();
    }

    initFilter = filter => {
        let { id } = filter;
        this.setState({ id });
    }

    loadNew = () => {
        let { id } = this.state;
        NewApi.getOne({ id }).then(res => {
            this.setState({ myNew: res.body.data });
        });
    }

    toggleComment = e => {
        let { pholder } = this.state;
        pholder = 'Bình luận ở đây!!!' === pholder ? 'Mời nhập thắc mắc hoặc ý kiến của bạn' : 'Mời nhập thắc mắc hoặc ý kiến của bạn';
        this.setState({ pholder }, () => {
            $('.content-info').slideDown(700);
        });
    }

    closeCmt = e => {
        let { closeBtn } = this.state;
        closeBtn = 'Đóng';
        this.setState({ closeBtn }, () => {
            $(".content-info").slideUp(700);
        });
    }

    render() {

        let { myNew } = this.state;
        console.log(myNew);

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
                                        <h1 className="cus-h1 mb-0">Tin tức</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="container">
                    <div className="wrapper">
                        <div className="box_mid">
                            <div className="mid-content">
                                <div className="mod-content row">
                                    <div id="main" className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                        <div className="news-content desc">
                                            <div className="date">Thứ năm, 06/12/2018, 08:07 GMT+7</div>
                                            <div align="justify">
                                                {myNew && <div dangerouslySetInnerHTML={{ __html: myNew.content }}></div>}
                                            </div>
                                        </div>
                                        <div className="product-tags">
                                            <p>Tags:</p>
                                            <ul className="list-inline text-left">
                                                <li><Link to="#">Test 1</Link></li>
                                                <li><Link to="#">Test 2</Link></li>
                                                <li><Link to="#">Test 3</Link></li>
                                                <li><Link to="#">Test 4</Link></li>
                                                <li><Link to="#">Test 5</Link></li>
                                            </ul>
                                        </div>
                                        <div className="comment">
                                            <div className="title">Ý kiến của bạn</div>
                                            <div className="formComment">
                                                <form action="#" method="post" name="fComment" id="fComment">
                                                    <div className="w_content">
                                                        <textarea id="content" name="content" className="form-control"
                                                            onClick={this.toggleComment} placeholder={this.state.pholder}></textarea>
                                                        <div className="content-info">
                                                            <div className="info-title">Nhập thông tin của bạn</div>
                                                            <input type="text" name="email" id="email" value=""
                                                                className="form-control" placeholder="Email" /> <input
                                                                type="text" name="name" id="name" value=""
                                                                className="form-control" placeholder="Tên của bạn:" />
                                                            <button id="btnSend" name="btnSend" className="btn"
                                                                type="submit" value="Gửi đánh giá">Gửi đánh giá</button>
                                                            <button id="btn-close" name="btn-close" className="btn"
                                                                type="button" onClick={this.closeCmt}>{this.state.closeBtn}</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="box-title">
                                                <div className="fTitle">Các tin khác</div>
                                            </div>
                                            <div className="box-content">
                                                <ul className="news-other-list">
                                                    <li><Link to="#">Test test test <span>( 06-12-2017 )</span>
                                                    </Link></li>
                                                    <li><Link to="#">Test test test <span>( 06/12/2018 )</span>
                                                    </Link></li>
                                                    <li><Link to="#">Test test test <span>( 06/12/2018 )</span>
                                                    </Link></li>
                                                    <li><Link to="#">Test test test <span>( 06/12/2018 )</span>
                                                    </Link></li>
                                                    <li><Link to="#">Test test test <span>( 06/12/2018 )</span>
                                                    </Link></li>
                                                </ul>
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

NewDetail.propTypes = {
    loading: PropTypes.func
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loading: loading => dispatch(load.loading(loading)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDetail);