import React, { Component } from 'react';
import CommentFilm from './CommentFilm';
import DienAnhDetail from './DienAnhDetail';

class DienAnh extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className='col-6'>
                        <a href="#">BÌNH LUẬN PHIM</a>
                        <CommentFilm />
                        <CommentFilm />
                        <CommentFilm />
                        <CommentFilm />
                    </div>
                    <div className='col-6'>
                        <a href="#">BLOG ĐIỆN ẢNH</a>
                        <DienAnhDetail />
                        <DienAnhDetail />
                        <DienAnhDetail />
                        <DienAnhDetail />
                    </div>
                </div>
            </div>
        );
    }
}

export default DienAnh;