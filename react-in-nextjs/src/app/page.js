'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

const page = () => {

    const [marks, setmarks] = useState(80)
    return (
        <>
            <Header />
            <h1>My marks is {marks}</h1>
            <button onClick={() => { setmarks(90) }} className='bg-black p-1 mt-3 text-white rounded-md'>Update</button>
        </>

    )
}

export default page