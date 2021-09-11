import React from 'react';
import PropTypes from 'prop-types';

function Box({icon , text , number , gray}) {
    return (
        <div className="col-xs-12 col-sm-3">
            <div className="col-inner bs-30">
                <div className={`lm-info-block ${gray ? 'gray-bg' :''}`}>
                    {icon}
                    <h4>{text}</h4>
                    {number && <span className="lm-info-block-value">{number}</span>}
                    <span className="lm-info-block-text"></span></div>
            </div>
        </div>
    );
}

Box.propTypes = {};
Box.defaultProps = {};

export default Box;
