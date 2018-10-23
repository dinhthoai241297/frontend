import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SearctList extends Component {

    render() {
        return (
            <Fragment>
                <tr>
                    <td>
                        <Link to="detail">{this.props.kyHieu}</Link>
                    </td>
                    <td>
                        {this.props.tenTruong}
                    </td>
                    <td>
                        {this.props.city}
                    </td>
                    <td>
                        <Link to="detail">Chi tiết</Link>
                    </td>
                </tr>
            </Fragment>
        );
    }
}

export default SearctList;