import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
             <nav className="nav-extended deep-purple accent-2">
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Unikirja</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Historia</Link></li>
                </ul>
                </div>
                <div className="nav-content"><br/>
                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                <Link to="/dreams/add"> <i className="fa fa-plus"></i></Link>
                </a>
                </div>
            </nav>

        )
    }
}

export default Navbar;