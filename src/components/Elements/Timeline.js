import React from 'react';

function Timeline(props) {
    return (
        <>
            <div className="block-title animated fadeIn"><h3>{props.title}<span></span></h3></div>
            <div className="timeline timeline-second-style clearfix">
                {props.children}
            </div>
        </>
    );
}


export default Timeline;
