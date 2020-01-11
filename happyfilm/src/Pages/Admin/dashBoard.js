import React, { Component } from 'react';

class dashBoard extends Component {
 
    render() {
      
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="img-fluid" src="" alt="user.png">

                        </img>
                        </div> 
                    <div className="col-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ho Ten</td>
                                    <td>Tai Khoan</td>
                                    <td>So Dien Thoai</td>
                                    <td>Mat Khau</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>    
                </div>
            </div>
        );
    }
}

export default dashBoard;