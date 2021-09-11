import React, {useEffect} from 'react';
import photobg from "../../images/photo.png";
import Navigation from "../Elements/Navigation";
import Social from "../Elements/Social";
import {name} from "../../const/const"
import {useSelector} from "react-redux";
function Sidebar(props) {
    let dt = new Date();
    let toggle = useSelector(s =>s.toggle)
    return (
        // mobile-menu-hide
        <header className={`header animate ${!toggle && 'mobile-menu-hide'}`} id="site_header">
            <div className="header-content clearfix">
                <div className="my-photo"><img alt="image" src={photobg} /></div>
                <div className="site-title-block">
                    <div className="site-title">{name}</div>
                </div>
                <Navigation/>
                <Social/>
                <div className="copyrights">© {dt.getFullYear()} All rights reserved.</div>
            </div>
        </header>
    );
}


export default Sidebar;
