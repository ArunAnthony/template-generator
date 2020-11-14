import React from 'react';
import Slider from "react-slick";

import { BLOG_DATA } from '../../constants/BlogConstants';

import './blogCards.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BlogCard = ({ blogData }) => {
    return (
        <div className='blog-card'>
            <img src={blogData.cover_img} className='blog-cover-img' />
            <div className='cover-name'>  {blogData.cover_title} </div>
            <div className='author-name'> By {blogData.author}</div>
        </div>
    )
}

const BlogCards = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='blog-cards'>
            <Slider {...settings}>
                {
                    BLOG_DATA.map(elem => <BlogCard blogData={elem} />)
                }
            </Slider>
        </div>
    )
}

export default BlogCards;
