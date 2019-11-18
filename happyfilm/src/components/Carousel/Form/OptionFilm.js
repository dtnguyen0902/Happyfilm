import React, { Component } from 'react';

class OptionFilm extends Component {
    
    render() {
        let { optionFilm } = this.props;
        
        return (
            <option value={optionFilm.maPhim} name="optionFilm">{optionFilm.tenPhim}</option>
        );
    }
}

export default OptionFilm;