import React, { Component, Fragment, PropTypes } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Search from './components/search/Search';
import $ from "jquery";



class App extends Component {
    render() {
        let { user } = this.props;
        return (
            <Fragment>
            	<header>
            	<Header />
                <Home />
                </header>
                <Footer />
            
            </Fragment>
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



export default App;