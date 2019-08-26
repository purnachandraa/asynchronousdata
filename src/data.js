import React, { Component } from 'react';
import Header from './components/header';
import axios from 'axios';
import Popup from 'reactjs-popup';

import { Modal, Button ,Spinner} from 'react-bootstrap'


export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            show: false,
            isLoading : true ,
            firstname :'',
            lastname:'',
            email :'',
            gender :'',
            selectedValue:null

        };
    }
    handleClose = () => {
        this.setState({ show: false });
    }

    handleEdit = (value) =>() => {
        console.log(value);
        this.setState({selectedValue: value});
        this.setState({
            firstname: value.first_name,
            lastname:value.last_name,
            email:value.email,
            gender:value.gender
        })
        this.setState({ show: true });
    }
    handlesubmit = (event)=>{
        event.preventDefault();

     // for editing data
     const changedData = {
        first_name: this.state.firstname,
        last_name:this.state.lastname,
        email:this.state.email,
        gender:this.state.gender,
       }
    this.setState({selectedValue: { ...this.state.selectedValue,...changedData}}, ()=>{ //for merging two objects
        const apiData = this.state.data.map(value=>{
            if(value.id === this.state.selectedValue.id){
                return this.state.selectedValue;
            } else{
                return value;
            }
        })
       this.setState({data: apiData, show:false}); //update data and hide modal popup
    })

    // for add new record
        
}
    handleChange = (event)=>{
     console.log(event.target.value);
     this.setState({[event.target.name] : event.target.value});
    }
   

    componentDidMount() {
        console.log('didmount')
        
        axios.get('https://api.myjson.com/bins/ivhmy/')
            .then(response => {
                console.log(response)
                this.setState({ data: response.data ,isLoading : false})
            })
            .catch(err=>{
                this.setState({isLoading : false})
                console.log(err)
            })
    }


    render() {
        console.log('render');
       
        return (
            <div>
                <Header name="data" />
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>FIRSTNAME</th>
                            <th>lastname</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                  



                        {this.state.data.length >0 ?this.state.data.map((value,i) => {
                            return (
                                
                               
                                <tr key={i}>
                                    <td >{value.id}</td>
                                    <td >{value.gender === 'Male' ? <i className="fa fa-male"></i> : <i className="fa fa-female"></i>}
                                     <span className={value.gender === "Male" ? `active1` : `active2`}>
                                     {value.first_name}
                                     </span>
                                     </td>
                                    <td>{value.last_name}</td>
                                    <td >{value.email[0].toUpperCase() + value.email.substring(1)}</td>
                                    <td className={value.gender === 'Male' ? `active3` : `active4`} >{value.gender}</td>
                                    <td><button className="btn btn-info" ><i className="fa fa-edit" onClick={this.handleEdit(value)}></i></button>
                                    </td>
                                    <td><button className="btn btn-danger"><i className="fa fa-trash "></i></button></td>
                                </tr>
                            )
                        }) : this.state.isLoading ? <Spinner animation="border" />  : <div>no records found</div> 
                    }
                       
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>TABLE DATA</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputfirstname">firstname</label>
                                        <input type="text" 
                                        class="form-control" 
                                        id="exampleInputfirstname" 
                                        placeholder="firstname"
                                        value = {this.state.firstname}
                                        onChange = {this.handleChange}
                                        name ="firstname"
                                         />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputlastname">lastname</label>
                                        <input type="text" 
                                        class="form-control" 
                                        id="exampleInputlastname" 
                                        placeholder="lastname" 
                                        value = { this.state.lastname}
                                        onChange = {this.handleChange} 
                                        name ="lastname"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email </label>
                                        <input type="email" 
                                        class="form-control" 
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email" 
                                        value ={this.state.email}
                                        onChange = {this.handleChange}
                                        name ="email"
                                         />
                                        
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputgender">gender</label>
                                        <input type="text" 
                                        class="form-control" id="exampleInputgender"
                                         placeholder="gender" 
                                         value = {this.state.gender}
                                         onChange = {this.handleChange}
                                         name ="gender"
                                         />
                                    </div>


                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.handlesubmit}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </tbody>
                </table>
            </div>
        );
    
    }
}

