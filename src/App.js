import React, { Component, Fragment, PropTypes } from 'react';

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}

export default App;