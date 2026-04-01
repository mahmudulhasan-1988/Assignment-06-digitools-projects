import React from 'react';

const GetStarted3 = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 py-2 gap-5  bg-[#F9FAFC] mt-20 rounded-2xl'>

            <div>
                <h2 className='text-4xl font-extrabold text-center mt-20'>Get Started in 3 Easy Steps</h2>
                <p className='text-gray-400 text-center mt-3'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-30 justify-items-center'>
                <div className="card bg-base-100 w-96 shadow-sm py-15 hover:shadow-2xl transition-shadow duration-300">

                <div className="absolute top-5 right-5 bg-linear-to-r from-purple-500 to-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold">01
                </div>


                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/QFFMqZ7Q/user.png"
                            alt="User"
                            className="rounded-full bg-gray-200 py-2 px-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm py-15 hover:shadow-2xl transition-shadow duration-300">

                 <div className="absolute top-5 right-5 bg-linear-to-r from-purple-500 to-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold">02
                </div>

                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/wF0x603y/package.png"
                            alt="Package"
                            className="rounded-full bg-gray-200 py-2 px-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm py-15 hover:shadow-2xl transition-shadow duration-300">

                     <div className="absolute top-5 right-5 bg-linear-to-r from-purple-500 to-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold">03
                </div>

                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/C5nSHrSV/rocket.png"
                            alt="Rocket"
                            className="rounded-full bg-gray-200 py-2 px-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetStarted3;