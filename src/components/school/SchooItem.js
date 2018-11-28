import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SchooItem extends Component {
    render() {
        let { school } = this.props;
        return (
            <tr>
                <td>
                    <Link to={'/school/detail?id=' + school._id} >
                        {school.code}
                    </Link>
                </td>
                <td>
                    <Link to={'/school/detail?id=' + school._id} >
                        {school.name}
                    </Link>
                </td>
                <td>
                    {school.province[0].name}
                </td>
            </tr>
        );
    }
}

export default SchooItem;