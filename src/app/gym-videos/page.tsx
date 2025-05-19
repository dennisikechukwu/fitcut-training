import React from 'react'
import { Search } from 'lucide-react'

const GymVidoes = () => {
  return (
    <div className=' p-10  '>
      <div className='flex justify-center'>
        <div className="flex items-center justify-center gap-4 w-full max-w-xl  pr-4 rounded-md border-2 border-gray-700">
        <input
          type="text"
          placeholder="Search for workouts..."
          className="w-full p-4 rounded-sm lg:bg-gray-200 bg-gray-400 font-sans font-semibold  outline-none text-gray-700 border-gray-700 border"
          
        />
        <div >
        <Search className='text-red-600 font-bold'/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default GymVidoes