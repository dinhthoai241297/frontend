import React, { Component, Fragment } from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import SchoolApi from '../../api/SchoolApi';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import { init_all } from '../../assets/vendor/js/all';
import MarkApi from '../../api/MarkApi';
import MarkItem from '../mark/markItem';
import * as load from '../../actions/LoadingActions';
import PropTypes from 'prop-types';

class SchoolDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            school: undefined
        }
    }

    handleChangeSelect = e => {
        this.loadMark(Number(e.target.value));
    }

    async componentDidMount() {
        init_all();
        await this.initFilter(qs.parse(this.props.location.search));
        this.loadSchool();
        this.loadMark(2018);
    }

    initFilter = filter => {
        let { id } = filter;
        this.setState({ id });
    }

    loadSchool = () => {
        let { id } = this.state;
        SchoolApi.getOne({ id }).then(res => {
            this.setState({ school: res.body.data });
        });
    }

    genListMark = () => {
        let rs = null;
        let { marks } = this.state;
        if (marks) {
            rs = marks.map((mark, index) => (<MarkItem key={index} mark={mark} />));
        }
        return rs;
    }

    loadMark = year => {
        this.props.loading(true);
        let { id } = this.state;
        MarkApi.getAll({ school: id, year }).then(res => {
            this.setState({ marks: res.body.list });
            this.props.loading(false);
        });
    }

    render() {

        let { school } = this.state;

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
                                        <h1 className="cus-h1 mb-0">Thông tin tuyển sinh</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="container">
                    <div style={{ paddingTop: 70, paddingBottom: 70 }}>
                        <div className="row">
                            {school && (
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-12 col-lg-4 text-center">
                                            <img width="auto" height="auto" alt={school.code} src={school.image} />
                                        </div>
                                        <div className="col-xs-12 col-lg-8">
                                            <h4>
                                                <b>Trường: </b><span style={{ textTransform: 'uppercase' }}>{school.name}</span>
                                            </h4>
                                            <h4>
                                                <b>Mã Trường: </b>{school.code}
                                            </h4>
                                            <h4>
                                                <b>Website: </b><a href={school.description}>{school.description}</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 text-center">
                                            <h2>
                                                ĐIỂM TUYỂN SINH
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="row form mb-20">
                                        <div className="col-xs-12 col-lg-4 col-lg-offset-8">
                                            <select
                                                name="year" className="form-control input-lg"
                                                onChange={this.handleChangeSelect}
                                            >
                                                <option value={2018}>2018</option>
                                                <option value={2017}>2017</option>
                                                <option value={2016}>2016</option>
                                                <option value={2015}>2015</option>
                                                <option value={2014}>2014</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12" style={{ overflow: 'auto' }}>
                                            <table className="cus-table">
                                                <thead>
                                                    <tr>
                                                        <th>Mã ngành</th>
                                                        <th>Tên ngành</th>
                                                        <th className="text-center">Nguyện vọng</th>
                                                        <th>Tổ hợp môn</th>
                                                        <th>Điểm chuẩn</th>
                                                        <th>Ghi chú</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.genListMark()}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </section>

                <Footer />
            </Fragment >
        );
    }
}

SchoolDetail.propTypes = {
    loading: PropTypes.func
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loading: loading => dispatch(load.loading(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetail);