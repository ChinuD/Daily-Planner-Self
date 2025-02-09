import React from 'react';

function Task_Item({ task }) {
  // Ensure the task exists and has expected properties
  if (!task || !task.name || !task.time) {
    return <p className="text-red-500">Invalid Task Data</p>;
  }

  return (
    <div className="w-full flex items-center justify-between border p-3 rounded-md shadow-sm">
      <h3 className="font-semibold">{task.name}</h3>
      <span className="bg-blue-500 text-white px-3 py-1 rounded-md">{task.time}</span>
      <input type="checkbox" className="w-5 h-5 cursor-pointer"/>
    </div>
  );
}

export default Task_Item;
