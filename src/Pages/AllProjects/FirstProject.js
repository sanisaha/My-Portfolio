import React from 'react';
import { Link } from 'react-router-dom';
import './FristProject.css'
import picture1 from '../../Assets/carfinder/1.png'
import picture2 from '../../Assets/carfinder/2.1.png'
import picture3 from '../../Assets/carfinder/2.2.png'
import picture4 from '../../Assets/carfinder/3.png'
import picture5 from '../../Assets/carfinder/4.png'
import picture6 from '../../Assets/carfinder/5.png'
import picture7 from '../../Assets/carfinder/6.png'
import picture8 from '../../Assets/carfinder/7.png'
import picture9 from '../../Assets/carfinder/8.png'
import picture10 from '../../Assets/carfinder/9.png'

const FirstProject = () => {
    // const [isHover, setIsHover] = useState(false);
    // const handleMouseEnter = () => {
    //     setIsHover(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsHover(false);
    // };

    // const boxStyle = {
    //     display: isHover ? 'none' : 'block'
    // };


    return (
        <div>
            <div className='text-center p-5'>
                <h1 className='text-3xl font-bold py-5'>Car-Finder: A marketplace for second-hand cars</h1>
            </div>
            <div className="carousel w-3/4 rounded border-4 border-black mx-auto h-60 lg:h-96 container">
                <div
                    id="item1" className="carousel-item w-full">
                    <img
                        src={picture1}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item2" className="carousel-item w-full">
                    <img
                        src={picture2}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item3" className="carousel-item w-full">
                    <img
                        src={picture3}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item4" className="carousel-item w-full">
                    <img
                        src={picture4}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item5" className="carousel-item w-full">
                    <img
                        src={picture5}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item6" className="carousel-item w-full">
                    <img
                        src={picture6}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item7" className="carousel-item w-full">
                    <img
                        src={picture7}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item8" className="carousel-item w-full">
                    <img
                        src={picture8}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item9" className="carousel-item w-full">
                    <img
                        src={picture9}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
                </div>
                <div
                    id="item10" className="carousel-item w-full">
                    <img
                        src={picture10}
                        alt=''
                        className="w-full" />
                    <button class="btn btn-outline w-full h-full text-5xl font-bold">Live Preview</button>
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
            </div>
            <div className='ml-10'>
                <div >
                    <h1 className='text-3xl font-bold pb-5'>Project Features:</h1>
                </div>
                <div className='ml-10'>
                    <ul className='list-disc'>
                        <li className='font-semibold text-xl p-2'>Users can create account as buyer or seller</li>
                        <li className='font-semibold text-xl p-2'>Google login users by default set as buyer</li>
                        <li className='font-semibold text-xl p-2'>If a user is not logged in they cannot search cars based on categories</li>
                        <li className='font-semibold text-xl p-2'>Buyers can book a item and pay later with their credit/debit card </li>
                        <li className='font-semibold text-xl p-2'>Seller can add their product for sell and also has option for advertize the product</li>
                        <li className='font-semibold text-xl p-2'>There is also admin option, admin can delete any seller and also can verify a seller.</li>
                    </ul>
                </div>
                <div >
                    <h1 className='text-3xl font-bold py-5'>Key Technologies:</h1>
                </div>
                <div className='ml-10'>
                    <button className="btn btn-primary mr-2">React.js</button>
                    <button className="btn btn-secondary mr-2">Node.js</button>
                    <button className="btn btn-accent mr-2">Express.js</button>
                    <button className="btn btn-accent mr-2">MongoDB</button>
                    <button className="btn btn-accent mr-2">Firebase</button>
                    <button className="btn btn-accent mr-2">Tailwind</button>
                </div>
                <div className='p-10'>
                    <Link className="btn btn-warning mr-4">GitHub Client</Link>
                    <Link className="btn btn-warning">GitHub Server</Link>
                </div>
            </div>
        </div>
    );
};

export default FirstProject;