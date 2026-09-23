import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200 text-black p-5 mb-2'>
        <Link href='/' className='mr-5'>Next.js</Link>
        <Link href='/users'>Users</Link>
    </div>
  )
}

export default NavBar