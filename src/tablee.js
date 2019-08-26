import React, { Component } from 'react';
import Header from './components/header';
import axios from 'axios';

class Tablee extends Component {
    constructor() {
        super();
        this.state = {
            data: [],


        };
    }


    componentDidMount() {
        axios.get('https://api.myjson.com/bins/ivhmy/')
            .then(response => {
               
                this.setState({data : response.data})
            })

    }
    handleclick=(value)=>()=>{
       
        // localStorage.setItem('Userdetails',JSON.stringify(value))
        this.props.history.push(`/Userdetails/${value.id}`)

    }



    render() {
        return (
            <div>
                <Header name="tablee" />
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                        <th>ID</th>
                            <th>FIRSTNAME</th>
                            <th>lastname</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>share</th>
                           

                        </tr>
                    </thead>

                    <tbody>

                        {this.state.data.map((value, i) => {
                            return (

                                <tr key = {i}>
                                    <td>{value.id}</td>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.gender}</td>

                                    <td><button onClick = {this.handleclick(value)}>click</button></td>
                                </tr>

                            )


                        }


                        )}

                    </tbody>
                </table>



            </div>
        );
    }
}

export default Tablee;