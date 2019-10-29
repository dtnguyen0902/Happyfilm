import React, { Component } from 'react';

class OptionRap extends Component {
    render() {
        let { optionRap } = this.props;
        return (
                <option>{optionRap.maHeThongRap}</option>
        );
    }
}

export default OptionRap;