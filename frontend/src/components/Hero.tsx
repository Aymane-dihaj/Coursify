import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='border-2 border-red-500 items-center pt-[14rem] gap-10 h-screen sm:flex lg:pt-[4rem] justify-center lg:justify-between p-20 flex flex-col lg:flex-row ml-auto mr-auto'>
      <div className='lg:max-w-[50%] border flex items-center lg:items-start flex-col '>
        <h1 className='text-gray-900 text-3xl w-full text-center lg:text-start lg:text-5xl font-bold border'>Unlock Your Potential with Coursify</h1>
        <p className='mt-5 text-sm text-gray-600 max-w-[70%] text-center  lg:text-start'>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.</p>
      </div>
        <Image className='w-[400px] max-w-[600px] sm:w-[500px] border-2 border-red-500' src={'/assets/hero-img.svg'} width={1000} height={1000} alt='hero section image'/>
    </div>
  )
}

export default Hero
