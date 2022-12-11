import React from 'react';
import Projects from './Projects';

const RecentProjects = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='p-10 text-5xl font-bold'>Recent Projects</h1>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default RecentProjects;