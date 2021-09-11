import React from 'react';

function Skill({name , degree}) {
    return (
        <>
            <div className="clearfix">
                <h4>{name}</h4>
                <div className="skill-value">{degree}</div>
            </div>
            <div style={{overflow: 'hidden'}} className="skill-container ">
                <div className="skill-percentage animated slideInLeft" style={{width:`${degree}`}}></div>
            </div>
        </>
    );
}


export default Skill;
