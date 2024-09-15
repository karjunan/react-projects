import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
      <Link href='/about'>About page</Link>
    </div>
  )
}

export default HomePage;