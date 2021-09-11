import React from 'react';
import {Link} from "react-router-dom";

function BlogItem({src ,date ,title ,id}) {
    return (
        <div  className="item post-2">
            <div className="blog-card">
                <div className="media-block">
                    <Link  to={`blog/${id}`}>
                        <img className="size-blog-masonry-image-two-c " src={src}/>
                    </Link>
                </div>
                <div className="post-info">
                    <div className="post-date">{date}</div>
                    <Link to={`blog/${id}`}>
                        <h4 className="blog-item-title">{title}</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
