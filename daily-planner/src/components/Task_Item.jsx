import React from 'react'

function Task_Item() {
  return (
    <div className='w-[90%] h-[40px] border rounded-sm mx-auto p-1 flex flex-row justify-evenly'>
      <h3 className='w-[50%] my-auto'>Hello this is me </h3>
      <div className="bg-blue-600 text-white w-[60px] h-[25px] my-auto rounded-[4px] flex justify-center items-center">
        12:30
      </div>
      <div className="my-auto flex">
        <input type="checkbox"  />
      </div>
    </div>
  )
}

export default Task_Item