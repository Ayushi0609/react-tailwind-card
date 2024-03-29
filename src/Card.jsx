import React from 'react'

const Card = ({img}) => {
  return (
    <div className='border-b-2 bg-purple-200 border-black border rounded-md m-3 p-3 px-5 w-[380px]'>
        <div className='font-bold text-lg m-1'>question will go here</div>
        <div className='w-full h-44 rounded-md bg-white'></div>
        <div className="flex mt-3 gap-2 justify-between">
            <div className='flex gap-1'>
                <img src="../like.png" alt="love" className='mt-[2px] h-4 w-4 cursor-pointer' />
                <span className='text-sm font-semibold'>232</span>
                <img src="../comment.png" alt="love" className='ml-2 cursor-pointer h-5 w-5' />
                <span className='text-sm font-semibold'>38</span>
            </div>
            <img src="../bookmark.png" alt="love" className='cursor-pointer h-5 w-5' />
        </div>
        <div className='my-3 font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio ducimus veniam fuga vel accusantium, aliquid molestias repudiandae nemo officia rem dignissimos laboriosam? Dolorem consequuntur repudiandae provident eveniet officia et!
        </div>

        <div className='text-sm font-bold cursor-pointer'>Read more...</div>
    </div>
  )
}

export default Card