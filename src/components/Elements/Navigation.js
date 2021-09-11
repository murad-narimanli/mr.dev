import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {links} from "../../const/const";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../../redux/actions";

function Navigation(props) {
    const location = useLocation()
    const activeClassName = (pathname) => {
        return  location.pathname === pathname ? 'active' : ''
    }
    const dispatch = useDispatch()
    return (
        <div className="site-nav">
            <ul className="site-main-menu" id="nav">
                {links.map((l ,i)=>(
                    <li key={i} onClick={()=>{dispatch(toggleMenu())}} className={activeClassName(l.url)}><NavLink exact activeClassName={'active'} to={l.url} className="pt-trigger" >{l.name}</NavLink></li>
                ))}
            </ul>
        </div>
    );
}


export default Navigation;
