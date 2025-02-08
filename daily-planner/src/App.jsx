import { useState } from 'react'
import './App.css'
import Task_Form from './components/Task_Form'
import Task_Item from './components/Task_Item'
import Task_List from './components/Task_List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-start items-center flex-col gap-4 w-screen h-screen p-4'>
      <h1 className='text-4xl'>Daily Planner</h1>
      <Task_Form/>
      <div className="">
        <Task_Item/>
      </div>
      <Task_List/>
    </div>
  )
}

export default App
