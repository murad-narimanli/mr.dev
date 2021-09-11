import React, {useEffect, useState} from 'react';
import history from "../../const/history";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
function Arrows(props) {
    const links = ['', 'about', 'resume', 'portfolio', 'blog' , 'contact'];
    const [number, setNumber] = useState(0)
    const location = useLocation()


    const gotoNext = () =>{
        if(number === links.length-1){
            setNumber(0)
        }
        else {
            setNumber( number+1)
        }
        props.setTransitionProp({
            // sagdan sola
            from: { opacity: 0, position: "absolute", width: "100%", transform: "translate3d(100vw, 0, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            leave: { opacity: 0, transform: "translate3d(-100vw, 0, 0)" }
        })
        history.push(`/${links[number]}`)
    }

    const gotoPrev = () =>{
        if(number === 0){
            setNumber( links.length-1)
        }
        else {
            setNumber( number-1)
        }
        props.setTransitionProp({
            // sagdan sola
            from: { opacity: 0, position: "absolute", width: "100%", transform: "translate3d(-100vw, 0, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            leave: { opacity: 0, transform: "translate3d(100vw, 0, 0)" }
        })
        history.push(`/${links[number]}`)
        // setRightData(pagedatas[number])
    }



    return (
        <>
            {links.indexOf(location.pathname.substring(1)) !== -1 &&
                <div className="lmpixels-arrows-nav">
                    <div onClick={()=>{gotoPrev()}} className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left"></i></div>
                    <div onClick={()=>{gotoNext()}} className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right"></i></div>
                </div>
            }
        </>
    );
}



export default Arrows;
