'use client'

import React, { useState } from 'react'

const page = () => {

    const [marks, setmarks] = useState(80)
    return (
        <>
            <h1>My marks is {marks}</h1>
            <button onClick={() => {setmarks(90)}} className='bg-white p-1 mt-3 text-black rounded-md'>Update</button>
        </>

    )
}

export default page