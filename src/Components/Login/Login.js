import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'
const Login = () => {

  const [input, setInput] = useState({
    email: "",
    pwd: ""
  });

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const RegisterUser = JSON.parse(localStorage.getItem("user"));
      const result = RegisterUser.find((user)=>{
          return user.email===input.email && user.pwd=== input.pwd;
      })
      console.log("login details checked",result)

      result ? navigate('/dashboard') : alert("Wrong email or pwd");
      
  }

  // const handleLoginClick = (e) => {
  //   e.preventDefault();

  // }
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate('/')
  }
  return (
    <>
      <div className='main'>
        <div className='lform'>
          <p className='register'>Login</p>
          <form onSubmit={handleLogin}>
            <table>
              <tbody>
              <tr>
                <td><label className='lable'>Username</label></td>
                <td><input className='input' type='text'
                  name='email' value={input.email}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} required/></td>
              </tr>
              <tr>
                <td><label className='lable'>Password</label></td>
                <td><input className='input' type='password'
                  name='pwd' value={input.pwd}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} required/></td>
              </tr>
              </tbody>
            </table>
            <button className='btn' onClick={handleSignUpClick}>Sign Up</button>
            <button className='btn'>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
