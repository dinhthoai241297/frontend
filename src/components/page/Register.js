import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from './../common/Nav';
import { init_all } from '../../assets/vendor/js/all';
import Footer from '../common/Footer';
import ProvinceApi from '../../api/ProvinceApi';
import UserApi from '../../api/UserApi';

class Register extends Component {

    componentDidMount() {
        init_all();
    }

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            gender: '',
            dob: undefined,
            email: '',
            phoneNumber: 0,
            province: undefined,
            subjectGroup: undefined,

            province: undefined,
            provinceName: 'Tỉnh thành',
            pageProvince: 1,
            provinces: [],
            nextProvince: false,

            subjectGroup: undefined,
            pageSubjectGroup: 1,
            subjectGroups: [],
            nextSubjectGroup: false
        }
    }

    handleChangeInput = (e) => {
        let { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    loadProvinces = async page => {
        let rs = await ProvinceApi.getAll({
            page
        });

        this.setState({
            provinces: rs.body.data.list,
            nextProvince: rs.body.data.next,
            pageProvince: page
        });
    }

    newPageProvince = (e, num) => {
        e.preventDefault();
        let { pageProvince, nextProvince } = this.state;
        pageProvince += num;
        if (pageProvince === 0 || (!nextProvince && num > 0)) {
            return;
        } else {
            this.loadProvinces(pageProvince);
        }
    }

    genListProvince = () => {
        let { provinces } = this.state;
        let rs = null;
        rs = provinces.map((p, i) => (
            <a
                key={i}
                className={"list-group-item h-hand " + (p.id === this.state.province ? 'active' : '')}
                onClick={() => this.handleChangeProvince(p)}
            >{p.name}</a>
        ));
        return rs;
    }

    handleChangeProvince = (s) => {
        $('#modal-province').modal('hide');
        this.setState({
            province: s.id,
            provinceName: s.name
        });

    }

    toggleProvince = () => {
        if (this.state.provinces.length === 0) {
            this.loadProvinces(this.state.pageProvince);
        }
        $('#modal-province').modal('toggle');
    }

    loadSubjectGroups = async page => {
        let rs = await SubjectGroupApi.getAll({
            page
        });

        this.setState({
            subjectGroups: rs.body.data.list,
            nextSubjectGroup: rs.body.data.next,
            pageSubjectGroup: page
        });
    }

    newPageSubjectGroup = (e, num) => {
        e.preventDefault();
        let { pageSubjectGroup, nextSubjectGroup } = this.state;
        pageSubjectGroup += num;
        if (pageSubjectGroup === 0 || (!nextSubjectGroup && num > 0)) {
            return;
        } else {
            this.loadSubjectGroups(pageSubjectGroup);
        }
    }

    genListSubjectGroup = () => {
        let { subjectGroups } = this.state;
        let rs = null;
        rs = subjectGroups.map((sg, i) => (
            <a
                key={i}
                className={"list-group-item h-hand " + (sg.id === this.state.subjectGroup ? 'active' : '')}
                onClick={() => this.handleChangeProvince(sg)}
            >{sg.code}</a>
        ));
        return rs;
    }

    handleChangeSubjectGroup = (s) => {
        $('#modal-subjectGroup').modal('hide');
        this.setState({
            subjectGroup: s.id,
        });
    }

    toggleSubjectGroup = () => {
        if (this.state.subjectGroups.length === 0) {
            this.loadProvinces(this.state.pageSubjectGroup);
        }
        $('#modal-subjectGroup').modal('toggle');
    }

    register = e => {
        e.preventDefault();
        let { fullName, email, gender, dob, phoneNumber, province, subjectGroup } = this.state;
        UserApi.register({ fullName, email, gender, dob, phoneNumber, province, subjectGroup }).then(res => {
            if (code === 200) {
                // success
            } else {
                // maybe fail
            }
        }).catch(error => {
            // error
        });
    }

    render() {
        return (
            <Fragment>
                <div className="modal fade" id="modal-province" style={{ width: '100vw' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title">Tỉnh</h4>
                            </div>
                            <div className="modal-body">
                                <div className="list-group">
                                    {this.genListProvince()}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <ul className="pagination pagination-md no-margin pull-right">
                                    <li className={this.state.pageProvince === 1 ? 'disabled' : ''}>
                                        <a href="#" onClick={(e) => this.newPageProvince(e, -1)}>Pre</a>
                                    </li>
                                    <li className="active">
                                        <a>{this.state.pageProvince}</a>
                                    </li>
                                    <li className={this.state.nextProvince ? '' : 'disabled'}>
                                        <a href="#" onClick={(e) => this.newPageProvince(e, 1)} >Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                </div>

                <div className="modal fade" id="modal-subjectGroup">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title">Khối thi</h4>
                            </div>
                            <div className="modal-body">
                                <div className="list-group">
                                    {this.genListSubjectGroup()}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <ul className="pagination pagination-md no-margin pull-right">
                                    <li className={this.state.pageSubjectGroup === 1 ? 'disabled' : ''}>
                                        <a href="#" onClick={(e) => this.newPageSubjectGroup(e, -1)}>Pre</a>
                                    </li>
                                    <li className="active">
                                        <a>{this.state.pageSubjectGroup}</a>
                                    </li>
                                    <li className={this.state.nextProvince ? '' : 'disabled'}>
                                        <a href="#" onClick={(e) => this.newPageSubjectGroup(e, 1)} >Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                </div>

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
                                        <h1 className="cus-h1 mb-0">Đăng ký tài khoản</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="container">
                    <div className="small-section">
                        <div className="row form">
                            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                <div className="row">
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control input-lg"
                                            placeholder="Họ & Tên"
                                            maxLength="100"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <div className="row text-center">
                                            <div className="col-xs-4">
                                                <label className="radio-inline">
                                                    <input type="radio" name="gender" value="male" onChange={this.handleChangeInput} /> Nam
                                            </label>
                                            </div>
                                            <div className="col-xs-4">
                                                <label className="radio-inline">
                                                    <input type="radio" name="gender" value="female" onChange={this.handleChangeInput} /> Nữ
                                            </label>
                                            </div>
                                            <div className="col-xs-4">
                                                <label className="radio-inline">
                                                    <input type="radio" name="gender" value="dif" onChange={this.handleChangeInput} /> Khác
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="date" name="dob"
                                            className="form-control input-lg" placeholder="Ngày sinh"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="email" name="email"
                                            className="form-control input-lg" placeholder="Email"
                                            maxLength="100"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="password" name="password"
                                            className="form-control input-lg" placeholder="Mật khẩu"
                                            maxLength="100"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="password" name="passwordcfm"
                                            className="form-control input-lg" placeholder="Xác nhận mật khẩu"
                                            maxLength="100"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="text" name="phoneNumber" className="form-control input-lg"
                                            placeholder="Số điện thoại" maxLength="100"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="text" name="subjectGroup" className="form-control input-lg"
                                            placeholder="Khối dự định thi" maxLength="100"
                                            onChange={this.handleChangeInput}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20">
                                        <input
                                            type="text"
                                            readOnly
                                            style={{ cursor: 'pointer' }}
                                            name="province"
                                            className="form-control input-lg"
                                            placeholder="Tỉnh thành"
                                            maxLength="100"
                                            onClick={this.toggleProvince}
                                            value={this.state.provinceName}
                                        />
                                    </div>
                                    <div className="col-xs-12 mb-20 text-center">
                                        <a
                                            href="#"
                                            className="btn btn-mod btn-border btn-large btn-round"
                                            onClick={this.register}
                                        >Đăng ký</a>
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

export default Register;