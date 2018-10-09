import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/styles/img/logo.png';

class Header extends Component {
    render() {
        return (
        	<div>
           <div id="logo-menu">
			<div className="container-fluid">
				<div className="row justify-content-between">
					<div className="col-auto">
						<div id="logo">
							<img src="{logo}" alt={"logo"} />
						</div>
					</div>
					<div className="col-auto">
						<nav>
							<div>
								<button id="btn-menu"><i className="fas fa-2x fa-bars"></i></button>
							</div>
							<ul id="nav-menu">
								<li>
									<NavLink to="/" activeClassName="active">Trang chủ</NavLink>
								</li>
								<li>
									<Link to="/search">Tra cứu</Link>
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
		
		</div>
		
        );
    }
}



export default Header;