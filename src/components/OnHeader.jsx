import React from 'react'

const OnHeader = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-around pt-3 w-[100%] md:gap-0 gap-2 '> 
        <div className="topic hover:cursor-pointer ">
                <h1 className='mt-0 font-bold'>Topic</h1>
        </div>
        <div className='links text-white text 1xl flex flex-col md:flex-row w-[100%] lg:w-[50%] justify-around items-center' >
                <a href="#" className='text-new'>Home</a>
                <a href="" className='hover:text-new'>BrowseTopics</a>
                <a href="" className='hover:text-new'>How it works</a>
                <a href="" className='hover:text-new'>FAQs</a>
                <a href="" className='hover:text-new'>Contact</a>
                <a href="" className='hover:text-new'>Pages</a>
        </div>
        <div className="icon w-10 bg-white h-10 rounded-full hover:bg-new hover:cursor-pointer hidden lg:flex lg:items-center lg:align-middle overflow-hidden ">
                    <img src="/user.png" className='w-[50%] h-1/2 ml-2.5 ' alt="" />
            </div>
        </div>
             <div className='line border-b-1  opacity-15 border-white lg:block hidden'>
        </div>
    </div>
  )
}

export default OnHeader
