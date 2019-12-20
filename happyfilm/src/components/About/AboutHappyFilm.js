import React, { Component } from 'react';
import DetailAbout from './DetailAbout';
class AboutHappyFilm extends Component {
    render() {
        return (
            <div className='container' id="aboutPage">
                <ul className="nav nav-pills container myPromotion" id="pills-tab" role="tablist">
                    <li className="nav-item myPromotion">
                        <a className="nav-link active myPromotion" id="pills-home-tab" data-toggle="pill" role="tab">HAPPY FILM</a>
                    </li>
                </ul>
                <DetailAbout />
            </div>
        );
    }
}

export default AboutHappyFilm;