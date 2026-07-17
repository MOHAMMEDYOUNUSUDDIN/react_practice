import React from 'react'

const TaskListNum = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className=' px-9 py-6 rounded-xl h-40 w-[23%] bg-amber-300 border-2'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' px-9 py-6 rounded-xl h-40 w-[23%] bg-blue-300 border-2'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' px-9 py-6 rounded-xl h-40 w-[23%] bg-green-300 border-2'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' px-9 py-6 rounded-xl h-40 w-[23%] bg-amber-600 border-2'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNum
