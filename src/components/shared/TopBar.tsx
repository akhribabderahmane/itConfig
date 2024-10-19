import React from 'react'

const TopBar = ({page,rounded=false}) => {
  return (
    <div className={` flex flex-row justify-center items-center relative  py-5 bg-itconfig-blue ${rounded?" rounded-tl-3xl":""}`}>
        <div className=' flex flex-row gap-2 absolute left-10 '>
            <div className=' w-5 aspect-square rounded-full bg-red-600'></div>
            <div className=' w-5 aspect-square rounded-full bg-yellow-600'></div>
            <div className=' w-5 aspect-square rounded-full bg-green-600'></div>
        </div>
      <div>
           <h1 className='font-bold text-2xl font-inter'>IT Config@{page}:∼</h1>
      </div>
    </div>
  )
}

export default TopBar
