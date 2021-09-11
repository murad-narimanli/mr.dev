import React from 'react';

function Loader(props) {
    return (
       <>
           {props.show &&
               <div className={`preloader ${props.absolute && 'position-relative'}`}>
                   <div className="preloader-animation">
                       <div className="preloader-spinner"></div>
                   </div>
               </div>
           }
       </>
    );
}

export default Loader;
