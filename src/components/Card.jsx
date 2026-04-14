import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const Card = ({title,price,image,id}) => {
    const {currency}=useContext(ShopContext);
  return (
    <div>
      <Link className='flex flex-col cursor-pointer'>
        <img src={image} className='p-2 hover:scale-110 transition ease-in-out bg-gray-100' alt="" />
        <p className='pt-3 pb-1 text-sm'>{title}</p>
        <h1 className='text-sm font-medium'>{currency}
        <span>{price}</span>
        </h1>
      </Link>
    </div>
  )
}

export default Card
