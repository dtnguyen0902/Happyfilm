import React, { Component } from 'react';

class OptionNgay extends Component {
    render() {
        let { optionNgay } = this.props;
        return (
            <option>{optionNgay}</option>
        );
    }
}

export default OptionNgay;