import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({task , logOut}) => {

  const {userData, setUserData} = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

  const handleIncrement = () =>{

        const loggedInUserData = loggedInUser.data
        const newEmployeesData = userData.employeesData.map((emp)=>{
          if(emp.id === loggedInUserData.id){
              emp.taskCount.completed += 1
          }
        })
        setUserData({...userData , employees:newEmployeesData})
       window.alert("Task Completed sucessfully , Login again")
       logOut()
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm bg-red-600 text-white px-2 py-1 rounded">{task.category}</span>
      <span className="text-sm text-gray-400">{task.date}</span>
    </div>
    <h3 className="text-lg font-bold text-gray-100">{task.taskTitle}</h3>  
    <p className="text-gray-400 p-3">{task.taskDescription}</p>
       <div className="buttondiv flex gap-3 ">
           <button className="bg-green-500 text-2xl p-2 rounded-lg"  onClick={handleIncrement} >Mark as Completed</button>
           <button className="bg-red-500 text-2xl p-2 rounded-lg">Mark as failed</button>
       </div>
   </div>
    
  
  )
}

export default NewTask
