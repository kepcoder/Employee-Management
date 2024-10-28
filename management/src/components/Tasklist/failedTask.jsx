import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm bg-red-600 text-white px-2 py-1 rounded">{task.category}</span>
      <span className="text-sm text-gray-400">{task.date}</span>
    </div>
    <h3 className="text-lg font-bold text-gray-100">{task.taskTitle}</h3>  
    <p className="text-gray-400 p-3">{task.taskDescription}</p>
   </div>
  )
}

export default FailedTask;
