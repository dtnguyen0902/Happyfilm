import React, { Component } from 'react';
import Listfilm from "./list-film"
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Location extends Component {
  componentDidMount() {
    let id = this.props;
    console.log(id)
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    detailCinema: id => {
        dispatch(action.actListRapHeThongAPI(id));
    }
}
}
const mapStateToProps = state => {
  return {
    Cinema: state.ThongTinrapReducer.Cinema
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Location)
