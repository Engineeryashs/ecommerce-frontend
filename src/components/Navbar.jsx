import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
     const navItems = [
        {
            id: 1,
            text: "HOME",
            to:"/home"
        },
        {
            id: 2,
            text: "COLLECTION",
            to:"/collection"
        },
        {
            id: 3,
            text: "ABOUT",
            to:"/about"
        },
        {
            id: 4,
            text: "CONTACTS",
            to:"/contacts"
        }
    ]
  return (
    <div className='flex items-center justify-between font-medium relative'>

      <div>
        <img src="/Y-MartLogo.png" className='h-20 w-auto cursor-pointer' alt="Y-Mart" />
      </div>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to="/" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"}`} />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <hr className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive ? "block" : "hidden"}`} />
            </>
          )}
        </NavLink>
      </ul>
      {/*Now adding all the search icons login and cart items*/}
      <div className='flex items-center gap-6'>
        <div>
          <img src="/search.png" className='w-6 cursor-pointer' alt="search" />
        </div>
        <div className='relative group'>
          <img src="/user login.png" alt="user" className='w-6 cursor-pointer' />
          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-6 bg-slate-100 text-gray-500 rounded-lg'>
              <div className='cursor-pointer hover:text-black'>Orders</div>
              <div className='cursor-pointer hover:text-black'>Update</div>
              <div className='cursor-pointer hover:text-black'>Logout</div>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src="/cart.png" className='w-6 min-w-6' alt="cart" />
          <div className='absolute top-[12px] left-[12px] w-4 bg-black text-center text-white leading-4 rounded-full text-[10px] aspect-square'>10</div>
        </Link>

        <div onClick={() => {
          setVisible(!visible)
        }} >{visible ?
       <img src='/close-menu.png' className='cursor-pointer w-6 sm:hidden' alt="close-menu" />:    <img src="/menu-icon.png" className='cursor-pointer w-6 sm:hidden' alt="menu-icon" /> 
          }
        </div>

      </div>
      {
        visible && (<div className='absolute top-14 right-0 w-full'>
          <div className='flex flex-col items-center justify-center h-screen bg-white text-gray-900 gap-4 p-3' >
            {
              navItems.map(function({id,text,to}){
                return <NavLink to={to} key={id} smooth={true} onClick={()=>{setVisible(!visible)}}>{text}</NavLink>
              })
            }
            </div> </div>)
      }
    </div>

  )
}

export default Navbar