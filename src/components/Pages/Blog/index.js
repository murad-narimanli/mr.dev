import React from 'react';
import blogIMg from '../../../images/blog/blog_post_1.jpg'
import PageLayout from "../../Layout/PageLayout";
import {Link} from "react-router-dom";
import BlogItem from "../../Elements/BlogItem";
function Blog(props) {
    let blogs = [
        {},
        {},
        {},
        {},
    ]
    return (
        <PageLayout title={'Blog'} description={'My Diary'}>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="blog-masonry two-columns clearfix">
                        {blogs.map((b ,i)=>(
                            <BlogItem key={i}
                              src={blogIMg}
                              id={3}
                              date={'12/12/2021'}
                              title={'Designing the Perfect Feature Comparison Table'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}


export default Blog;
