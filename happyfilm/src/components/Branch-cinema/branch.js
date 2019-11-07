import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import BranchLogo from './BranchLogo';
import 'react-tabs/style/react-tabs.css';

class Branch extends Component {
    renderRap = () => {
        return this.props.ListRaps.map((item, index) => {
            return (
                <BranchLogo key={index} branch={item} />
            )
        })
    }
    render() {
        return (
            <div className='container'>
            {this.renderRap()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actCumRapHT: () => {
            dispatch(action.layThongTinrap())
        }
    }
}
const mapStateToProps = state => {
    return {
        ListRaps: state.ThongTinrapReducer.ListRaps
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Branch);
