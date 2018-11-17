import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SchooItem extends Component {
    render() {
        let { school } = this.props;
        return (
            <tr>
                <td>
                    {school.code}
                </td>
                <td>
                    {school.name}
                </td>
                <td>
                    {school.province[0].name}
                </td>
                <td>
                    <Link to={'/school/detail?id=' + school._id} >Chi tiết</Link>
                </td>
            </tr>
        );
    }
}

export default SchooItem;