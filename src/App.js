import React, { Component, Fragment } from 'react';
import { init_first } from './assets/vendor/js/all';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        init_first();
    }

    render() {
        let { loading } = this.props;
        console.log(loading);
        return (
            <Fragment>
                {loading && (
                    <div className="page-loader" style={{ display: 'block !important' }}>
                        <div className="loader">Loading...</div>
                    </div>
                )}
                {this.props.children}
            </Fragment>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        loading: state.LoadingReducer.loading
    }
}

export default connect(mapStateToProps)(App);