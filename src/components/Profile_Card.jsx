import React from 'react'

export default function Profile_Card() {
  return (
    
    <div className='bg-white shadow-xl/30 w-180 h-80 flex items-center justify-center rounded-4xl'>
        <div>
            <img  className=' h-52 w-52 rounded-full mr-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbkECXtEG_6-RV7CSNgNoYUGZE-JCliYm9g&s" alt="" />
        </div>
        
        <div className='mb-8'>
            <h1 className='text-3xl font-bold'>Fahad Bin Javed</h1>
            <br />
            <h2 className='text-2xl'>Web Developer</h2>
        </div>
    </div>
  )
}
