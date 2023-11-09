import React from 'react'

const SuccessMetrics = () => {
  return (
    <div>
      <div className='h-[20vh] bg-secondary w-[100%] flex justify-around '>
      <div className='grid content-center'>
        <span className='text-primary font-bold text-5xl mb-2'>350 +</span>
        <p className='text-white'>Clients Worldwide</p>
      </div>
      <div className='grid content-center'>
        <span className='text-primary font-bold text-5xl mb-2'>20 +</span>
        <p className='text-white'>Team Members</p>
      </div>
      <div className='grid content-center'>
        <span className='text-primary font-bold text-5xl mb-2'>100 +</span>
        <p className='text-white'>Projects Completed</p>
      </div>
      <div className='grid content-center'>
        <span className='text-primary font-bold text-5xl mb-2'>85M +</span>
        <p className='text-white'>Revenue Generated</p>
      </div>
      </div>
    </div>
  )
}

export default SuccessMetrics
