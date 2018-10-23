import React, { Component, Fragment } from 'react';
import { Link, NavLink, Route, BrowserRouter } from 'react-router-dom';
import '../../assets/styles/stylehome.css';
import Header from '../common/Header';

class Home extends Component {
    
    render() {
        return (
            <div className="homePage bg-main">

                <Header styles={{ background: 'transparent' }} />

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-caption">
                                <p>
                                    Danh sách trường công bố phương án tuyển sinh năm 2018
						                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>
                                    Tuyển sinh đại học Nông Lâm TPHCM năm học 2018-2019
						                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-caption">
                                <p>
                                    Danh sách trường công bố phương án tuyển sinh năm 2018
						                </p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="mb-2 col-12 col-md-6 col-lg-4 offset-lg-2 col-xl-3 offset-xl-3">
                                <Link to="search">
                                    Tra cứu điểm thi
						                </Link>
                            </div>
                            <div className="mb-2 col-12 col-md-6 col-lg-4 col-xl-3">
                                <Link to="">
                                    Tư vấn tuyển sinh
						                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2018 Nong Lam University. All rights reserved | Design by HCMUAF
			    </div>
            </div>
        );
    }
}

export default Home;