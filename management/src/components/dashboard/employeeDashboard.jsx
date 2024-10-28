import React, { useContext, useState } from 'react';
import NewTask from '../Tasklist/newTask';
import CompleteTask from '../Tasklist/completeTask';
import FailedTask from '../Tasklist/failedTask';
import AcceptTask from '../Tasklist/acceptTask';


const Dashboard = ({Data , changeUser}) => {

  const lougOutHandle = ()=>{
    localStorage.setItem("loggedInUser" , "")
    changeUser('')
  }

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative">
        <div className="relative">
          <h1
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl font-bold cursor-pointer hover:text-gray-100 transition duration-300"
          >
            Hello, <span className="text-blue-400">{Data.name}</span> 👋
          </h1>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute top-10 left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg">
              <ul className="p-2 space-y-2">
                <li className="hover:bg-gray-700 p-2 rounded transition duration-300 cursor-pointer">Profile</li>
                <li className="hover:bg-gray-700 p-2 rounded transition duration-300 cursor-pointer">Settings</li>
                <li className="hover:bg-gray-700 p-2 rounded transition duration-300 cursor-pointer">Help</li>
              </ul>
            </div>
          )}
        </div>

        {/* Log Out Button */}
        <button onClick={lougOutHandle} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Log Out
        </button>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-2 gap-0 mb-6">
        <div className="bg-gray-800 p-4 rounded-none text-center shadow-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-4xl font-bold text-blue-400">{Data.taskCount.newTask}</h2>
          <p className="text-lg text-gray-400">New Task</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-none text-center shadow-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-4xl font-bold text-green-400">{Data.taskCount.completed}</h2>
          <p className="text-lg text-gray-400">Completed</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-none text-center shadow-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-4xl font-bold text-yellow-400">{Data.taskCount.active}</h2>
          <p className="text-lg text-gray-400">Active</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-none text-center shadow-lg hover:bg-gray-700 transition duration-300">
          <h2 className="text-4xl font-bold text-red-400">{Data.taskCount.failed}</h2>
          <p className="text-lg text-gray-400">Failed</p>
        </div>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
       <h2 className="text-2xl font-bold" >New Task</h2>
        {Data.tasks.newTasks.length > 0 ? (Data.tasks.newTasks.map((task,index)=>(
        <NewTask key={index} task={task} logOut={lougOutHandle}/>
      ))) : ("No New Task")}


             <h2 className="text-2xl font-bold">Completed Task</h2>
        {Data.tasks.completedTasks.length > 0 ? (Data.tasks.completedTasks.map((task,index)=>(
        <CompleteTask key={index} task={task} />
      ))) : ("No completed Task")}


             <h2 className="text-2xl font-bold">Failed Task</h2>
      {Data.tasks.failedTasks.length > 0 ? (Data.tasks.failedTasks.map((task,index)=>(
         <FailedTask key={index} task={task} />
      ))) : ("No Failed Task")}


             <h2 className="text-2xl font-bold">Active Task</h2>
      {Data.tasks.activeTasks.length > 0 ? (Data.tasks.completedTasks.map((task,index)=>(
         <AcceptTask key={index} task={task} />
      ))) : ("No Active Task")}



      </div>


    </div>
  );
};

export default Dashboard;
