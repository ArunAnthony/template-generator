import React from 'react';

import BlogCards from './BlogCards';

const BlogBlock = () => {
    return (
        <div className='card-wrapper-outer'>
            <h4 className='title'>My Blogs</h4>
            <BlogCards />
        </div>
    )
}

export default BlogBlock;
