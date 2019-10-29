import React, { Component } from 'react';
import Location from "./location"


export default class Branch extends Component {
    render() {
        return (
                <div className='container'>
                    <ul className="nav nav-tabs" id="myTabBranch" role="tablist">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#cgv"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                CGV
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#galaxy"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Galaxy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="contact-tab"
                                data-toggle="tab"
                                href="#bhd"
                                role="tab"
                                aria-controls="contact"
                                aria-selected="false"
                            >
                                BHD
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabBranchContent">
                        <div
                            className="tab-pane fade show active"
                            id="cgv"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <Location />
    </div>
                        <div
                            className="tab-pane fade"
                            id="galaxy"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <Location />
    </div>
                        <div
                            className="tab-pane fade"
                            id="bhd"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                        >
                           <Location />
    </div>
                    </div>
                </div>

            
        )
    }
}
