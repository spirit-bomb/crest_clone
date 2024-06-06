import React from 'react'
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className="border-2 border-black pt-4 pb-4 flex justify-start bg-gray-950 gap-2">
        <div className="ml-8 lg:ml-16">
            <img className=" opacity-100" src={logo} alt="logo" width="40px"/>
        </div>
        <div className="">
            <span className=" text-white text-3xl font-semibold">CleverBooks</span>
        </div>
    </div>
  )
}

export default NavBar