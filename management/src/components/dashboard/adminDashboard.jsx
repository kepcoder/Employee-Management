import React, { useContext, useState } from 'react';
import { Getlocalstorage } from '../../Utils/localStorage';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({changeUser}) => {


  const {userData, setUserData} = useContext(AuthContext);

  const allEmployessData = Getlocalstorage()


  const [taskTitle , setTaskTitle] = useState("")  
  const [taskDescription , setTaskDescription] = useState("")  
  const [taskDate , setTaskDate] = useState("")  
  const [assignTo , setAssignTo] = useState("")  
  const [category , setCategory] = useState("")  



  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {taskTitle, taskDescription, taskDate, category}

    const userDataFromContext = userData.employeesData
    console.log(userDataFromContext)
     userDataFromContext.forEach((emp)=>{
        if(emp.name == assignTo){
          emp.tasks.newTasks.push(task)
          emp.taskCount.newTask += 1
        }
     })
     setUserData({...userData , userDataFromContext})
     window.alert(` task ${taskTitle} Assign to ${assignTo} sucessfully`)
      
     setTaskTitle('')
     setTaskDescription('')
     setTaskDate('')
     setCategory('')
     setAssignTo('')

  };

  const lougOutHandle = ()=>{
    localStorage.setItem("loggedInUser" , "")
    changeUser('')
  }




  return (
    <div className="min-h-screen gap-5 flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      {/* Form Container */}
      <div className="w-full max-w-lg">
        {/* Form Heading */}
        <div className="flex items-center mb-6">
        <button onClick={lougOutHandle} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Log Out
        </button>
          <h1 className="text-3xl font-bold ml-4">Create Task</h1>
        </div>

        {/* Form */}
        <form onSubmit={(e)=>handleSubmit(e)} className="space-y-6">
          {/* Task Title */}
          <div>
            <label className="block text-lg font-medium text-gray-400 mb-1" htmlFor="title">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"  
              value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}
              placeholder="Make a UI Design"
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"

            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium text-gray-400 mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={taskDescription}
              onChange={(e)=>setTaskDescription(e.target.value)}
              placeholder="Detailed description of task (Max 500 words)"
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
             
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-lg font-medium text-gray-400 mb-1" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-lg font-medium text-gray-400 mb-1" htmlFor="assignTo">
              Assign To
            </label>
            <input
              type="text"
              id="assignTo"
              name="assignTo"
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
              placeholder="John Doe"
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-medium text-gray-400 mb-1" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              placeholder="Design, Development, etc..."
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>

    <div className="text">
    <h1 className="text-3xl font-bold">All Tasks</h1>
    </div>
    
    <div className="allTask w-full flex flex-col gap-3">
                
      {allEmployessData.employeesData.length > 0 ? allEmployessData.employeesData.map((employee, index)=>(
            <div key={index}  className=" bg-gray-800 rounded-lg flex items-center justify-between p-4" >
                <h1 className="text-2xl ">{employee.name}</h1>
                {employee.tasks.activeTasks.map((task,index)=>(
                  (task ? <h3 className="text-2xl" key={index}>{task.taskTitle}</h3>:<h3>No Task</h3>)
                ))}
                <h3 className="text-2xl "> Status </h3>
            </div>
      )) : <h2>No employee</h2>}
                  
      </div>
    </div>
  );
};

export default AdminDashboard;
