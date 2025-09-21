import React from 'react'

export default function Profile_Card({picture,name,title}) {
  return (
    
    <div className='bg-white shadow-xl/30 w-180 h-80 flex items-center justify-center rounded-4xl'>
        <div>
            <img  className=' h-52 w-52 rounded-full mr-12' src={picture} alt="" />
        </div>
        
        <div className='mb-8 flex flex-col'>
            <h1 className='text-3xl font-bold mb-4'>{name}</h1>
            <h2 className='text-2xl'>{title.toUpperCase()}</h2>
        </div>
    </div>
  )
}
