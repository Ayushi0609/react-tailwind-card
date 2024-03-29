const Card = ({img}) => {
  
  return (
    <div className='border-b-2 border-black border shadow-2xl m-3 rounded-md p-3 px-5 w-[380px]'>
        <div className='font-bold text-lg m-1'>question will go here</div>
        <img className="w-full h-44 rounded-md" src={img} alt='java' />
        <div className="flex mt-3 gap-2 justify-between">
            <div className='flex gap-1'>
                <img src="../like.png" alt="love" className='mt-[2px] h-4 w-4 cursor-pointer' />
                <span className='text-sm font-semibold'>232</span>
                <img src="../comment.png" alt="love" className='ml-2 cursor-pointer h-5 w-5' />
                <span className='text-sm font-semibold'>38</span>
            </div>
            <img src="../bookmark.png" alt="love" className='cursor-pointer h-5 w-5' />
        </div>
        <div className='my-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio ducimus veniam fuga vel accusantium, aliquid molestias repudiandae nemo officia rem dignissimos laboriosam? Dolorem consequuntur repudiandae provident eveniet officia et!
        </div>

        <div className='text-sm font-bold cursor-pointer'>Read more...</div>
    </div>
  )
}

export default Card