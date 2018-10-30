import React, { Component, Fragment, PropTypes } from 'react';

class App extends Component {

    componentDidMount() {
        require('./assets/vendor/js/all.js');
    }
    

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}

export default App;