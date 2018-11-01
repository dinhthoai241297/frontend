import React, { Component, Fragment, PropTypes } from 'react';
import { init_first } from './assets/vendor/js/all';

class App extends Component {

    componentDidMount() {
        init_first();
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