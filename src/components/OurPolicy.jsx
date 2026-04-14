import React from 'react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-12 justify-around sm:gap-2 py-12 text-center text-xs sm:text-sm md:text-md text-gray-700'>
        <div>
      <img src="exchange_icon.png" className='w-12 m-auto mb-5' alt="ourPolicy" />
      <p className='font-semibold'>Easy Exchange Policy</p>
      <p className='text-gray-400'>We offer hassle free exchange policy</p>
    </div>
     <div>
      <img src="quality_icon.png" className='w-12 m-auto mb-5' alt="ourPolicy" />
      <p className='font-semibold'>7 Days Return Policy</p>
      <p className='text-gray-400'>We provide 7 days free return policy</p>
    </div>
     <div>
      <img src="support_img.png" className='w-12 m-auto mb-5' alt="ourPolicy" />
      <p className='font-semibold'>Our Best Policy</p>
      <p className='text-gray-400'>We provide for 7 days</p>
    </div>
    </div>
  )
}

export default OurPolicy
