import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import PhimItemSearch from './PhimItemSearch';

class ListPhimSearch extends Component {

    renderSource = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            return (
                <PhimItemSearch key={index} movie={item} />
            )
        })
    }
    componentDidMount() {
        this.props.layDuLieu();
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="myCinema container-fluid">
                <div className='row'>
                    <div className='col-3 px-0'>
                        {this.renderSource()}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPhimSearch);