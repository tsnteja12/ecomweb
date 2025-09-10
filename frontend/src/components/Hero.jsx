import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'> 
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                
                <h1 className='prata-regular   text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    
                </div>

            </div>
        </div>
        {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    
    </div>
  )
}

export default Hero