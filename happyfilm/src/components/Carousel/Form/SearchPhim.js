import React, { Component } from 'react';
import FormSearch from './FormSearch';
import FormSearchRap from './FormSearchRap';
import _myForm from '../../../SASS/Components/Carousel/_myForm.scss';
import FormSearchNgay from './FormSearchNgay';

class SearchPhim extends Component {
    render() {
        return (
            <div className='myForm'>
                <ul className="nav nav-pills mb-3 myBranchForm" id="pills-tab" role="tablist">
                    <li className="nav-item myBranch">
                        <a className="nav-link active myBranchForm" id="pills-home-tab" data-toggle="pill" href="#theoPhim" role="tab" aria-controls="pills-home" aria-selected="true">Theo phim</a>
                    </li>
                    <li className="nav-item myBranch">
                        <a className="nav-link myBranchForm" id="pills-profile-tab" data-toggle="pill" href="#theoNgay" role="tab" aria-controls="pills-profile" aria-selected="false">Theo ngày</a>
                    </li>
                    <li className="nav-item myBranch">
                        <a className="nav-link myBranchForm" id="pills-contact-tab" data-toggle="pill" href="#theoRap" role="tab" aria-controls="pills-contact" aria-selected="false">Theo rạp</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="theoPhim" role="tabpanel" aria-labelledby="pills-home-tab">
                        <FormSearch />
                    </div>
                    <div className="tab-pane fade" id="theoNgay" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <FormSearchNgay />
                    </div>
                    <div className="tab-pane fade" id="theoRap" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <FormSearchRap />
                    </div>
                </div>
                <button className='myButton myButton__muaVe btn btn-primary'>Mua Vé Ngay</button>
            </div>
        );
    }
}

export default SearchPhim;