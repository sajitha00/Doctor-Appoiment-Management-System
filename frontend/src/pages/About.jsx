import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 pb-5'>
        <img className='w-full md:max-w-[360px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 pl-10'>
          <p>At InfiniteCare, we are committed to offering effortless access to highly skilled healthcare professionals, prioritizing your well-being. Our platform connects you with a diverse network of specialists, including General Physicians, Gynecologists, Dermatologists, Pediatricians, Neurologists, and Gastroenterologists, each dedicated to providing exceptional care.</p>
          <p>InfiniteCare makes booking appointments effortless. Our intuitive platform is designed to save you time and hassle, enabling you to schedule appointments with your preferred doctors at your convenience. We are committed to bridging the gap between patients and healthcare providers, offering personalized solutions that cater to your individual needs. </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our mission is to transform healthcare accessibility by building a trusted, seamless platform that connects individuals with outstanding medical professionals, empowering communities to prioritize their health and well-being.</p>
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
