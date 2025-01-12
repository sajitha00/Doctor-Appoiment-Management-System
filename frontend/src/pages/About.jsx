import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 pb-5'>
        <img className='w-full md:max-w-[400px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 pl-10'>
          <p>At InfiniteCare, we are dedicated to providing seamless access to top-notch healthcare professionals, ensuring that your well-being is our top priority. Our platform connects you with a wide range of specialists, including General Physicians, Gynecologists, Dermatologists, Pediatricians, Neurologists, and Gastroenterologists, all committed to delivering exceptional care.</p>
          <p>With InfiniteCare, booking appointments has never been easier. Our user-friendly platform is designed to save you time and effort, allowing you to schedule visits with your preferred doctors at your convenience. We believe in bridging the gap between patients and healthcare providers, offering personalized solutions tailored to your unique needs. </p>
          <b className='text-gray-900'>Our Vision</b>
          <p>To transform healthcare accessibility by providing a reliable and user-friendly platform that bridges the gap between individuals and top-tier medical professionals, fostering healthier communities and empowering individuals to take charge of their health and well-being.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Expert Specialists</b>
          <p>Access a diverse network of highly qualified doctors across multiple specialties.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience at Your Fingertips </b>
          <p>Effortlessly book appointments anytime, anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Patient-Centered Care</b>
          <p >Experience personalized healthcare designed to meet your unique needs.</p>
        </div>
      </div>
      <hr />

    </div>
  )
}

export default About
