import React, { Component, Fragment, PropTypes } from 'react';

import Home from './components/home/Home';
import Search from './components/search/Search';
import Detail from './components/detail/Detail';





class App extends Component {
    render() {
        let { user } = this.props;
        return (
            <Fragment>	
                <Home />
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