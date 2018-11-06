import React, { Component, Fragment, PropTypes } from 'react';
import { Link } from 'react-router-dom';

const SearchList = ({searchs}) => {
    return(
        <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="15%">Ký hiệu</th>
                                                <th scope="col">Tên trường</th>
                                                <th scope="col" width="25%">Thành phố</th>
                                                <th scope="col" width="15%">Thông tin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {searchs.map(search => 
                                            <SearchListRow key={search.code} search={search}/>
                                            )}
                                        </tbody>
        </table>
        )
}



export default SearchList;