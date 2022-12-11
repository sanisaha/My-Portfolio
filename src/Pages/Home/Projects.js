import React from 'react';
import car from '../../Assets/car-finder.png'
import carry from '../../Assets/carryYoy.png'
import dataSchool from '../../Assets/data-school.png'

const Projects = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <div className='h-1/2'>
                    <figure><img className='h-48 w-full' src={car} alt="" /></figure>
                </div>
                <div className="card-body h-1/2">
                    <h2 className="card-title text-3xl">Car-Finder</h2>
                    <p className='text-xl'>A second-hand car's marketplace</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <div className='h-1/2'>
                    <figure><img className='h-48 w-full' src={carry} alt="" /></figure>
                </div>
                <div className="card-body h-1/2">
                    <h2 className="card-title text-3xl">CarryYou</h2>
                    <p className='text-xl'>A simple moving service provider</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <div className='h-1/2'>
                    <figure><img className='h-48 w-full' src={dataSchool} alt="" /></figure>
                </div>
                <div className="card-body h-1/2">
                    <h2 className="card-title text-3xl">DataSchooling</h2>
                    <p className='text-xl'>Online learning platform website</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;