import React from 'react';

const Workflow = () => {
    return (
        <div className='text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] space-y-5 py-20 mt-20'>
            <div className='space-y-5'>
                <h2 className="text-5xl font-bold text-white">Ready to Transform Your Workflow?</h2>
                <p className='text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            </div>

            <div className='flex justify-center gap-5'>
                <div className='space-y-5'>
                    <button className='btn bg-white rounded-full'> <span className='py-2 bg-white rounded-xl bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</span></button>
                </div>
                <div className='space-y-5'>
                    <button className="btn btn-outline border-2 rounded-full text-white">View Pricing</button>
                </div>
            </div>
            <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;