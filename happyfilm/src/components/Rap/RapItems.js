import React, { Component } from 'react';

class RapItems extends Component {
    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-4">
                        <div className="card-header">
                            Img
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">Thông tin</p>
                            <a href="#" className="btn btn-primary">Chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RapItems;