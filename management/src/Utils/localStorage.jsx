const Employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "123",
    taskCount: {
      active: 1, // Number of active tasks
      newTask: 1, // Number of new tasks
      completed: 1, // Number of completed tasks
      failed: 1 // Number of failed tasks
    },
    tasks: {
      activeTasks: [
        {
          taskTitle: "Fix some bugs",
          taskDescription: "Fix bugs in the application.",
          taskDate: "2024-10-17",
          category: "Bugfix"
        }
      ],
      newTasks: [
        {
          taskTitle: "Build a React App",
          taskDescription: "Create a single-page application using React.",
          taskDate: "2024-10-15",
          category: "Tech"
        }
      ],
      completedTasks: [
        {
          taskTitle: "Write Unit Tests",
          taskDescription: "Add unit tests for components in the app.",
          taskDate: "2024-10-16",
          category: "Testing"
        }
      ],
      failedTasks: [
        {
          taskTitle: "Implement feature X",
          taskDescription: "Feature X did not meet the requirements.",
          taskDate: "2024-10-14",
          category: "Tech"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 2,
      completed: 0,
      failed: 1
    },
    tasks: {
      activeTasks: [],
      newTasks: [
        {
          taskTitle: "Set up a Node.js Server",
          taskDescription: "Configure a server using Node.js and Express.",
          taskDate: "2024-10-16",
          category: "Tech"
        },
        {
          taskTitle: "Connect API to Frontend",
          taskDescription: "Integrate the Node.js API with the frontend.",
          taskDate: "2024-10-17",
          category: "Integration"
        }
      ],
      completedTasks: [],
      failedTasks: [
        {
          taskTitle: "Resolve API issue",
          taskDescription: "Failed to fix the API response error.",
          taskDate: "2024-10-15",
          category: "Tech"
        }
      ]
    }
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: {
      activeTasks: [
        {
          taskTitle: "Database Integration",
          taskDescription: "Integrate MongoDB with the application.",
          taskDate: "2024-10-17",
          category: "Tech"
        }
      ],
      newTasks: [],
      completedTasks: [
        {
          taskTitle: "Fix Database Schema",
          taskDescription: "Resolve schema design issues in MongoDB.",
          taskDate: "2024-10-18",
          category: "Tech"
        }
      ],
      failedTasks: [
        {
          taskTitle: "Implement feature Y",
          taskDescription: "Feature Y development failed.",
          taskDate: "2024-10-15",
          category: "Development"
        }
      ]
    }
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: {
      activeTasks: [
        {
          taskTitle: "Implement Authentication",
          taskDescription: "Add user authentication using JWT.",
          taskDate: "2024-10-18",
          category: "Tech"
        }
      ],
      newTasks: [
        {
          taskTitle: "Set up OAuth",
          taskDescription: "Integrate OAuth for third-party login.",
          taskDate: "2024-10-19",
          category: "Security"
        }
      ],
      completedTasks: [],
      failedTasks: []
    }
  }
];

  
const Admin =[
    {
       id: 1,
       email: "admin@example.com",
       password: "123"
    }
];
  


export const Setlocalstorage = ()=>{

   localStorage.setItem('employees', JSON.stringify(Employees))
   localStorage.setItem('Admin', JSON.stringify(Admin))

}

export const Getlocalstorage = ()=>{
  const employeesData = JSON.parse(localStorage.getItem('employees'))
  const AdminData = JSON.parse(localStorage.getItem('Admin'))
  return {employeesData, AdminData}
}