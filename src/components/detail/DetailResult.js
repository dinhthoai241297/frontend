import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class DetailResult extends Component {
    render() {
    	

    	

        return (
            <Fragment>
            				<div className="col-md-8 video-info">
								<br />
								<h3>{ this.props.tenTruong }</h3>
								<h4>Nong Lam University - Ho Chi Minh City</h4>
								<div className="table-responsive">
									<table className="table-borderless">
										<tr>
											<td><strong>Ký hiệu: </strong></td>
											<td className="column2">{ this.props.kyHieu }</td>
										</tr>
										<tr>
											<td><strong>Loại hình: </strong></td>
											<td className="column2">{ this.props.loaiHinh }</td>
										</tr>
										<tr>
											<td><strong>Địa chỉ: </strong></td>
											<td className="column2">{ this.props.address }</td>
										</tr>
										<tr>
											<td><strong>Điện thoại: </strong></td>
											<td className="column2">{ this.props.phone }<br />{ this.props.phone }<br />{ this.props.phone }
											</td>
										</tr>
										<tr>
											<td><strong>Website:</strong></td>
											<td className="column2"><a href="{ this.props. }">{ this.props.website }</a></td>
										</tr>
									</table>
								</div>
							</div>
						



               							
            </Fragment>
        );
    }
}

export default DetailResult;