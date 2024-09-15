'use client'
import React, { useState } from 'react'


const page = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1 className='text text-pretty'>{counter}</h1>
        <button className='btn btn-primary' onClick={() => setCounter(counter + 1)}> increase </button>
    </div>
  )
}

export default page