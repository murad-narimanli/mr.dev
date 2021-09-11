import React, {useEffect} from 'react';
import PageLayout from "../../Layout/PageLayout";
import BlogItem from "../../Elements/BlogItem";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../redux/actions";
import {url} from "../../../const/const";
import moment from "moment";
function Blog(props) {

    const blogs = useSelector(s => s.blogs)
    const dispatch = useDispatch()

    useEffect(()=>{
        !blogs.length && dispatch(getBlogs())
    },[])


    return (
        <PageLayout title={'Blog'} description={'My Diary'}>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="blog-masonry two-columns clearfix">
                        {blogs.map((b ,i)=>(
                            <BlogItem key={i}
                              src={url + b.cover.url}
                              id={b.id}
                              date={moment(b.published_at).format('DD/MM/YYYY')}
                              title={b.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}


export default Blog;
