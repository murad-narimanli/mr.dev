import React from 'react';

function TImelineItem({from , to ,company ,position ,description}) {
    return (
        <div className="timeline-item animated zoomIn clearfix">
            <div className="left-part"><h5 className="item-period">{from} - {to}</h5>
            <span className="item-company">{company}</span></div>
            <div className="divider"></div>
            <div className="right-part">
                <h4 className="item-title">{position}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}


export default TImelineItem;
