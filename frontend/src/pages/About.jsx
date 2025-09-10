import React from 'react'
import Title from '../components/Title'
import { assets } from './../assets/assets';
import NewsLetterBox from './../components/NewsLetterBox';
const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to LUXE LOOKS, your ultimate destination for premium fashion. We are committed to delivering exceptional products, outstanding customer service, and unique selections that elevate your shopping experience.</p>
        <p>Founded in 2012, LUXE LOOKS has come a long way from its beginnings. When we started out, our passion for fashion drove us to conduct in-depth research and provide customers with more than just a purchase — we aimed to deliver an exceptional shopping experience. Today, we proudly serve customers all over India and are excited to be a key player in the LUXE LOOKS.</p>
        

        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at LUXE LOOKS is to deliver high-quality, innovative, and affordable products with honesty and care. Customer satisfaction guides us in providing a smooth, safe, and enjoyable shopping experience. We prioritize sustainability and ethical practices while building lasting relationships through value, trust, and convenience.</p>


        <p>Thank you for visiting LUXE LOOKS. We look forward to being your go-to destination for all your style needs!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>LUXE LOOKS offers stylish, high-quality products with friendly customer service. Since 2012, we've delivered unique fashion finds, a secure shopping experience, and a commitment to eco-friendly practices.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>LUXE LOOKS makes shopping effortless with a smooth website, quick checkout, flexible payment options, and reliable doorstep delivery..</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>At LUXE LOOKS, your satisfaction comes first with fast, helpful support and easy returns for a smooth, worry-free shopping experience.</p>
        </div>

      </div>
      <NewsLetterBox/>

    </div>
  )
}

export default About