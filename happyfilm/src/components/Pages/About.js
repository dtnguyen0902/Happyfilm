import React, { Component } from 'react';
import ListPhimCol4 from '../ListPhim/ListPhimCol4';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <h2>VỀ CHÚNG TÔI</h2>
                        <p>Là hệ thống đặt vé xem phim hàng đầu Việt Nam, Happy Film đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và Việt Nam nhan chóng và sớm nhất.</p>
                    </div>
                    <div className='col-4'>
                        <ListPhimCol4 />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;