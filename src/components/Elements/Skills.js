import React from 'react';

function Skills(props) {
    return (
        <>
            <div className="block-title animated fadeIn ts-10"><h3>{props.title}<span></span></h3></div>
            <div className="skills-info skills-second-style">
                {props.children}
            </div>
        </>
    );
}


export default Skills;
