import React from 'react';

const ActiveUsers = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 py-10 text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className=''>
                <h2 className='text-4xl font-extrabold text-white'>50K+</h2>
                <p className='text-[#FFFFFF]'>Active Users</p>
            </div>
            <div className=''>
                <h2 className='text-4xl font-extrabold text-white'>200+</h2>
                <p className='text-[#FFFFFF]'>Premium Tools</p>
            </div>
            <div className=''>
                <h2 className='text-4xl font-extrabold text-white'>4.9</h2>
                <p className='text-[#FFFFFF]'>Rating</p>
            </div>
        </div>

);
};


export default ActiveUsers;