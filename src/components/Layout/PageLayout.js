import React from 'react';

function PageLayout({children , title  , description}) {
    return (
        <section className="pt-page pt-page-current" data-id="resume">
            <div className="section-inner custom-page-content">
                <div className="section-title-block second-style"><h2 className="section-title">{title}</h2> <h5
                    className="section-description">{description}</h5></div>
                    <div className="section-content">
                        {children}
                    </div>
            </div>
        </section>
    );
}


export default PageLayout;
