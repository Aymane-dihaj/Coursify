'use client'

import Link from 'next/link'
import TemporaryDrawer from './ui/drawer'

const Navbar = () => {
    return (
      <div>
          <nav className='p-5  flex items-center justify-between px-8 lg:px-12 z-40 fixed left-0 right-0 top-0  backdrop-blur-md'> {/* Added bg-black for clarity */}
              <div>
                  <Link href='/'><h2 className='text-black text-2xl lg:text-3xl font-bold text-gray-700'>Coursify</h2></Link>
              </div>
              <div className='items-center hidden md:flex'>
                  <ul className='text-white flex items-center gap-10'>
                      <li className='cursor-pointer'><Link className='hover:text-gray-200 text-black font-semibold' href="/">Login</Link></li>
                  </ul>
              </div>
              <TemporaryDrawer/>
          </nav>
      </div>
    )
  }
  

export default Navbar