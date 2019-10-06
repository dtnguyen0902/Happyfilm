import React, { Component } from 'react';


class Promotion extends Component {
    render() {
        return (
            <section className="promotion">
                <div className="container">
                    <h1 className="text-center">Promotion</h1>
                    <div className="row">
                      
                        <div className="col-md-6 ">
                            <img width="100%" src="https://s3img.vcdn.vn/123phim/2019/07/39k-ve-cinestar-cuoi-tuan-cuc-da-15640599282426.png"/>
                            <h3>39k/vé Cine-Star Cuối tuần cực đã</h3>
                            <p>Tận Hưởng Bom Tấn cuối tuần với giá chỉ 39k</p>
                        </div>
                        <div className="col-md-6 ">
                            <img width="100%" src="https://s3img.vcdn.vn/123phim/2019/05/69k-ve-bhd-star-dong-gia-moi-ngay-15586880860497.jpg"/>
                            <h3>69k/vé BHD Star Đồng giá mỗi ngày</h3>
                            <p>Xem phim chill với giá gấp bội</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Promotion;