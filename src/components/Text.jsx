import React from 'react'

const Text = ({text1,text2}) => {
  return (
    
        <div className='inline-flex items-center gap-2 mb-3'>
            <p className='text-gray-500'>{text1}
                <span className='text-gray-700 font-medium ml-2'>{text2}</span>
            </p>
            <p className='w-8 h-[1px] sm:w-12 sm:h-[2px] bg-gray-600'></p>
        </div>
  )
}

export default Text
