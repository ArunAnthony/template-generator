import React from 'react';
import { useLocation } from 'react-router-dom';

import { BLOG_DATA } from '../../constants/BlogConstants';

import './blogPageView.scss';

const BlogFullPageView = (props) => {
    const BLOG = BLOG_DATA[0];
    // const location = useLocation();
    // console.log(location.pathname);
    return (
        <div className='blog-page-view'>
            <div className='blog-title' dangerouslySetInnerHTML={{ __html: BLOG.title }} />
            <div className='blog-description' dangerouslySetInnerHTML={{ __html: BLOG.description }} />
        </div>
    )
}

export default React.memo(BlogFullPageView)
