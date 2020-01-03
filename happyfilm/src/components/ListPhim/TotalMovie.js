import React, { Component } from 'react';
import PhimItems from './PhimItems';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";

class TotalMovie extends Component {
    renderSource = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            return (
                <PhimItems key={index} movie={item} />
            )
        })
    }
    componentDidMount() {
        setTimeout(function(){
            window.scrollTo(0,0);
        },3)
        this.props.layDuLieu();
    }
    render() {
        return (
            <div className='container'>
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
export default connect(mapStateToProps, mapDispatchToProps)(TotalMovie);