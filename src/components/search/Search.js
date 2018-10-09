import React, { Component, Fragment } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
            <header>
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
								<a href="detail.html">NLS</a>
							</td>
							<td>
								Đại học Nông Lâm
							</td>
							<td>
								TP Hồ Chí Minh
							</td>
							<td>
								<a href="detail.html">Chi tiết</a>
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
   </div>
        );
    }
}

export default Search;