'use client'

import React from 'react'
import Image from 'next/image'

// Author Info
const author = {
  name: 'Isaac Chukwumeze',
  date: 'May 8, 2025',
  image: '/issaca.jpg',
}


const Outdoor = () => {
  return (
    <section className='w-full'>
            
                  {/* Header Section */}
                  <div className='p-10 bg-black flex flex-col items-center text-white space-y-5'>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold'>
                      The Outdoor Workout Plan <br /> for Weight Loss (Obese & Joint-Friendly)
                    </h1>
                    <div className='flex items-center gap-5'>
                      <div className='border-2 rounded-full border-white'>
                        <Image
                          src={author.image}
                          alt='Author'
                          width={130}
                          height={130}
                          className='rounded-full h-[130px] w-[130px] object-cover max-sm:h-[90px] max-sm:w-[112px]'
                        />
                      </div>
                      <div>
                        <p>
                          Written by: <span className='font-semibold'>{author.name}</span>
                        </p>
                        <p>
                          Last updated: <span className='font-semibold'>{author.date}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className='mt-6 py-3 px-6 lg:px-10 text-center text-md lg:text-xl font-sans'>
                    This <span className='font-bold'>low-impact, fat-burning plan</span> is designed for <span className='font-bold'>obese individuals</span> looking to <span className='font-bold'>lose weight, improve endurance, and strengthen muscles</span>—all while <span className='font-bold'>exercising outdoors</span>.
                  </p>
            
    </section>
  )
}

export default Outdoor