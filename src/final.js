import React, { Component } from 'react';
import Header from './components/header';
import Axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Final extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],

        };
    }
    componentDidMount() {
        const url = "https://api.myjson.com/bins/ivhmy/"
        Axios(url, {
            method: "GET"
        }).then(response => {
            console.log(response)
            this.setState({ data: response.data })
        })
    }












    render() {
        const columns = 
        [
            {
                Header: "id",
                accessor: "id"
            },
            {
                Header: "firstname",
                accessor: "firstname"
            },
            {
                Header: "lastname",
                accessor: "lastname"
            },
            {
                Header: "email",
                accessor: "email"
            },
            {
                Header: "Gender",
                accessor: "gender"
            },
            {
                Header: "edit",
                accessor: "<button>'edit'</button>"
            }
            
        ]
        return (
            <div >
                <Header name='final' />
                 <ReactTable 
                 columns = {columns}
                 data = {this.state.posts}
                 />
            </div>
        );
    }
}

export default Final;