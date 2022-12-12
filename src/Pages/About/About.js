import React from 'react';
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';
import picture from '../../Assets/DSC_0978-removebg-preview.png'
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-orange-400 min-h-screen'>
                <div className='py-20'>
                    <h1 className='text-5xl text-center font-bold'>About Me</h1>
                </div>
                <div className='block lg:hidden w-1/2 mx-auto py-4'>
                    <img src={picture} alt="" />
                </div>
                <div className='flex w-1/2 lg:w-3/4 mx-auto items-center'>
                    <div className='w-3/5 text-black'>
                        <h2 className='text-xl'>Hello World! I'M SANI SAHA, a Frontend Web Developer From Finland.  I have experience of working on front end projects and have good command over HTML5, CSS3, JavaScript and React.js. I have also good command over back-end web development.</h2>
                        <br />
                        <h2 className='text-xl'> In my recent projects I have worked with Node.js, Express.js and MongoDB. I am at the beginning of my web development career and continuously building myself to become a skilled developer.</h2>
                        <br />
                        <h2 className='text-xl'>Check me out at: </h2>
                        <br />
                        <div className='flex text-3xl items-center'>
                            <a className='mr-4' href="https://github.com/sanisaha" target='_blank'><FaGithub></FaGithub></a>
                            <a className='mr-4' href="https://www.linkedin.com/in/sani-saha-28978aa4/" target='_blank'><FaLinkedin></FaLinkedin></a>
                            <a href='https://drive.google.com/file/d/1qUSrY-irE-U2pdQvEexGcYKSNQPc3GEZ/view?usp=sharing' target='_blank'><FaFilePdf /></a>
                        </div>
                    </div>
                    <div className='hidden lg:block w-2/5'>
                        <img src={picture} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;