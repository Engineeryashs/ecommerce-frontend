import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-center'>
      <p className='font-medium text-2xl text-gray-800 m-3'>Subscribe now & get 20% off</p>
      <p className='text-gray-400'>Stay updated with our latest offers and trends—subscribe now! ✨</p>
      <form className='flex items-center w-full sm:w-1/2 mx-auto my-6 pl-3 border'>
        <input type="email" className='w-full outline-none sm:flex-1' placeholder='Please enter your email'/>
        <button className='bg-black text-white cursor-pointer px-6 md:px-10 py-4 text-xs' type='submit'>SUBSCRIBE</button>
    </form>
     </div>
  )
}

export default NewsLetter
