import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import Loader from "../Elements/Loader";
import Arrows from '../Elements/Arrows'
function Layout(props) {
    const [load , setLoad] = useState(true)
    useEffect(()=> {
       loader()
    })
    const loader = () => {
        setTimeout(()=>{
            setLoad(false);
        } ,4000)
    }
    return (
        <>
            <Loader absolute={false} show={load}/>
            <div className="page position-relative" id="page">
                <Sidebar/>
                <Header/>
                <div className="site-main" id="main">
                    {/*<Loader absolute={true} show={load}/>*/}
                    <div className="pt-wrapper">
                        <div className="subpages animated fadeIn">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Layout;
