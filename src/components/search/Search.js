import React, { Component, Fragment } from 'react';
import Footer from './../common/Footer';
import { connect } from 'react-redux';
import * as actions from './../../actions/SchoolActions';
import Nav from '../common/Nav';
import { init_all } from '../../assets/vendor/js/all';
import qs from 'query-string';
import PropTypes from 'prop-types';
import SchoolItem from '../school/SchooItem';
import * as load from '../../actions/LoadingActions';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: 'Tìm kiếm nâng cao',
            keyword: ''
        }
    }

    async componentDidMount() {
        init_all();
        await this.initFilter(qs.parse(this.props.location.search));
        this.loadSchools();
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            await this.initFilter(qs.parse(nextProps.location.search));
            this.loadSchools();
        }
    }

    handeChangeInput = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    toggleAdvSearch = e => {
        e.preventDefault();
        let { label } = this.state;
        label = 'Tìm kiếm nâng cao' === label ? 'Ẩn tìm kiếm nâng cao' : 'Tìm kiếm nâng cao';
        this.setState({ label }, () => {
            $('#adv-search').toggle(500);
        });
    }

    initFilter = filter => {
        let { page, keyword } = filter;
        page = Number(page) || 1;
        keyword = keyword ? keyword : '';
        this.setState({ keyword, page });
    }

    pushUrl = () => {
        let { page, keyword } = this.state;
        let query = '?';
        query += page ? ('page=' + page) : '';
        query += keyword ? ('&keyword=' + keyword) : '';
        this.props.history.push(this.props.location.pathname + query);
    }

    search = e => {
        e.preventDefault();
        this.setState({ page: 1 }, this.pushUrl);
    }

    loadSchools = () => {
        this.props.loading(true);
        let { page, keyword } = this.state;
        this.props.loadSchools(page, keyword).then(res => {
            console.log(res);
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

    genListSchool = () => {
        let rs = null;
        let { schools } = this.props.data;
        if (schools) {
            rs = schools.map((el, index) => (
                <SchoolItem key={index} school={el} />
            ));
        }
        return rs;
    }

    enter = e => {
        if (e.keyCode === 13) {
            this.search(e);
        }
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
                                        <h1 className="cus-h1 mb-0">Tìm kiếm trường</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className="container pt-30 pb-70">
                        <div className="row mb-40">
                            <form className="form">
                                <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                                    <div className="row mb-20">
                                        <div className="col-xs-12">
                                            <div className="relative">
                                                <input
                                                    type="text" name="keyword"
                                                    className="form-control input-lg"
                                                    placeholder="Tìm kiếm"
                                                    onChange={this.handeChangeInput}
                                                    value={this.state.keyword}
                                                    onKeyDown={this.enter}
                                                    autoComplete="off"
                                                />
                                                <a
                                                    href="#" className="cus-search"
                                                    onClick={this.search}
                                                >
                                                    <i className="fa fa-fw"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" id="adv-search" style={{ display: 'none' }}>
                                        <div className="col-xs-12 col-lg-4 mb-20">
                                            <select className="form-control input-lg">
                                                <option>One</option>
                                                <option>Two</option>
                                                <option>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-12 col-lg-4 mb-20">
                                            <select className="form-control input-lg">
                                                <option>One</option>
                                                <option>Two</option>
                                                <option>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-xs-12 col-lg-4 mb-20">
                                            <select className="form-control input-lg">
                                                <option>One</option>
                                                <option>Two</option>
                                                <option>Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row" style={{ display: 'none' }}>
                                        <div className="col-xs-12">
                                            <div className="pull-right">
                                                <a href="#" id="adv-toggle" onClick={this.toggleAdvSearch}>{this.state.label}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <h2>KẾT QUẢ TÌM KIẾM</h2>
                            </div>
                            <div className="col-xs-12">
                                <div style={{ overflow: 'auto' }}>
                                    <table className="cus-table">
                                        <thead>
                                            <tr>
                                                <th>Mã Trường</th>
                                                <th>Tên Trường</th>
                                                <th>Tỉnh Thành</th>
                                                <th>Chi tiết</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.data.schools.length !== 0 ? this.genListSchool() : (
                                                <tr>
                                                    <td className="text-center" colSpan={4}>
                                                        Không tìm thấy trường
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-xs-12 text-right">
                                <nav className="d-inline-block" aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a
                                                className={'page-link' + (this.state.page === 1 ? ' cus-disabled' : '')}
                                                href="#"
                                                aria-label="Previous"
                                                onClick={e => this.newPage(e, -1)}
                                            >
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link">{this.state.page}</a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className={'page-link' + (this.props.data.next ? '' : ' cus-disabled')}
                                                aria-label="Next"
                                                href="#"
                                                onClick={e => this.newPage(e, 1)}
                                            >
                                                <span aria-hidden="true">»</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </Fragment>
        );
    }
}

Search.propTypes = {
    data: PropTypes.object,
    loadSchools: PropTypes.func,
    loading: PropTypes.func
}

const mapStateToProps = state => {
    return {
        data: state.SchoolReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadSchools: (page, keyword) => dispatch(actions.loadSchoolApi(page, keyword)),
        loading: loading => dispatch(load.loading(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);