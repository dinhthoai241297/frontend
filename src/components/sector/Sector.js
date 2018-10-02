import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/SectorActions';

class Sector extends Component {

    componentDidMount() {
        this.props.loadSector(1);
    }

    genSectors = () => {
        let { sector } = this.props.sector;
        let rs = null;
        rs = sector.map((s, i) => (
            <h2 key={i}>{s.name}</h2>
        ));
        return rs;
    }

    render() {
        return (
            <div>
                {this.genSectors()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sector: state.SectorReducer
    }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        loadSector: (page) => dispatch(actions.loadAllSectorApi(page))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Sector);