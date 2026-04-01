import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl font-extrabold text-center mt-20'>Simple, Transparent Pricing</h2>
                <p className='text-gray-400 text-center mt-3'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl gap-5 mt-10 mb-30 justify-items-center flex-col items-center'> 
            <div className="card w-96 bg-base-100 shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <span className="text-gray-400">Perfect for getting started</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <h1 className="text-3xl font-bold">$0<span className="text-lg text-gray-400">/month</span></h1>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full w-full">Get Started Free</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm text-white hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning absolute -top-3 left-35 p-3 rounded-full text-[12px]">Most Popular</span>
                    <div className="">
                        <h2 className="text-3xl font-bold">Pro</h2>
                        <span className="text-white">Best for professionals</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <h1 className="text-3xl font-bold">$29 <span className="text-lg">/month</span></h1>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Advanced analytics</span>
                        </li>
                    </ul>
                    <div className="mt-6  bg-white rounded-full w-full ">
                        <button className="btn rounded-full w-full"><span className="block px-6 py-2 bg-white rounded-xl bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Start Pro Trial</span></button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                    <div className="">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <span className="text-gray-400">For teams and businesses</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <h1 className="text-3xl font-bold">$99<span className="text-lg text-gray-400">/month</span></h1>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom branding</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full w-full ">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pricing;