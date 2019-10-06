import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <ul className="nav nav-pills mx-auto" id="pills-tab" role="tablist">


                        <li className="nav-item">
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Điện Ảnh</a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
                        </li>



                    </ul>

                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card" >
                                        <img className="card-img-top" src="https://s3img.vcdn.vn/123phim/2019/09/d7c680ba6b37a6ddf304a44d5d94af5a.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</h3>
                                            <p className="card-text">Liệu kì này Ed Sheeran có nhiều đất diễn hay chỉ là vai cameo nho nhỏ?</p>
                                        </div>
                                    </div>


                                 
                                </div>
                                <div className="col-sm-6">
                                <div className="card" >
                                        <img className="card-img-top" src="https://s3img.vcdn.vn/123phim/2019/09/vuot-ai-kiem-quyet-that-son-tam-linh-chinh-thuc-tan-cong-phong-ve-viet-15688605530572.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</h3>
                                            <p className="card-text">Liệu kì này Ed Sheeran có nhiều đất diễn hay chỉ là vai cameo nho nhỏ?</p>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                <div className="card" >
                                        <img className="card-img-top" src="https://s3img.vcdn.vn/123phim/2019/10/joker-bi-kich-u-am-va-dien-loan-15701784914596.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</h3>
                                            <p className="card-text">Liệu kì này Ed Sheeran có nhiều đất diễn hay chỉ là vai cameo nho nhỏ?</p>
                                        </div>
                                    
                                </div>
                                    

                                </div>
                                <div className="col-sm-6">
                                <div className="card" >
                                        <img className="card-img-top"  src="https://s3img.vcdn.vn/123phim/2019/09/it-chapter-two-cai-ket-ghe-ron-va-am-anh-cua-ten-he-ma-quai-pennywise-15685341304865.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h3 className="card-title">Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt trong phim ca nhạc Yesterday</h3>
                                            <p className="card-text">Liệu kì này Ed Sheeran có nhiều đất diễn hay chỉ là vai cameo nho nhỏ?</p>
                                        </div>
                                    
                                </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>


            </div>
            </div>

        );
    }
}

export default News;