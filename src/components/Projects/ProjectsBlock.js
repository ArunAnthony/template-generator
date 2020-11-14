import React from 'react';

import ProjectCard from './ProjectCard';
import { ProjectsData } from '../../constants/ProjectConstants';

import './ProjectBlock.scss';

const ProjectsBlock = () => {

    return (
        <div className='card-wrapper-outer'>
            <h3> Projects </h3>
            {
                ProjectsData.map(project => <ProjectCard project={project} key={project.blog_id} />)
            }
        </div>
    )
}

export default ProjectsBlock
