import React, { Component, Fragment } from 'react';
import { stringify } from 'querystring';

class OptionNgay extends Component {
    
    //lấy obj ngày giờ chiếu
    renderOption = (calendar) => {
        let newArr = new Set()
        for (let item of calendar) {
            newArr.add(new Date(item.ngayChieuGioChieu).toLocaleDateString())   
        }
        return newArr
    }
    render() {
        let { isDate } = this.props;
        const calendar = isDate.lichChieuPhim;
        const OptionCalendar = Array.from(this.renderOption(calendar))
        console.log(OptionCalendar)
        return (
            <Fragment>
            {this.renderOption(calendar)}
            </Fragment>

        );
    }
}



export default OptionNgay;