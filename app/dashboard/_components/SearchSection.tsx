import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br  text-white from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center' >
        <h2 className='text-3xl font-bold'>
            Browse All Templates
        </h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex w-[50%] gap-2 items-center p-2 border rounded-md bg-white my-5'>
                <Search className='text-primary'/>
                <input onChange={(event)=>onSearchInput(event.target.value)} type="text" placeholder='Search..' className='bg-transparent w-full text-black outline-none'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection