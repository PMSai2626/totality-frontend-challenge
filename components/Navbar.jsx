'use client'


import Link from 'next/link'
import React, { useState } from 'react'
import { useCart } from '@/app/context/CartContext'

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='text-white text-2xl font-bold'>
                <Link href='/'>
                Booking Management
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className='text-white block lg:hidden'>
                  <svg xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'  />
                  </svg>

                </button>

            </div>
            <div className={`lg:flex lg:space-x-4  ${isOpen ? 'block' : 'hidden' }`}>
                <Link href='/'  className='text-white hover:text-gray-400' >
                Home
                </Link>
                <Link href='/properties' className='text-white hover:text-gray-400 ml-2'>
                Properties
                </Link>
                <Link href='/cart' className='text-white hover:text-gray-400 ml-2'>
                 cart <span className=' text-white '> {cart.length} </span> 
                </Link>

            </div>

        </div>

    </nav>
  )
}

export default Navbar
