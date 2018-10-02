import React, { Component, Fragment } from 'react';

class App extends Component {
    render() {
        let { user } = this.props;
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}

export default App;