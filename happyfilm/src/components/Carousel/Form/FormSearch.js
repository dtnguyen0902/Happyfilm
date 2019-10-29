import React, { Component } from 'react';
import FormFilm from './FormFilm';
import FormRap from './FormRap';
import FormNgay from './FormNgay';
import FormSuat from './FormSuat';

class FormSearch extends Component {
    render() {
        return (
            <div>
                <FormFilm />
                <FormRap />
                <FormNgay />
                <FormSuat />
            </div>
        );
    }
}

export default FormSearch;