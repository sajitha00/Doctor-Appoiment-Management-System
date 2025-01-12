import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-3xl px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] pl-20'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Access Premium Healthcare <br /> Instantly
                </p>
                
                <a href='#speciality' className='flex items-center gap-2 bg-white hover:bg-[#B6CFF7] hover:border-[#000000] px-8 py-4 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 font-semibold'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            
        </div>
    )
}

export default Header