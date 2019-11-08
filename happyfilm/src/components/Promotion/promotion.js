import React, { Component } from 'react';


class Promotion extends Component {
    render() {
        return (
            <div className="promotion mb-5">
                <div className="promotion container mt-5">
                <h3 className="text-center mt-2">PROMOTION</h3>
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm">
                            <img src="https://s3img.vcdn.vn/123phim/2019/05/69k-ve-bhd-star-dong-gia-moi-ngay-15586879990685.jpg" style={{width:"100%"}}  />
                        </div>
                       <div className="col-6 col-md-6 col-sm">
                           <img src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106171102.jpg" style={{width:"100%",height:"87%"}} />
                       </div>
                    </div>
                    
                </div>
            </div>

        );
    }
}
export default Promotion;