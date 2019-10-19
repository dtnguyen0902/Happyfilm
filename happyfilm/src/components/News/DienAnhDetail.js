import React, { Component } from 'react';

class DienAnhDetail extends Component {
    render() {
        return (
            <div className='my-2'>
                <div className='row'>
                    <div className='col-4'>
                        <img src="https://mdbootstrap.com/img/Photos/Others/img (27).jpg" style={{ width:160 }} />
                    </div>
                    <div className='col-8'>
                        <div className='row' style={{ height:80 }} >
                            <h6>Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</h6>
                            <span>Liệu kì này Ed Sheeran có nhiều đất diễn hay chỉ là vai cameo nho nhỏ?.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DienAnhDetail;