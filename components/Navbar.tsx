import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3 text-white font-bold'>
        <Link href={'/'}>Deni3d</Link>
        <Link href={'/addTopic'} className='bg-white text-black p-2'>Add Topic</Link>
    </nav>
  )
}

export default Navbar