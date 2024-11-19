'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

const page = () => {

    const [logo, setlogo] = useState('GoodCo.')

    const [marks, setmarks] = useState(80)
    return (
        <>
            <Header logo={logo} />
            <h1>My marks is {marks}</h1>
            <button onClick={() => { setmarks(90) }} className='bg-black p-1 mt-3 text-white rounded-md'>Update</button>
        </>

    )
}

export default page