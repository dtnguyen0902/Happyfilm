import React, { Component } from 'react';
import Listfilm from "./list-film"

export default class Location extends Component {
  render() {
    return (

<div>
  <ul className="nav nav-tabs" id="myTabLocation" role="tablist">
    <li className="nav-item">
      <a
        className="nav-link active"
        id="home-tab"
        data-toggle="tab"
        href="#hvt"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        Hoang Van Thu
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        id="profile-tab"
        data-toggle="tab"
        href="#svh"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        Su Van Hanh
      </a>
    </li>
  </ul>
  <div className="tab-content" id="myTabLocationContent">
    <div
      className="tab-pane fade show active"
      id="hvt"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <Listfilm/>
    </div>
    <div
      className="tab-pane fade"
      id="svh"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <Listfilm/>
    </div>
  </div>
</div>

        
     
        
    )
  }
}
