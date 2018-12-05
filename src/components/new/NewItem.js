import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewItem extends Component {
    render() {

        let { myNew } = this.props;

        return (
            <div className="col-xs-12 col-lg-6 mb-20">
                <div>
                    <div className="media" style={{ width: '40%' }}>
                        <div className="media-left">
                            <Link to={'/new/detail?id=' + myNew.id} >
                                <img className="media-object" src={myNew.image} alt="onirem" />
                            </Link>
                        </div>
                        <div className="media-body">
                            <Link to={'/new/detail?id=' + myNew.id} >
                                <h4 className="media-heading">{myNew.title}</h4>
                            </Link>
                            {myNew.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewItem;