import React, { Component, Fragment } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import FormCumRap from './FormCumRap';

class FormFilm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            optionFilm: ''
        })
    }
    selectMovie() {
        this.setState({
            optionFilm: this.refs.movieName.value
        })
    }
    renderForm = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            return <option key={index} value={item.maPhim} isSelect={item}>{item.tenPhim}</option>
        })
    }
    render() {
        return (
            <Fragment>
                <div className="form-group">
                    <select ref="movieName" onChange={(e) => { this.selectMovie() }} className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn phim</option>
                        <Fragment>
                            {this.renderForm()}
                        </Fragment>
                    </select>
                </div>
                <Fragment>
                    <FormCumRap isSelect={this.state.optionFilm} />
                </Fragment>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ListFilms: state.movieReducer.ListFilms
    }
}

export default connect(mapStateToProps, null)(FormFilm);