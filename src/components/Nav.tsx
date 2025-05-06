import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='px-5 lg:py-3  sticky top-0 z-50 py-5  border-b-3 lg:bg-gray-200 bg-gray-400 flex justify-between items-center'>
                <div>
                    <Image
                    alt=''
                    src="/logo.png"
                    width={100}
                    height={100}
                    />
                </div>
                <button className='px-3.5 py-2.5 bg-black text-white rounded-full font-bold font-sans'>
                    CONTACT ME
                </button>
    </nav>
  )
}

export default Nav