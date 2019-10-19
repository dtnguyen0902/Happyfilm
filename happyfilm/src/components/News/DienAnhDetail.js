import React, { Component } from 'react';

class DienAnhDetail extends Component {
    render() {
        return (
            <div>
                <a href="#">BLOG ĐIỆN ẢNH</a>
                <div className="card mb-2">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (27).jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</h4>
                        <p className="card-text">Liệu kì này Ed Sheeran có nhiều đất diễn hay chỉ là vai cameo nho nhỏ?.</p>
                        <a className="btn btn-primary btn-md btn-rounded">Chi tiết</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DienAnhDetail;