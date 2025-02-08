import React from 'react'
import Task_Item from './Task_Item'

function Task_List() {
  return (
    <div className='w-[300px] h-[300px] border rounded-sm mx-auto pt-2 flex flex-col gap-2'>
      <Task_Item/>
      <Task_Item/>
    </div>
  )
}

export default Task_List