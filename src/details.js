import React, { Component } from 'react';
import Header from './components/header';
import 'mdbreact/dist/css/mdb.css';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";

class Details extends Component {
 constructor(){
     super();
         this.state ={
             data :[],
           show : false,
         }
     
 }
handlesubmit = (event)=>{
        event.preventDefault();
        console.log (event)
        console.log(this.state);
    }
    handleChange = (event)=>{
     console.log(event.target.value);
     this.setState({[event.target.name] : event.target.value});
    }




    render() {
        return (
                <div className="App">
                    <Header name="details" />
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                            <h3 className="my-3">
                                                <MDBIcon icon="lock" /> Login:
                </h3>
                                        </MDBCardHeader>
                                        <form>
                                            <div className="grey-text">
                                                <MDBInput
                                                    label="Type your email"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    label="Type your password"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    validate
                                                />
                                            </div>

                                            <div className="text-center mt-4">
                                                <MDBBtn
                                                    color="light-blue"
                                                    className="mb-3"
                                                    type="submit"
                                                    onclick = {'this.handlesubmit'}
                                                >
                                                    Login
                </MDBBtn>
                                            </div>
                                        </form>
                                        <MDBModalFooter>
                                            <div className="font-weight-light">
                                                <p>Not a member? Sign Up</p>
                                                <p>Forgot Password?</p>
                                            </div>
                                        </MDBModalFooter>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    );
                  };
                  
                 
                  
                  
            </div>

            );
        }
    }

    export default Details;