import React from 'react';
import photobg from "../../images/photo.png";
import {
    Link,
} from 'react-router-dom'
import {name} from '../../const/name';


function Header(props) {
    return (
        <div className="mobile-header mobile-visible">
            <div className="mobile-logo-container">
                <div className="mobile-header-image"><Link to="/"> <img alt="image" src={photobg} /> </Link></div>
                <div className="mobile-site-title"><Link to="/">{name}</Link></div>
            </div>
            <a className="menu-toggle mobile-visible"> <i className="fa fa-bars"></i> </a>
        </div>

    );
}


export default Header;
