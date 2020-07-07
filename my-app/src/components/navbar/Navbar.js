import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                
                <nav className="site-header sticky-top py-1">
                    <h3 className="name">Daniel Himchan Yun</h3>
                    <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <a className="py-2 d-none d-md-inline-block" href="#">Home</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">About Me</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Projects</a>
                        <a className="py-2 d-none d-md-inline-block" href="#">Contact</a>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;