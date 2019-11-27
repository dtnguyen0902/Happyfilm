import React, { Component } from 'react';
import FormFilm from './FormFilm';
import FormRap from './FormRap';
import FormNgay from './FormNgay';
import FormSuat from './FormSuat';

class FormSearchNgay extends Component {
    render() {
        return (
            <div>
                <FormNgay />
                <FormFilm />
                <FormRap />
   
            </div>
        );
    }
}

export default FormSearchNgay;