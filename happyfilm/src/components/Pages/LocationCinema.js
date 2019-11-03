import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ListCarousel from '../Carousel/ListCarousel';
import Branch from '../Branch-cinema/branch';



class LocationCinema extends Component {
    componentDidMount() {
        console.log(this.props.history)
        var id = this.props.match.params.id;
        this.props.listCinema(id);
    }
    renderCinema = () => {
        return this.props.ListCinemas.map((item, index) => {
            return (
                <NavLink to={`/${item.maCumRap}`}>
                    <tr key={index}>
                        <div className="card bg-dark" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.tenCumRap}</h5>
                                <p className="card-text">{item.diaChi}</p>
                            </div>
                        </div>
                    </tr>
                </NavLink>
            )
        })
    }

    render() {
        return (     
            <div>
                <div className='row'>
                    <tr>
                        {this.renderCinema()}
                    </tr>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        listCinema: id => {
            dispatch(action.actListRapHeThongAPI(id));
        }
    }
}

const mapStateToProps = state => {
    return {
        ListCinemas: state.ThongTinrapReducer.ListCinemas,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationCinema);