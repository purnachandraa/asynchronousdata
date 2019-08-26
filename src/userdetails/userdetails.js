import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';

class Userdetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: [],
        }
    }
    componentDidMount() {
        console.log(this.props);
        axios.get('https://api.myjson.com/bins/ivhmy/')
            .then(response => {
                console.log(response);
                console.log(this.props);
                const filterData = response.data.filter(value => {
                    return value.id == this.props.match.params.id
                })
                console.log(filterData);
                this.setState({ userData: filterData })
                //response.filter = this.props.match.param.id === response.id

            })
    }



    render() {
        // console.log(JSON.parse(this.state.userData));
        const data = this.state.userData[0]
        return (
            <div>
                <Header />
                {this.state.userData.length ? <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">Use Details</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{data.id}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{data.first_name}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{data.last_name}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{data.email}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{data.gender}</h6>

                    </div>
                </div> : null}
            </div>
        );
    }
}

export default Userdetails;