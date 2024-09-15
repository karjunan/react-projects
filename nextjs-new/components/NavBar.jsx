
const Links = [
    {href:'/about', label: 'about'},
    {href:'/home', label: 'home'},
    {href:'/client', label: 'client'},
    
]


import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-base-300'>
        <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row '>
             <Link href='/' className='btn btn-primary'>  Next Js</Link>
             <ul className='menu menu-horizontal md:ml-8'> 
              {
                Links.map((link) => {
                    return <li key={link.href}>
                        <Link href={link.href} className='capitalize'>
                            {link.label}
                        </Link>
                    </li>
                })
              }  
              </ul>
        </div>

    </nav>
  )
}

export default NavBar