import React, { Component } from 'react';
import CommentFilm from './CommentFilm';
import DienAnhDetail from './DienAnhDetail';

class DienAnh extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className='col-6'>
                        <CommentFilm />
                    </div>
                    <div className='col-6'>
                        <DienAnhDetail />
                    </div>
                </div>
            </div>
        );
    }
}

export default DienAnh;