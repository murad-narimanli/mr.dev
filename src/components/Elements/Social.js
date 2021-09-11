import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../redux/actions";

function Social(props) {
    const dispatch = useDispatch()
    const about = useSelector(s => s.about)
    useEffect(()=>{
        Object.keys(about).length === 0 && dispatch(getAbout())
    },[])

    return (
        <div className="social-links">
            <a href={about?.github} target="_blank">
                <i className="fab fa-github"></i>
            </a>
            <a href={about?.linkedin} target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href={about?.facebook} target="_blank">
                <i className="fab fa-facebook"></i>
            </a>
        </div>
    );
}


export default Social;
