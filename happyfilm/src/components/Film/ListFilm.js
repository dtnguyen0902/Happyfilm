import React, { Component } from 'react';
import ItemFilm from './ItemFilm';

class ListFilm extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container mx-5 mt-5">
                    <div className="row ">
                        <div className="col-md-3 col lg-3 col sm  ">
                            <ItemFilm />
                        </div>
                        <div className="col-md-3 col lg-3 col sm ">
                            <ItemFilm />
                        </div>
                        <div className="col-md-3 col lg-3 col sm ">
                            <ItemFilm />
                        </div>
                        <div className="col-md-3 col lg-3 col sm ">
                            <ItemFilm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListFilm;