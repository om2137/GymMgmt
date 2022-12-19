import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center'>
        <div>
            <input type="text" 
                className="w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500  focus:border-gray-700 outline-none transition"
                placeholder="Search"
            />
        </div>
    </div>
  )
}
