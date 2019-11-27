import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";

class LocationCinema extends Component {
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.match.params.id !== this.props.match.params.id) {
    //         this.props.listCinema(nextProps.match.params.id)
    //     }
    // }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    renderCinema = () => {
        return this.props.ListCinemas.map((item, index) => {
            return (
                <div>
                    <div className="card bg-dark" style={{ width: '18rem' }} key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{item.tenCumRap}</h5>
                            <p className="card-text">{item.diaChi}</p>
                        </div>
                    </div>
                </div>
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