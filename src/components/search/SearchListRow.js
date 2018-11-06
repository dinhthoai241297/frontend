import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SearchListRow = ({course}) => {
  return (
    <tr>
      <td><a href="/detail">{search.code}</a></td>
      <td>{search.sname}</td>
      <td>{search.city}</td>
      <td><a href="/detail">{search.des}</a></td>
    </tr>
  );
};

SearchListRow.propTypes = {
  search: PropTypes.object.isRequired
};

export default SearchListRow;
