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
                    {school.province.name}
                </td>
                <td>
                    <Link to={'/school/detail/?id=' + school.id} >Chi tiết</Link>
                </td>
            </tr>
        );
    }
}

export default SchooItem;