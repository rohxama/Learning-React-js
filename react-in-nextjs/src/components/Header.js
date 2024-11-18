'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Header = (props) => {
  return (
    <>
      <div className='bg-slate-500 h-20 px-20 flex items-center justify-between'>
        <p className='text-4xl'>{props.logo}</p>
        <div className='flex items-center gap-6'>
          <Link href= "About" className='text-2xl'>About</Link>
          <Link href= "Contact" className='text-2xl'>Contact</Link>
          <Link href= "Services" className='text-2xl'>Services</Link>
          <Link href= "Account" className='text-2xl'>Account</Link>
        </div>
      </div>
    </>
  )
}

export default Header


