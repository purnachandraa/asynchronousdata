import React, { Component } from 'react';
import './navdesign.css'
import { Link } from 'react-router-dom';
class Navdesign extends Component {
    render() {
        return (
            <div>
                <div className = "container-fluid fdone">
                <div className = "row pcr">
                <a href ="link" >watson</a>
                 <Link>About</Link>
                 <Link>Project</Link>
                 <Link> Comercial</Link>
                 <Link>Domestic</Link>
                 <Link>Contact</Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Navdesign;