import React, { useContext } from 'react'
import Card from './Card'
import Text from './Text'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
     const {bestSellers}=useContext(ShopContext);
  return (
 <div className='my-8'>
     <div className='text-center text-3xl py-8'>
        <Text text1="BEST" text2="SELLERS"/>
        <p className='m-auto w-3/4 text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, minima.</p>
     </div>
     <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
     {
        bestSellers.map(function(item,index){
           return <Card title={item.title} price={item.minPrice} image={item.images[0]} id={item._id} key={item._id} />
        })
     }
     </div>
    </div>
     
  )
}

export default BestSeller
