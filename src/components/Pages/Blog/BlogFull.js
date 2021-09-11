import React, {useEffect, useState} from 'react';
import blogImg from  '../../../images/blog/blog_post_5.jpg'
import PageLayout from "../../Layout/PageLayout";
import BlogLayout from "../../Layout/BlogLayout";
import profile from "../../../const/api";
import {url} from "../../../const/const";

function BlogFull(props) {
    const [data , setData] = useState()
    useEffect(()=>{
        profile.get(`blogs/${props.match.params.id}`).then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    },[props.match.params.id])

    return (
        <PageLayout>
            <BlogLayout img={url + data?.cover.url}  title={data?.description} date={'12/12/2021'}>
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="col-inner">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: data?.content,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </BlogLayout>
        </PageLayout>
    );
}

export default BlogFull;


