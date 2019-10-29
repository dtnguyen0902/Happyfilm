import React, { Component } from 'react';
import OptionFilm from '../Form/OptionFilm';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";

class FormFilm extends Component {
    renderForm = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            return <OptionFilm key={index} optionFilm={item}/> 
        })
    }
    render() {
        return (
            <div className="form-group">
                <select className="custom-select" name="" id="selectenPhim">
                <option selected='Chọn phim'>Chọn phim</option>
                    {this.renderForm()}
                </select>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDuLieu: ListFilms => {
            dispatch(action.layDuLieu(ListFilms))
        }
    }
}
const mapStateToProps = state => {
    return {
        ListFilms: state.movieReducer.ListFilms
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilm);