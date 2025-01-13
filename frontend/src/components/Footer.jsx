import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-10 text-sm'>
        
        <div>
          <img className='mb-5 w-80 py-5' src={assets.InfiniteCare} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Empowering healthier lives by seamlessly connecting patients with trusted medical professionals. Experience reliable, convenient, and personalized healthcare services at your fingertips, anytime, anywhere. Your health and well-being remain our top priority..</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Site Map</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to='/' >
              <li>Home</li>
            </NavLink>
            <NavLink to='/doctors'>
              <li>All Doctors</li>
            </NavLink>
            <NavLink to='/about'>
              <li>About us</li>
            </NavLink>
            <NavLink to='/contact'>
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Contact Us</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>011 555 5555</li>
            <li>infinitecare@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ infinitecare.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
