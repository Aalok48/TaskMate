import React from 'react';
import logo from '../assets/logo.svg';
// import Themeselector from './Themeselector'

export default function Header() {

    return (
        <div className='flex  mx-24 mt-10 h-20 shadow-lg border-2 rounded-lg border-gray-300'>
            <div className="logo w-1/2 h-full flex items-center">
                <img src={logo} alt="" className='w-20 p-3' />
                <span className='text-2xl text-gray-600 font-semibold'>Taskmate</span>
            </div>
            <div className="color w-1/2 h-full flex items-center justify-end">
                <span className='pr-4'>
                    {/* Hello */}
                </span>
            </div>
        </div>
    );
}