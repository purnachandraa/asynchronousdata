import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            detail: null,
        }
    }
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ data: response.data })
            })
            .catch(err => {
                this.setState({ err: true })
                console.log(err)
            })
    }
    handleclick = (value) => () => {
        console.log(value)
        this.setState({ details: value })
    }
    render() {
        return (
            <div>
                < Header name='table' />
                <div class='container-fluid' style={{ backgroundColor: "pink" }} >
                    <div class="row">
                        <div class="col-sm-6 first-container"  >
                            {this.state.data.length > 0 ? this.state.data.map((value, index) => {
                                return (
                                    <div class="card " onClick={this.handleclick(value)}>
                                        <div className="cardbody">
                                            <h1>{value.userId}</h1>
                                            <p>{value.id}</p>
                                            <p>{value.title}</p>
                                            <p>{value.body}</p>
                                        </div>
                                    </div>
                                )
                            }) : <div>no cards found</div>}

                        </div>
                        <div class="col-sm-6">
                            {this.state.details && <div class="card card-body cardd ">
                                <h5>details</h5>
                                <div>
                                    <h1>{this.state.details.userId}</h1>
                                    <h6>{this.state.details.id}</h6>
                                    <p>{this.state.details.title}</p>
                                    <p>{this.state.details.body}</p>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;