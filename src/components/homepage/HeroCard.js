import React from 'react';
import SocialMediaBlock from '../common/SocialMediaBlock';


import './heroCard.scss';

const HeroCard = () => {
    return (
        <div className='card-wrapper-outer'>
            <h3 className='title'> What i do? </h3>
            <h4 className='sub-title'>
                I'm an Interior Designer
            </h4>
            <SocialMediaBlock />
        </div>
    )
}

export default HeroCard
