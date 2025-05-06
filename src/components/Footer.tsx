import React from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-black text-white px-6 py-16 mt-20'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center lg:px-5'>
                <div className='max-sm:space-y-4 items-start'>
                    <div>
                                        <Image
                                        alt=''
                                        src="/logo.png"
                                        width={250}
                                        height={100}
                                        />
                                    </div>
                <p className='font-sans text-md'>Fitcut cuts through the fitness B.S. to help people<br className='hidden lg:block'/> get stronger, healthier, and more confident – all with a fun,<br className='hidden lg:block'/> no-nonsense approach.

</p>
            <div className='mt-5 flex gap-5 items-center'>
            <Mail size={50} className='text-[#D44638]'/>
            <Instagram size={45} className='text-[#b44ac0]'/>
            </div>
                </div>
                <div className='flex gap-20  lg:justify-end max-lg:justify-center'>
                    <ul className='space-y-2.5 text-lg font-sans'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Articles</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='space-y-2.5 text-lg'>
                        <li>Book a call</li>
                        <li>Newsletter</li>
                        
                    </ul>
                </div>
            </div>
    </footer>
  )
}

export default Footer