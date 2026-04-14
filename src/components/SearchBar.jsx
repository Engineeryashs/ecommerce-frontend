import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
  const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
  return (
    showSearch&&<div className='border-t border-b bg-gray-100 text-center m-2 py-2'>
     <div className='inline-flex items-center justify-center border border-gray-400 px-2 sm:w-1/2 w-3/4 gap-x-2 rounded-full'>
         <input type="text" className='px-4 py-2 sm:flex-1 w-full bg-gray-100 outline-none' placeholder='Search' name="search" id="search" value={search} onChange={(e)=>{
          setSearch(e.target.value);
         }}/>
         <img src="search.png" className="h-6 cursor-pointer" alt="search" />
     </div>
     <img src="cross_icon.png" className='inline m-4 h-4 cursor-pointer' onClick={()=>{
      setShowSearch(false);
     }} alt="cross" />
    </div>
  )
}
export default SearchBar
