import React from 'react';
import {name} from "../../const/name";

function BlogLayout({img , title , date , children}) {
    return (
        <div className="content-area animated fadeIn" id="primary">
            <div className="page-content site-content" id="content" role="main">
                <article className="post">
                    {img &&
                    <div className="post-thumbnail">
                        <img style={{height:'300px'}} className={'w-100'} alt="image" src={img} />
                    </div>
                    }
                    <div className="post-content ">
                        <div className="entry-meta entry-meta-bottom">
                            <div className="date-author">
                                <span className="entry-date">
                                    <a href="#" rel="bookmark">
                                        <i className="far fa-clock"></i>
                                        <span className="entry-date"> {date}</span>
                                    </a>
                                </span>
                                <span className="author vcard">
                                    <a className="url fn n" href="#" rel="author">
                                          <i className="fas fa-user"></i> {name}
                                    </a>
                                </span>
                            </div>
                        </div>
                        <header className="entry-header">
                            <h2 className="entry-title">{title}</h2></header>
                        <div className="entry-content">
                            {children}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}


export default BlogLayout;
