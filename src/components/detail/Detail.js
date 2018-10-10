import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/styles/img/logo.png';
import '../../assets/styles/css/styledetail.css';

class Detail extends Component {
    render() {
        return (
            <div>
                <header>
		<div id="logo-menu">
			<div className="container-fluid">
				<div className="row justify-content-between">
					<div className="col-auto">
						<div id="logo">
							<img src="{logo}" />
						</div>
					</div>
					<div className="col-auto">
						<nav>
							<div>
								<button id="btn-menu"><i className="fas fa-2x fa-bars"></i></button>
							</div>
							<ul id="nav-menu">
								<li>
									<Link to="">Trang chủ</Link>
								</li>
								<li>
									<Link to="search">Tra cứu</Link>
								</li>
								<li>
									<a href="#">Tư vấn</a>
								</li>
								<li>
									<a href="#">Tin tức</a>
								</li>
								<li>
									<a href="#">Liên hệ</a>
								</li>
								<div className="clearfix"></div>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>

	<content>
		<div className="container">
			<div className="content">
				<div className="title">
					<h2>Thông tin tra cứu</h2>
				</div>
				<div className="video-grid">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-4 video">
								<img src="img/001.png"></img>
							</div>
							<div className="col-md-8 video-info">
								<br />
								<h3>Trường Đại học Nông Lâm TP.Hồ Chí Minh</h3>
								<h4>Nong Lam University - Ho Chi Minh City</h4>
								<div className="table-responsive">
									<table className="table-borderless">
										<tr>
											<td><strong>Ký hiệu: </strong></td>
											<td className="column2">NLS</td>
										</tr>
										<tr>
											<td><strong>Loại hình: </strong></td>
											<td className="column2">Công lập</td>
										</tr>
										<tr>
											<td><strong>Địa chỉ: </strong></td>
											<td className="column2">Khu phố 6, P. Linh Trung, Q. Thủ Đức,
											TPHCM</td>
										</tr>
										<tr>
											<td><strong>Điện thoại: </strong></td>
											<td className="column2">028.3896.3350<br />028.3896.6780<br />028.3897.4716
											</td>
										</tr>
										<tr>
											<td><strong>Website:</strong></td>
											<td className="column2"><a href="http://hcmuaf.edu.vn">www.hcmuaf.edu.vn</a></td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="title1">
					<h3>Đề án tuyển sinh</h3>
					<div className="blog-section">
						<div className="table-responsive">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th rowspan="2" width="3%">STT</th>
										<th rowspan="2">Ngành học</th>
										<th rowspan="2" width="12%">Mã</th>
										<th colspan="2">Chỉ tiêu (Dự kiến)</th>
										<th colspan="2">Tổ hợp môn xét tuyển 1</th>
										<th colspan="2">Tổ hợp môn xét tuyển 2</th>
										<th colspan="2">Tổ hợp môn xét tuyển 3</th>
										<th colspan="2">Tổ hợp môn xét tuyển 4</th>
									</tr>

									<tr>
										<th>Theo xét KQ thi THPT QG</th>
										<th>Theo phương thức khác</th>
										<th>Mã tổ hợp môn</th>
										<th>Môn chính</th>
										<th>Mã tổ hợp môn</th>
										<th>Môn chính</th>
										<th>Mã tổ hợp môn</th>
										<th>Môn chính</th>
										<th>Mã tổ hợp môn</th>
										<th>Môn chính</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>1</td>
										<td>Các ngành đào tạo đại học</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>1.1</td>
										<td>Sư phạm Kỹ thuật nông nghiệp</td>
										<td>7140215</td>
										<td>45</td>
										<td></td>
										<td>A00</td>
										<td></td>
										<td>A01</td>
										<td></td>
										<td>B00</td>
										<td></td>
										<td>D08</td>
										<td></td>
									</tr>

									<tr>
										<td>1.2</td>
										<td>Sư phạm Kỹ thuật nông nghiệp</td>
										<td>7140215</td>
										<td>45</td>
										<td></td>
										<td>A00</td>
										<td></td>
										<td>A01</td>
										<td></td>
										<td>B00</td>
										<td></td>
										<td>D08</td>
										<td></td>
									</tr>

									<tr>
										<td>1.3</td>
										<td>Sư phạm Kỹ thuật nông nghiệp</td>
										<td>7140215</td>
										<td>45</td>
										<td></td>
										<td>A00</td>
										<td></td>
										<td>A01</td>
										<td></td>
										<td>B00</td>
										<td></td>
										<td>D08</td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</content>

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
            </div>
        );
    }
}

export default Detail;