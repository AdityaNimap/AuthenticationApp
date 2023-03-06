import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("loggedin")
    navigate("/login")
  }
  return (
    <div>
      Dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
