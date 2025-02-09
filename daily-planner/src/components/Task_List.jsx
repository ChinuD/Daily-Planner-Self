import React, { useState } from 'react';
import Task_Item from './Task_Item';
import Task_Form from './Task_Form';

function Task_List() {
  const [tasks, setTasks] = useState([]); // Ensure an empty array by default

  const addTask = (task) => {
    if (!task || !task.name || !task.time || !task.date) return; // Prevent invalid tasks
    setTasks([...tasks, task]); // Append the task to the list
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-2xl font-semibold">Daily Planner</h1>
      
      {/* Task Form */}
      <Task_Form onAddTask={addTask} />

      {/* Task List */}
      <div className="w-[350px] border rounded-md p-3 flex flex-col gap-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks added yet</p>
        ) : (
          tasks.map((task, index) => (
            <Task_Item key={index} task={task} />
          ))
        )}
      </div>
    </div>
  );
}

export default Task_List;
