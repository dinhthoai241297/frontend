import React, { Component, Fragment } from 'react';
import Footer from './../common/Footer';
import { connect } from 'react-redux';
import * as actions from './../../actions/SearchActions';
import Nav from '../common/Nav';
import background from '../../assets/img/background.png';
import { init_all } from '../../assets/vendor/js/all';

class Search extends Component {

    componentDidMount() {
        init_all();
    }
    
    constructor(props) {
        super(props);
        this.state = {
            label: 'Tìm kiếm nâng cao',
            inputSearch: '',
            warning: '',
            processing: false
        }
    }

    search = (e) => {
        this.setState({processing: true});
        e.preventDefault();
        let { inputsearch } = this.state;
        let warning = '';
        this.props.getOneName(inputsearch);
    }

   

    toggleAdvSearch = () => {
        let { label } = this.state;
        label = 'Tìm kiếm nâng cao' === label ? 'Ẩn tìm kiếm nâng cao' : 'Tìm kiếm nâng cao';
        this.setState({ label }, () => {
            $('#adv-search').toggle(500);
        });
    }

    render() {

        return (
            <Fragment>
                <header style={{ backgroundImage: `url(${background})`, backgroundPosition: '50% 0px' }}>
                    <div className="cover" />
                    {/* Navigation panel */}

                    <Nav />

                    {/* End Navigation panel */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-8 col-lg-offset-2">
                                <div className="row mb-20">
                                    <div className="col-xs-12 text-center">
                                        <h1 className="cus-h1 mb-0">Tra cứu điểm chuẩn</h1>
                                    </div>
                                </div>
                                <div className="row mb-10" id="form-search">
                                    <div className="col-xs-12 mb-20" id="normal-search">
                                        <div className="relative">
                                            <input 
                                            className="cus-input cus-light" 
                                            placeholder="Tìm kiếm" 
                                            type="text"
                                            value={this.props.searchText}
                                            name="inputsearch"
                                            />
                                            <a className="cus-btn-search cus-light">
                                                <i className="fa fa-fw"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xs-12" id="adv-search" style={{ display: 'none' }}>
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-4 mb-20">
                                                <select className="cus-input cus-light">
                                                    <option>Khu vực</option>
                                                    <option>123</option>
                                                    <option>123</option>
                                                </select>
                                            </div>
                                            <div className="col-xs-12 col-lg-4 mb-20">
                                                <select className="cus-input cus-light">
                                                    <option>Loại hình</option>
                                                    <option>123</option>
                                                    <option>123</option>
                                                </select>
                                            </div>
                                            <div className="col-xs-12 col-lg-4 mb-20">
                                                <select className="cus-input cus-light">
                                                    <option>Thành phố</option>
                                                    <option>123</option>
                                                    <option>123</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="pull-right">
                                            <a href="#" id="adv-toggle" onClick={this.toggleAdvSearch}>{this.state.label}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h3>Kết quả tìm kiếm</h3>
                            </div>
                            <div className="col-xs-12">
                                <div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="15%">Ký hiệu</th>
                                                <th scope="col">Tên trường</th>
                                                <th scope="col" width="25%">Thành phố</th>
                                                <th scope="col" width="15%">Thông tin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="/detail">NLS</a></td>
                                                <td>Đại học Nông Lâm</td>
                                                <td>Hồ Chí Minh</td>
                                                <td><a href="/detail">Chi tiết</a></td>
                                            </tr>
                                            <tr>
                                                <td><a href="/detail">NEU</a></td>
                                                <td>Đại học Kinh Tế Quốc Dân</td>
                                                <td>Hà Nội</td>
                                                <td><a href="/detail">Chi tiết</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <div className="text-right">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li>
                                                <a href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li><a href="#">1</a></li>
                                            <li>
                                                <a href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                            <li className="clearfix"></li>
                                        </ul>
                                    </nav>
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

const mapStateToProps = (state) => {
    return {
        search: state.SearchReducer.search

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getOneName: (name, code, province, description) => dispatch(actions.getOneNameApi(name, code, province, description))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);