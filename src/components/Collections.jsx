import React, { useContext } from 'react'
import Card from './Card'
import Text from './Text'
import { ShopContext } from '../context/ShopContext'
const Collections = () => {
    const {collections}=useContext(ShopContext);
   
  return (
    <div className='my-8'>
    <div className='text-center text-3xl py-8'>
        <Text text1="LATEST" text2="COLLECTIONS"/>
        <p className='m-auto w-3/4 text-xs sm:text-sm md:text-base text-gray-600'>Step into the season with our latest collections—where trend meets comfort.</p>
        </div>
<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
     {
        collections.map(function(item,index){
           return <Card title={item.title} price={item.minPrice} image={item.images[0]} id={item._id} key={index}/>
        })
     }
     </div>
    </div>
     
  )
}

export default Collections
