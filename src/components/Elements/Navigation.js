import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

function Navigation(props) {
    const location = useLocation()
    const activeClassName = (pathname) => {
        return  location.pathname === pathname ? 'active' : ''
    }
    const links = [
        {
            name:'Home',
            url:'/'
        },
        {
            name:'Home',
            url:'/'
        },
    ]
    return (
        <div className="site-nav">
            <ul className="site-main-menu" id="nav">
                <li className={activeClassName('/')}><NavLink exact activeClassName={'active'} to={'/'} className="pt-trigger" >Home</NavLink></li>
                <li className={activeClassName('/about')}><NavLink exact activeClassName={'active'} to={'/about'} className="pt-trigger" >About Me</NavLink></li>
                <li className={activeClassName('/resume')}><NavLink exact activeClassName={'active'} to={'/resume'} className="pt-trigger" >Resume</NavLink></li>
                <li className={activeClassName('/portfolio')}><NavLink exact activeClassName={'active'} to={'/portfolio'} className="pt-trigger" >Portfolio</NavLink></li>
                <li className={activeClassName('/blog')}><NavLink exact activeClassName={'active'} to={'/blog'} className="pt-trigger" >Blog</NavLink></li>
                <li className={activeClassName('/contact')}><NavLink exact activeClassName={'active'} to={'/contact'} className="pt-trigger" >Contact</NavLink></li>
            </ul>
        </div>
    );
}


export default Navigation;
