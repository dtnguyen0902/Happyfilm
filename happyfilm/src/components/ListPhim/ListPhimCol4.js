import React, { Component } from 'react';
import PhimItems from './PhimItems';
import MoreInfoFilm from './MoreInfoFilm';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";

class ListPhimCol4 extends Component {
    renderSource = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            if (index < 2) {
                return (
                    <PhimItems key={index} movie={item} />
                )
            }
        })
    }
    componentDidMount() {
        this.props.layDuLieu();
    }
    render() {
        return (
            <div className="container">
                {this.renderSource()}
                <MoreInfoFilm className="d-flex justify-content-end" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layDuLieu: () => {
            dispatch(action.actOnListMovieAPI())
        }
    }
}
const mapStateToProps = state => {
    return {
        ListFilms: state.movieReducer.ListFilms
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPhimCol4);