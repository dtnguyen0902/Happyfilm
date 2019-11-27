import React, { Component } from 'react';
import ListPhimCol4 from '../ListPhim/ListPhimCol4';

class ThoaThuan extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <p>Chào mừng bạn đã đến với website của Happy Film . Happy Film cung cấp các sản phầm và dịch vụ dựa trên những điều kiện dưới đây.</p>
                        <ol>
                            <li> BẢN QUYỀN</li>
                            <p>Tất cả nội dung được hiển thị trên website và các sản phẩm liên quan Happy Film dưới bất kỳ hình thức nào như ký tự, hình ảnh, logo, video clip… là tài sản của Happy Film hoặc các đối tác cung cấp nội dung của Happy Film, được bảo vệ bởi luật pháp Việt Nam và các quy định bản quyền quốc tế. Sự biên soạn và hiển thị các nội dung này thông qua Happy Film là tài sản riêng của Happy Film. </p>
                        </ol>
                    </div>
                    <div className='col-4'>
                        <ListPhimCol4 />
                    </div>
                </div>
            </div>
        );
    }
}

export default ThoaThuan;