import React from 'react'

function Task_Form() {
  return (
    <div className='max-w-fit max-h-fit border m-2 rounded-md py-2 px-2 flex flex-col gap-2'>
        <input type="text" className='border rounded-sm p-1 min-w-fit'/>
        <div className="flex flex-row justify-between gap-2">
            <input type="Time" className='border rounded-sm p-1'/>
            <input type="Date" className='border rounded-sm p-1'/>
            <button className='border rounded-sm px-2'>Add</button>
        </div>
    </div>
  )
}

export default Task_Form