import React from 'react';
import picture1 from '../../Assets/carryYou/1.png'
import picture2 from '../../Assets/carryYou/2.png'
import picture3 from '../../Assets/carryYou/3.png'
import picture4 from '../../Assets/carryYou/4.png'
import picture5 from '../../Assets/carryYou/5.png'
import picture6 from '../../Assets/carryYou/6.png'
import picture7 from '../../Assets/carryYou/7.png'
import picture8 from '../../Assets/carryYou/8.png'
import picture9 from '../../Assets/carryYou/9.png'
import picture10 from '../../Assets/carryYou/10.png'
import picture11 from '../../Assets/carryYou/11.png'
import './FristProject.css'

const SecondProject = () => {
    return (
        <div>
            <div className='text-center p-5'>
                <h1 className='text-3xl font-bold py-5'>CarryYou: Simple moving service provider</h1>
            </div>
            <div className="carousel w-3/4 rounded border-4 border-black mx-auto h-60 lg:h-96 container">
                <div
                    id="item1" className="carousel-item w-full">
                    <img
                        src={picture1}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item2" className="carousel-item w-full">
                    <img
                        src={picture2}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item3" className="carousel-item w-full">
                    <img
                        src={picture3}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item4" className="carousel-item w-full">
                    <img
                        src={picture4}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item5" className="carousel-item w-full">
                    <img
                        src={picture5}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item6" className="carousel-item w-full">
                    <img
                        src={picture6}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item7" className="carousel-item w-full">
                    <img
                        src={picture7}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item8" className="carousel-item w-full">
                    <img
                        src={picture8}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item9" className="carousel-item w-full">
                    <img
                        src={picture9}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item10" className="carousel-item w-full">
                    <img
                        src={picture10}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
                </div>
                <div
                    id="item11" className="carousel-item w-full">
                    <img
                        src={picture11}
                        alt=''
                        className="w-full" />
                    <a href="https://carry-you.web.app/" target='_blank' className="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</a>
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
                <a href="#item8" className=" border-2">
                    <img src={picture8} alt="" />
                </a>
                <a href="#item9" className=" border-2">
                    <img src={picture9} alt="" />
                </a>
                <a href="#item10" className=" border-2">
                    <img src={picture10} alt="" />
                </a>
                <a href="#item11" className=" border-2">
                    <img src={picture11} alt="" />
                </a>
            </div>
            <div className='ml-10'>
                <div >
                    <h1 className='text-3xl font-bold pb-5'>Project Features:</h1>
                </div>
                <div className='ml-10'>
                    <ul className='list-disc'>
                        <li className='font-semibold text-xl p-2'>Visitors can see all the available moving services</li>
                        <li className='font-semibold text-xl p-2'>Vistors can see service details and can also read feedbacks from each service</li>
                        <li className='font-semibold text-xl p-2'>Visitors need to login to book a available service</li>
                        <li className='font-semibold text-xl p-2'>users who have logged in can also add a service and feedbacks for specific service </li>
                        <li className='font-semibold text-xl p-2'>Users can see all their feedbacks in this website and able to delete or edit feedback</li>
                    </ul>
                </div>
                <div >
                    <h1 className='text-3xl font-bold py-5'>Key Technologies:</h1>
                </div>
                <div className='ml-10 grid grid-col-3 lg:grid-cols-7'>
                    <a className="btn btn-primary mr-2">React.js</a>
                    <a className="btn btn-secondary mr-2">Node.js</a>
                    <a className="btn btn-accent mr-2">Express.js</a>
                    <a className="btn btn-accent mr-2">MongoDB</a>
                    <a className="btn btn-accent mr-2">JWT Token</a>
                    <a className="btn btn-accent mr-2">Tailwind</a>
                    <a className="btn btn-accent mr-2">Firebase</a>
                </div>
                <div className='p-10 flex'>
                    <a href='https://github.com/sanisaha/carry-you' target='_blank' className="btn btn-warning mr-4">GitHub Client</a>
                    <a href='https://github.com/sanisaha/carry-you-server' target='_blank' className="btn btn-warning">GitHub Server</a>
                </div>
            </div>
        </div>
    );
};

export default SecondProject;