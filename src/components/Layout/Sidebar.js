import React, {useEffect} from 'react';
import photobg from "../../images/photo.png";
import Navigation from "../Elements/Navigation";
import Social from "../Elements/Social";
import {name} from "../../const/name"
function Sidebar(props) {
    let dt = new Date();
    return (
        <header className="header mobile-menu-hide" id="site_header">
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
