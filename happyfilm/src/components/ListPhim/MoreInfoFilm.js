import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class MoreInfoFilm extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end">
                <button  type="button" class="btn btn-outline-warning">Xem Thêm</button>
            </div>
        );
    }
}

export default MoreInfoFilm;