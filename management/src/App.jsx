import Login from './components/autho/login';
import Dashboard from './components/dashboard/employeeDashboard';
import AdminDashboard from './components/dashboard/adminDashboard';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const {userData , setUserData} = useContext(AuthContext);


  useEffect(() => {
          const loggedInUser = localStorage.getItem("loggedInUser")
          if(loggedInUser){
            const userdata = JSON.parse(loggedInUser)
            setUser(userdata.role)
            setLoggedInUserData(userdata.data)
          }
  }, []);



  const handleSubmitForm = (email, password) => {
    const admin = userData.AdminData.find(e => email === e.email && password === e.password);
    if (admin) {
      setUser("Admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'Admin', data: admin }));
    } else {
      const employee = userData.employeesData.find(e => email === e.email && password === e.password);
      if (employee) {
        setUser("Employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'Employee', data:employee}));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleSubmitForm={handleSubmitForm} /> :''}
      {user === "Admin" ? <AdminDashboard data={userData} changeUser={setUser} /> : (user === "Employee" ? <Dashboard Data={loggedInUserData} changeUser={setUser} /> : "")}
    </>
  );
};

export default App;
