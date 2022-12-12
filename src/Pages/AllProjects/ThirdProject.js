import React from 'react';
import './FristProject.css'
import picture1 from '../../Assets/dataschool/1.png'
import picture2 from '../../Assets/dataschool/2.png'
import picture3 from '../../Assets/dataschool/3.png'
import picture4 from '../../Assets/dataschool/4.png'
import picture5 from '../../Assets/dataschool/5.png'
import picture6 from '../../Assets/dataschool/6.png'
import picture7 from '../../Assets/dataschool/7.png'

const ThirdProject = () => {
    return (
        <div>
            <div className='text-center p-5'>
                <h1 className='text-3xl font-bold py-5'>DataSchooling: Online data sciences learning platform</h1>
            </div>
            <div className="carousel w-3/4 rounded border-4 border-black mx-auto h-60 lg:h-96 container">
                <div
                    id="item1" className="carousel-item w-full">
                    <img
                        src={picture1}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item2" className="carousel-item w-full">
                    <img
                        src={picture2}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item3" className="carousel-item w-full">
                    <img
                        src={picture3}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item4" className="carousel-item w-full">
                    <img
                        src={picture4}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item5" className="carousel-item w-full">
                    <img
                        src={picture5}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item6" className="carousel-item w-full">
                    <img
                        src={picture6}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item7" className="carousel-item w-full">
                    <img
                        src={picture7}
                        alt=''
                        className="w-full" />
                    <a href="https://data-schooling-online.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 w-4/5 mx-auto py-10 gap-2">
                <a href="#item1" className=" border-2 ">
                    <img src={picture1} alt="" />
                </a>
                <a href="#item2" className=" border-2">
                    <img src={picture2} alt="" />
                </a>
                <a href="#item3" className=" border-2">
                    <img src={picture3} alt="" />
                </a>
                <a href="#item4" className=" border-2">
                    <img src={picture4} alt="" />
                </a>
                <a href="#item5" className=" border-2">
                    <img src={picture5} alt="" />
                </a>
                <a href="#item6" className=" border-2">
                    <img src={picture6} alt="" />
                </a>
                <a href="#item7" className=" border-2">
                    <img src={picture7} alt="" />
                </a>
            </div>
            <div className='ml-10'>
                <div >
                    <h1 className='text-3xl font-bold pb-5'>Project Features:</h1>
                </div>
                <div className='ml-10'>
                    <ul className='list-disc'>
                        <li className='font-semibold text-xl p-2'>Visitors can find different courses and course information from this application</li>
                        <li className='font-semibold text-xl p-2'>Visitors can download the course outline free but to get premium access they need to login first</li>
                        <li className='font-semibold text-xl p-2'>There is a FAQ section, where visitors can find answers for common questions</li>
                        <li className='font-semibold text-xl p-2'>After login users can explore the premium features of a specific course </li>
                        <li className='font-semibold text-xl p-2'>Users can create account with email and password</li>
                        <li className='font-semibold text-xl p-2'>Users can login with email/passwod or with google/gitHub account</li>
                    </ul>
                </div>
                <div >
                    <h1 className='text-3xl font-bold py-5'>Key Technologies:</h1>
                </div>
                <div className='ml-10 grid grid-col-3 lg:grid-cols-7'>
                    <a className="btn btn-primary mr-2">React.js</a>
                    <a className="btn btn-secondary mr-2">Node.js</a>
                    <a className="btn btn-accent mr-2">Express.js</a>
                    <a className="btn btn-accent mr-2">Firebase</a>
                    <a className="btn btn-accent mr-2">Bootstrap</a>
                    <a className="btn btn-accent mr-2">React Bootstrap</a>
                </div>
                <div className='p-10 flex'>
                    <a href='https://github.com/sanisaha/Data-schooling-client' target='_blank' className="btn btn-warning mr-4">GitHub Client</a>
                    <a href='https://github.com/sanisaha/data-schooling-server' target='_blank' className="btn btn-warning">GitHub Server</a>
                </div>
            </div>
        </div>
    );
};

export default ThirdProject;