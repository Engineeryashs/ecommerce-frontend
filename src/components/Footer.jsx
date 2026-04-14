import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div className='flex flex-col gap-4'>
        <div>
            <img src="Ymart Logo.png" className="w-32 mb-5" alt="YMart" />
        </div>
        <div className='text-gray-400 text-left w-full md:w-1/2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nesciunt temporibus nostrum minus soluta aliquam est dolorem eum dicta quae architecto rem qui, iste optio quasi recusandae explicabo quos dolores?
        </div>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 font-medium text-gray-600 text-sm'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className='text-xl font-medium mb-5'>GET IN TOUCH</h1>
        <ul className='flex flex-col gap-1 font-medium text-sm text-gray-600'>
            <li>+91 7974400324</li>
            <li>engineeryashs@gmail.com</li>
            <li>Instagram</li>
        </ul>
      </div>
      <div className='col-span-3'>
        <hr />
        <p className='text-sm text-center pt-5 pb-0'>Copyright claim @YMart-All rights reserved</p>
      </div>
      {/*Achha now i got it col-span will merge all 3 cols because 4th element in this grid becomes second row first col so we do cols-span-3 so 4ht ellement takes full width*/}
    </div>
  )
}

export default Footer
