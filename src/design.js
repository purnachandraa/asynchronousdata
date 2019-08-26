import React, { Component } from 'react';
import Header from './components/header';


class Design extends Component {
    render() {
        return (
            <div>
                <Header class= "design" />
                <div class = "container">
                <div class = "row">
                <li>About</li>
                <li>process</li>
                <li>commercial</li>
                <li>dometic</li>
                <li>contact</li>

                </div>
                </div>
                
            </div>
        );
    }
}

export default Design;