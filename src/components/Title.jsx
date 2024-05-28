import React from 'react'

const Title = ({heading, subTitle}) => {
  return (
    <div className='py-20'>
     <h1 className="text-3xl text-red-500 font-extrabold mb-3">{heading}</h1>
     <p className=' text-gray-500 '>{subTitle}</p>
    </div>
  )
}

export default Title
