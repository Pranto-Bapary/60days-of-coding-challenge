import React from 'react'
import {Link, NavLink} from 'react-router'
import "../App.css"

function Navbar() {
  return (
    <nav className='px-10 gap-y-1 md:gap-y-0 md:px-50 max-[468px]:flex-col flex items-center justify-between py-3 text-black shadow-md'>
        <Link to="/"><span className='text-2xl font-bold text-gray-700'>Pranto</span></Link>
        <ul className='list-none flex justify-between gap-x-10'>
            <NavLink to="/" className={(e) => {return e.isActive ? "text-red-400" : "text-gray-500"} } ><li className='font-semibold'>Home</li></NavLink>
            <NavLink to="/about" className={(e) => {return e.isActive ? "text-orange-500" : "text-gray-500"}}><li className='font-semibold'>About</li></NavLink>
            <NavLink to="/contact" className={(e) => {return e.isActive ? "text-orange-500" : "text-gray-500"}}><li className='font-semibold'>Contact</li></NavLink>
            <NavLink to="/portfolio" className={(e) => {return e.isActive ? "text-orange-500" : "text-gray-500"}}><li className='font-semibold'>Portfolio</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar