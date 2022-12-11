import React from 'react';
import { Link } from 'react-router-dom';
import RecentProjects from './RecentProjects';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="mx-5">
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="py-20 font-semibold">
                        <h1 className="text-5xl font-bold">Hey, I'M SANI SAHA</h1>
                        <p className="py-6 w-4/5 mx-auto">A Frontend Passionate And Focused Web Developer Building Frontend Websites And A Motivate Team Player Continuously Building Himself To Become A Skilled Web Developer </p>
                        <div className='flex justify-center items-center'>
                            <a className='mr-4' href='https://drive.google.com/file/d/1qUSrY-irE-U2pdQvEexGcYKSNQPc3GEZ/view?usp=sharing' target='_blank'><button className="btn btn-warning">See My Resume</button></a>
                            <div className='flex text-3xl'>
                                <a className='mr-4' href="https://github.com/sanisaha" target='_blank'><FaGithub></FaGithub></a>
                                <a href="https://www.linkedin.com/in/sani-saha-28978aa4/" target='_blank'><FaLinkedin></FaLinkedin></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <RecentProjects></RecentProjects>
            </div>
        </div>
    );
};

export default Home;