import React, { useState } from 'react';

function Task_Form({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleAddTask = () => {
    if (!taskName.trim() || !taskDate || !taskTime) {
      alert("Please fill in all fields!");
      return;
    }

    // Create task object
    const newTask = {
      name: taskName,
      date: taskDate,
      time: taskTime,
    };

    onAddTask(newTask); // Send to Task_List
    setTaskName(''); // Reset input
    setTaskDate('');
    setTaskTime('');
  };

  return (
    <div className="w-[350px] border rounded-md p-4 flex flex-col gap-3 shadow-lg">
      <input 
        type="text" 
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} 
        className="border rounded-md p-2 w-full outline-none"
        placeholder="Enter Task Name"
      />
      <div className="flex flex-row gap-3">
        <input 
          type="time" 
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}  
          className="border rounded-md p-2 w-[110px] outline-none"
        />
        <input 
          type="date" 
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}  
          className="border rounded-md p-2 w-[140px] outline-none"
        />
        <button 
          className="border rounded-md px-4 bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Task_Form;
