
import { IoMdRadioButtonOn } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10 mt-20 mx-auto max-w-7xl px-4 items-center justify-between space-y-10'>
            <div className='space-y-10'>
                <div className='flex items-center gap-2 bg-[#E1E7FF] w-max px-4 py-1 rounded-full text-sm text-gray-500 font-semibold'>
                    <div className='p-1'>
                        <img className='w-6' src="/Group 5.png" alt="" />
                    </div>
                    <p className='bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500 text-lg'>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='font-extrabold text-6xl'>Supercharge Your</h2>
                <span className='font-extrabold text-6xl'>Digital Workflow</span>
                <p className='font-semibold text-gray-500 mt-5'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating <br />faster today.Explore Products</p>
                <div className="flex gap-2">
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full">Explore Products
                    </button>

                    <button className="btn rounded-full border-2 border-purple-500 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
                        <span className="flex gap-2 py-2 bg-white rounded-xl bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500"><img className='' src="/Play.png" alt="" /> Watch Demo</span>
                    </button>
                </div>
            </div>
            <div className='justify-self-end'>
                <img className='' src="/banner.png" />
            </div>
        </div>
    );
};

export default Banner;