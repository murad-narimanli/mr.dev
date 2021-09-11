import React from 'react';

function PortfolioItem({src , url , name , category}) {
    return (
        <figure className={'animated zoomIn'}>
            <div className="portfolio-item-img">
                <img alt="Media Project 1" src={src} title=""/>
                <a className="ajax-page-load" target={'_blank'} href={url}></a>
            </div>
            <i className="far fa-file-alt"></i>
            <h4 className="name">{name}</h4>
            <span className="category">{category}</span>
        </figure>
    );
}


export default PortfolioItem;
