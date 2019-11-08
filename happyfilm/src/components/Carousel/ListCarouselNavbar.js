import React, { Component } from 'react';
import PhimItemsNavbar from '../ListPhim/PhimItemNavbar';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";

class ListCarouselNavbar extends Component {
    renderSource = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            if (index < 4) {
                return (
                    <PhimItemsNavbar key={index} movie={item} />
                )
            }
        })
    }
    componentDidMount() {
        this.props.layDuLieu();
    }
    render() {
        return (
            <div className="container myCarouselNavbar">
            <div className='row'>
                {this.renderSource()}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCarouselNavbar);