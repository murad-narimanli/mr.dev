import React from 'react';

function Download({url , name}) {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12">
                <div className="col-inner ts-30"><a className="btn btn-primary" download href={url} target="_blank">Download {name}</a></div>
            </div>
        </div>
    );
}

export default Download;
