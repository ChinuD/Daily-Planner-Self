import React, { useState } from 'react'

function Task_Form() {

  const [taskName, setTaskName] = useState('')
  const [taskDate, setTaskDate] = useState()
  const [taskTime, setTaskTime] = useState()
  console.log(taskName)
  console.log(taskTime)
  console.log(taskDate)

  onAddTask({taskName, taskTime, taskDate});
  setTaskTime('')
  setTaskDate('')

  return (
    <div className='max-w-fit max-h-fit border m-2 rounded-md py-2 px-2 flex flex-col gap-2'>
        <input type="text" onChange={(e)=>setTaskName(e.target.value)} className='border rounded-sm p-1 min-w-fit'/>
        <div className="flex flex-row justify-between gap-2">
            <input type="Time" onChange={(e)=>setTaskTime(e.target.value)}  className='border rounded-sm p-1'/>
            <input type="Date" onChange={(e)=>setTaskDate(e.target.value)}  className='border rounded-sm p-1'/>
            <button className='border rounded-sm px-2' onClick={onAddTask} >Add</button>
        </div>
    </div>
  )
}

export default Task_Form