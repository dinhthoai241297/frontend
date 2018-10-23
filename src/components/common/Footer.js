import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div>
                                <h3>Tuyensinh.com.vn</h3>
                                <p>Website tư vấn tuyển sinh uy tín, chất lượng</p>
                                <p>Dữ liệu được cập nhật và đánh giá liên tục để đem lại cái nhìn đúng đắn cho các bạn học sinh, sinh viên.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div>
                                <h3>Site map</h3>
                                <ul>
                                    <li>
                                        <a href="index.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tra cứu</a>
                                    </li>
                                    <li>
                                        <a href="program.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tư vấn</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tin tức</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div>
                                <h3>Truy cập nhanh</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tra cứu điểm chuẩn</a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tra cứu điểm thi</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Xu hướng chọn trường</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tin tức tuyển sinh</a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i className="fas fa-hand-point-right"></i>
                                            Tư vấn truyển sinh</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2018 Nong Lam University. All rights reserved | Design by HCMUAF
			        </div>
            </footer>
        );
    }
}

export default Footer;