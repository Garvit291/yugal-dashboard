import React from 'react'

function Card() {
  return (
    <div className='h-80 bg-red-400 m-2 '>
        <div className='w-full relative flex justify-center  bg-black h-1/4'>
            <div className='w-20 h-20 translate-y-10  rounded-full bg-green-300 border-white border-2px-solid'>
                    
            </div>
        </div>
        <div className='pt-10 flex flex-col items-center p-2'>
            <div>
                Koushik dutta
            </div>
            <div>
                web mobile software dev
            </div>
            <div>
                bengalru
            </div>
            <div>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis accusamus consectetur voluptatem saepe aliquam laboriosam aliquid quos itaque quae ipsa impedit officiis iste maiores, quis quia magnam cumque </p>
            </div>
            <button className='bg-white border-3px-solid border-blue-300 text-blue-200'>ios Dev</button>
        </div>

    </div>
  )
}

export default Card