import React from 'react';

import location from '../../images/common-icons/placeholder.svg';

import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
    return (
        <div className='project-card'>
            <img src={project.cover_img} className='project-cover-img' />
            <div className='project-text'>
                <div className='project-name' >
                    {project.title_text}
                </div>
                <div className='location-wrapper'>
                    <img src={location} alt='location-icon' width='20px' />
                    <div className='location'> {project.location}</div>
                </div>
                <div className='completion-year'>Completed in year {project.completion_year}</div>
                <button className='btn view-more-btn'>
                    View More
            </button>
            </div>
        </div>
    )
}

export default ProjectCard;
