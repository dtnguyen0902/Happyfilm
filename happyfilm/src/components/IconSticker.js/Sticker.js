import React, { Component } from 'react';

class Sticker extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className='col-2'>
                        <a href='#'><i class="fa fa-map-marker" aria-hidden="true"></i></a>
                    </div>
                    <div className='col-2'>
                        <a href='#'><i class="fa fa-ticket" aria-hidden="true"></i></a>
                    </div>
                    <div className='col-2'>
                        <a href='#'><i class="fa fa-gift" aria-hidden="true"></i></a>
                    </div>
                    <div className='col-2'>
                        <a href='#'><i class="fa fa-newspaper-o" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sticker;