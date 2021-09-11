import React from 'react';
import photobg from "../../images/photo.png";
import {
    Link,
} from 'react-router-dom'
import {name} from '../../const/const';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../../redux/actions";

function Header(props) {
    const dispatch = useDispatch()
    return (
        <div className="mobile-header mobile-visible">
            <div className="mobile-logo-container">
                <div className="mobile-header-image"><Link to="/"> <img alt="image" src={photobg} /> </Link></div>
                <div className="mobile-site-title"><Link to="/">{name}</Link></div>
            </div>
            <a onClick={()=>{dispatch(toggleMenu())}} className="menu-toggle mobile-visible"> <i className="fa fa-bars"></i> </a>
        </div>

    );
}


export default Header;
