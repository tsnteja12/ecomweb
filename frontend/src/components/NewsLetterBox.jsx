import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-900'>Subscribe now and Get 20% Offer</p>
        <p className='text-gray-400 mt-3'>this project is for learning purpose.This line is dummy text for viewing purpose.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-fill sm:flex-1 outline-none' type="email" placeholder="Enter your email" required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE NOW</button>
            
        </form>

    </div>
  )
}

export default NewsLetterBox