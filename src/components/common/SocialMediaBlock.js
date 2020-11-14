import React from 'react';

import email from '../../images/social-icons/email.svg';
import instagram from '../../images/social-icons/instagram.svg';
import medium from '../../images/social-icons/medium.svg';

import './SocialMediaBlock.scss';

const SocialMediaBlock = () => {
    return (
        <div className='social-media-wrapper'>
            <a className='social-media-icon-wrap' href='mailto:art.idesignspace@gmail.com'>
                <img src={email} className='mail-logo social-media-icons' alt='mail-logo' />
            </a>
            <a className='social-media-icon-wrap' href='https://instagram.com/art_i_creations?igshid=1wcam68bj49y5'>
                <img src={instagram} className='instagram-logo social-media-icons' alt='instagram-logo' />
            </a>
            <a className='social-media-icon-wrap' href='https://medium.com/@art.idesignspace'>
                <img src={medium} className='medium-logo social-media-icons' alt='medium-logo' />
            </a>
        </div>
    )
}

export default SocialMediaBlock
