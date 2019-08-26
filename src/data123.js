import React, { Component } from 'react';

class Datass extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="mb-3">Manage User Access</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col-md-12 mb-3">
                                        <button type="button" class="btn btn-outline-secondary">Select Users</button>
                                        <button type="button" class="btn btn-outline-secondary">Manage Access</button>
                                        <button type="button" class="btn btn-outline-secondary">Review</button>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <button type="button" class="btn btn-outline-secondary" style={{padding: '0.375rem 2.75rem'}}>Add Access</button>
                                        <button type="button" class="btn btn-outline-secondary" style={{padding: '0.375rem 1.75rem'}}>Remove Access</button>
                                    </div>
                                    <div className="col-md-12 ml-1">
                                    <input type="search" class="form-control" placeholder="Search Access" name="text1" />
                                   </div>
                                </div>
                           <div className="col-md-3">
                           <div className="row">
                           <div className="col-md-7">
                           <div class="card card-body">
                           Messages
                           </div>
                           </div>
                          
                           <div className="col-md-5">
                           <div class="card card-body">
                           Users
                           </div>
                           </div>
                         
                           </div>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Datass;