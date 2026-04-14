import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [currentState, setCurrentState] = useState("login");
    return (
        <form className='flex flex-col items-center m-auto w-[90%] mt-14 sm:max-w-96 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2'>
                {
                    currentState == "login" ? <p className='text-3xl prata-regular'>Login</p> : <p className='text-3xl prata-regular'>Signup</p>
                }
                <hr className='w-8 h-[2px] border-none bg-gray-800' />
            </div>
            {
                currentState == "signup" &&
                <input type="text" name="name" id="name" placeholder='Name' className='w-full px-3 py-2 border border-gray-800' />
            }{
                currentState == "signup" && <input type="text" name="lastName" id="lastName" placeholder='lastName' className='w-full px-3 py-2 border border-gray-800' />
            }

            <input type="text" name="email" id="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800' />
            <input type="password" name="password" id="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800' />

            <div className='w-full flex justify-between text-sm mt-[8px]'>
                <p className='cursor-pointer' >Forget your password</p>

                {
                    currentState === "login" ? <p className='cursor-pointer' onClick={() => {
                        setCurrentState("signup")
                    }}>Create account</p>
                        : <p className='cursor-pointer' onClick={() => {
                            setCurrentState("login")
                        }}>Login Here</p>
                }


            </div>
            <button className='bg-black text-white px-8 py-2 m-2 font-light rounded-lg'>{currentState === "Login" ? 'login' : 'Sign Up'}</button>
        </form>

    )
}

export default Login
