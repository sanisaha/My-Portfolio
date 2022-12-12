import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/DSC_0978 (1).png'

const Header = () => {
    return (
        <div className="navbar bg-base-100 mx-5 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <a className="btn btn-ghost normal-case text-xl">SANI SAHA</a>
                    <img src={logo} alt="" className='w-8 h-8 rounded-lg' />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-4">
                        <li className='px-4 text-lg font-semibold'><Link to='/'>Home</Link></li>
                        <li className='px-4 text-lg font-semibold'><Link to='/about'>About</Link></li>
                        <li className='px-4 text-lg font-semibold'><Link to='/contact'>Contact</Link></li>
                        <li className='px-4 text-lg font-semibold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;