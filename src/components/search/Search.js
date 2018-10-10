import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/styles/img/logo.png';
import '../../assets/styles/css/stylesearch.css';
import $ from "jquery";

class Search extends Component {
    render() {
        return (
            <div>
            <header>
            <div className="searchPage">
            <div id="logo-menu">
			<div className="container-fluid">
				<div className="row justify-content-between">
					<div className="col-auto">
						<div id="logo">
							<img src={logo} />
						</div>
					</div>
					<div className="col-auto">
						<nav>
							<div>
								<button id="btn-menu"><i className="fas fa-2x fa-bars"></i></button>
							</div>
							<ul id="nav-menu">
								<li>
									<Link to="/">Trang chủ</Link>
								</li>
								<li>
									<NavLink to="/search" activeClassName="active">Tra cứu</NavLink>
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


             	<div className="container">
					<div className="row">
					<div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
						<div id="form-search">
						<form action="">
							<div className="row">
								<div className="col-12">
									<div id="label-search">
										<span>Tra cứu điểm chuẩn</span>
									</div>
									<div id="nor-search">
										<input type="text" placeholder="Tìm kiếm ..." />
										<button>
											<i className="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>

							<div id="adv-search" className="collapse hide">
								<div className="row">
									<div className="col-12 col-md-4">
										<div>
											<select>
												<option value="null">--- Khu vực ---</option>
												<option value="volvo">Miền Bắc</option>
												<option value="saab">Miền Nam</option>
												<option value="mercedes">Miền Trung</option>
												<option value="mercedes">Tây Nguyên</option>
											</select>
											<i className="fas fa-angle-down"></i>
										</div>
									</div>

									<div className="col-12 col-md-4">
										<div>
											<select>
												<option value="null">--- Loại hình ---</option>
												<option value="volvo">Công lập</option>
												<option value="saab">Dân lập</option>
											</select>
											<i className="fas fa-angle-down"></i>
										</div>
									</div>

									<div className="col-12 col-md-4">
										<div>
											<select>
												<option value="null">--- Thành phố ---</option>
												<option value="volvo">Tp.HCM</option>
												<option value="volvo">Hà Nội</option>
												<option value="volvo">Khánh Hòa</option>
												<option value="volvo">Cần thơ</option>
												<option value="volvo">Tây Nguyên</option>
											</select>
											<i className="fas fa-angle-down"></i>
										</div>
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="row">
								<div className="col-12">
									<div id="adv-toggle">
										<a href="#">Tìm kiếm nâng cao</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</div>
		</header>
	
         

           
         <content>
		<div className="container">
			<div>
				<h3>Kết quả tìm kiếm</h3>
			</div>
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
							<td>
								<Link to="detail">NLS</Link>
							</td>
							<td>
								Đại học Nông Lâm
							</td>
							<td>
								TP Hồ Chí Minh
							</td>
							<td>
								<Link to="detail">Chi tiết</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-right">
				<nav className="d-inline-block" aria-label="Page navigation example">
					<ul className="pagination">
						<li className="page-item">
							<a className="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
								<span className="sr-only">Previous</span>
							</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
								<span className="sr-only">Next</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</content>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-4">
					<div>
						<h3>Tuyensinh.com.vn</h3>
						<p>Website tư vấn tuyển sinh uy tín, chất lượng</p>
						<p>Dữ liệu được cập nhật và đánh giá liên tục để đem lại cái nhìn đúng đắn cho các bạn học sinh, sinh viên.</p>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div>
						<h3>Site map</h3>
						<ul>
							<li>
								<a href="index.html">
									<i class="fas fa-hand-point-right"></i>
								Trang chủ</a>
							</li>
							<li>
								<a href="about.html">
									<i class="fas fa-hand-point-right"></i>
								Tra cứu</a>
							</li>
							<li>
								<a href="program.html">
									<i class="fas fa-hand-point-right"></i>
								Tư vấn</a>
							</li>
							<li>
								<a href="blog.html">
									<i class="fas fa-hand-point-right"></i>
								Tin tức</a>
							</li>	
							<li>
								<a href="gallery.html">
									<i class="fas fa-hand-point-right"></i>
								Liên hệ</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div>
						<h3>Truy cập nhanh</h3>
						<ul>
							<li>
								<a href="about.html">
									<i class="fas fa-hand-point-right"></i>
								Tra cứu điểm chuẩn</a>
							</li>
							<li>
								<a href="about.html">
									<i class="fas fa-hand-point-right"></i>
								Tra cứu điểm thi</a>
							</li>
							<li>
								<a href="gallery.html">
									<i class="fas fa-hand-point-right"></i>
								Xu hướng chọn trường</a>
							</li>
							<li>
								<a href="blog.html">
									<i class="fas fa-hand-point-right"></i>
								Tin tức tuyển sinh</a>
							</li>	
							<li>
								<a href="about.html">
									<i class="fas fa-hand-point-right"></i>
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

    componentDidMount() {
		$("#btn-menu").click(function() {
			$("#nav-menu").toggle(400);
		});
		$("#adv-toggle a").click(function(e) {
			e.preventDefault();
			let text = $(this).text();
			$(this).text(text == "Tìm kiếm nâng cao" ? "Ẩn tìm kiếm nâng cao" : "Tìm kiếm nâng cao");
			$("#adv-search").toggle(300);
		});
  	}
}

export default Search;